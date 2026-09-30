---
id: PROJECT-0240
type: project
question: AQE解决什么问题？
difficulty: 0
topic: [面试宝典]
source_type: knowledge
---

**一、面试官真正想考什么？**

不是让你背定义，考的是**实操经验和问题解决能力**：
- 你是否有真实的动手经验
- 你能否讲清楚具体的做法和效果
- 你对这个问题的理解深度

**二、回答思路**

先给结论 → 展开核心要点（不超过3个）→ 结合项目经验 → 适用边界

**三、参考答案（面试标准版）**

AQE三大功能：

**1. 动态合并Shuffle分区（Coalescing Shuffle Partitions）**
- 设了2000个分区，但实际很多分区数据很少 → AQE自动合并小分区
- 效果：减少Task数、避免小文件

**2. 动态切换Join策略（Converting Sort-Merge Join to Broadcast Join）**
- 编译时认为是大表Join大表（用SortMergeJoin）
- 运行时发现经过过滤后一侧表只剩10MB → 自动切换为BroadcastJoin
- 效果：消除不必要的Shuffle

**3. 动态处理数据倾斜（Optimizing Skew Joins）**
- 发现某分区数据量远大于中位数 → 自动拆分为多个子Task并行处理
- 效果：不用手动Salting

```
spark.sql.adaptive.skewJoin.enabled = true
spark.sql.adaptive.skewJoin.skewedPartitionFactor = 5
spark.sql.adaptive.skewJoin.skewedPartitionThresholdInBytes = 256MB
```

**结合项目：** QQ频道开启AQE后，大部分数据倾斜问题自动解决，只有极端情况（某Key占比超50%）才需要手动处理。

**四、技术知识补充**

**项目结合点：** 回答时务必结合QQ频道实际场景，体现"不是背八股，是真做过"的信号。

**五、追问预判**

1. **追问：Spark任务OOM怎么排查？→ 看Executor GC Time/Shuffle Spill/Driver Log，定位是堆内还是堆外。**

2. **追问：这个方案在你的项目中是怎么落地的？**
   → 结合QQ频道百亿级日志的实际场景，说明具体做法和效果。

3. **追问：如果重新设计，你会改什么？**
   → 体现反思能力：讲一个当初的取舍，现在回头看可以优化的点。


**六、常见错误/踩坑提醒**

- ❌ 直接说调参数 → ✅ 先通过Spark UI定位问题类型，再针对性优化
- ❌ 不区分倾斜类型 → ✅ Join倾斜/聚合倾斜/分区不均方案不同
- ❌ 忽略全链路影响 → ✅ 优化一个环节可能影响下游（如增加分区→小文件）

**七、记忆版（20秒压缩）**

> AQE三功能：合并小分区（减小文件）、动态切BroadcastJoin（消除Shuffle）、自动处理倾斜（拆分大分区）。开启后大部分倾斜自动解决。

---
---
