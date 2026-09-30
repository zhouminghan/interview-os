---
id: PROJECT-0224
type: project
question: SQL优化案例介绍
difficulty: 0
topic: [面试宝典]
source_type: knowledge
---

**一、面试官真正想考什么？**

不是让你背定义，考的是**概念理解深度和表达能力**：
- 你能否一句话抓住本质，不是背一段定义
- 你能否由浅入深地讲清楚
- 你有没有真实使用/落地的经验

**二、回答思路**

一句话定义本质 → 核心机制/原理展开 → 结合项目说落地场景 → 补充适用边界

**三、参考答案（面试标准版）**

> 控制在2分钟，用STAR框架

**背景（S）：** QQ频道内容推荐效果分析，需要将百亿级曝光日志和千万级内容特征表做Join，计算各类内容的点击转化率。

**问题（T）：** 任务运行时间从最初的20分钟逐渐增长到3小时，且频繁OOM。

**定位（A）：**
1. Spark UI发现：Stage 2（Join阶段）有5个Task耗时2.5小时，其他195个Task 5分钟完成
2. 分析热点Key：发现NULL值和"系统推荐"这个content_type占了40%的数据
3. 根因：Join Key包含content_type字段，少数热点值导致严重倾斜

**优化方案：**
```sql
-- 方案：热点Key隔离 + Broadcast
-- Step 1: 热点数据单独Broadcast Join
SELECT /*+ BROADCAST(feat) */ *
FROM log_hot l JOIN content_feat feat ON l.content_id = feat.content_id
WHERE l.content_type IN ('系统推荐')

UNION ALL

-- Step 2: 普通数据正常Join
SELECT *
FROM log_normal l JOIN content_feat feat ON l.content_id = feat.content_id
WHERE l.content_type NOT IN ('系统推荐')
```

**效果（R）：** 任务时长从3小时降到25分钟，消除OOM。

**四、技术知识补充**

**项目结合点：** 回答时务必结合QQ频道实际场景，体现"不是背八股，是真做过"的信号。

**五、追问预判**

1. **追问：Spark任务OOM怎么排查？→ 看Executor GC Time/Shuffle Spill/Driver Log，定位是堆内还是堆外。**

2. **追问：这个方案在你的项目中是怎么落地的？**
   → 结合QQ频道百亿级日志的实际场景，说明具体做法和效果。

3. **追问：如果重新设计，你会改什么？**
   → 体现反思能力：讲一个当初的取舍，现在回头看可以优化的点。


**六、常见错误/踩坑提醒**

- ❌ 只说优化手段不说定位过程 → ✅ 先定位瓶颈（EXPLAIN/执行计划），再选方案
- ❌ 优化没有量化效果 → ✅ 必须说"从X降到Y，提升Z%"
- ❌ 把所有优化手段堆上来 → ✅ 针对具体问题选最合适的方案

**七、记忆版（30秒压缩）**

> 百亿日志Join倾斜案例：5个Task占用2.5小时（其他5分钟）→ 发现NULL和热点content_type占40% → 热点Key隔离+Broadcast → 3小时降到25分钟。

---
---
