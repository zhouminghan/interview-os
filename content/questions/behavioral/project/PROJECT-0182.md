---
id: PROJECT-0182
type: project
question: 项目中做过哪些性能优化？
difficulty: 0
topic: [面试宝典]
source_type: knowledge
---

**一、面试官真正想考什么？**

不是问你知道哪些优化手段（那是八股），而是考：
- 你是否真正动手优化过
- 你能否用STAR框架讲清楚一个优化案例
- 你的优化是系统性的还是"碰运气调参"

**二、回答思路**

先总后分：先说优化分几类 → 挑一个最有深度的展开讲

**三、参考答案（面试标准版）**

> 控制在2-3分钟

我做过的优化主要分三类：

**第一类：数据倾斜优化。**
最典型的案例：频道内容曝光日志按user_id做Join时，头部活跃用户（大V/机器人）数据量是普通用户的数千倍。

```text
背景：百亿曝光日志 Join 用户维表
问题：个别Task处理30分钟，其他Task 2分钟完成
定位：Spark UI → Stage详情 → Task时间分布 → 确认热点Key
原因：top 100 user_id占了30%的数据
方案：热点Key隔离 + Broadcast Join处理大Key
效果：任务时长从40分钟降到12分钟，提升70%
```

**第二类：Shuffle优化。**
- 调整shuffle分区数（从默认200调到2000-5000适配百亿级数据）
- 开启AQE让Spark自动合并过小分区
- Map端预聚合减少Shuffle数据量

**第三类：资源优化。**
- 小文件合并（通过DISTRIBUTE BY + 控制reducer数量，单文件128MB-256MB）
- 存储优化（ORC/Parquet列式存储 + Snappy压缩）
- 分区裁剪（确保查询条件命中分区字段，避免全表扫描）

**四、技术知识补充**

热点Key隔离方案：
```sql
-- Step 1: 识别热点Key
SELECT user_id, COUNT(*) AS cnt 
FROM log_table 
GROUP BY user_id 
HAVING cnt > 1000000;

-- Step 2: 热点Key走Broadcast Join
SELECT /*+ BROADCAST(dim) */ *
FROM log_hot l JOIN user_dim dim ON l.user_id = dim.user_id;

-- Step 3: 普通Key走正常Shuffle Join
SELECT * 
FROM log_normal l JOIN user_dim dim ON l.user_id = dim.user_id;

-- Step 4: UNION ALL合并结果
```

**五、追问预判**

1. **追问：AQE具体解决什么问题？**
   → 三个核心功能：① 动态合并过小Shuffle分区 ② 动态切换Join策略（发现小表自动转BroadcastJoin） ③ 动态处理SkewJoin（拆分倾斜分区）

2. **追问：优化后怎么验证效果？**
   → 对比优化前后：① 任务运行时长 ② Shuffle数据量 ③ GC时间 ④ Spill次数。用Spark UI的Stage和Task指标对比。

3. **追问：有没有优化失败的经历？**
   → 有。一次把shuffle分区从200调到10000，结果小文件暴增，下游查询反而变慢。教训是优化需要看全链路影响，不能只盯一个环节。

**六、常见错误/踩坑提醒**

- ❌ 只说方法不说量化效果 → ✅ 必须有"从X分钟降到Y分钟，提升Z%"
- ❌ 背一堆优化手段但没有真实案例 → ✅ 至少一个案例用STAR框架展开

**七、记忆版（30秒压缩）**

> 三类优化：倾斜（热点Key隔离+Broadcast，任务40min→12min）、Shuffle（分区数调整+AQE+Map端聚合）、资源（小文件合并+列式存储+分区裁剪）。核心方法论：Spark UI定位 → 确认瓶颈 → 针对性优化 → 量化效果。

---
