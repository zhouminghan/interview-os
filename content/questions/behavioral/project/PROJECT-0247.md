---
id: PROJECT-0247
type: project
question: Spark参数如何调优？
difficulty: 0
topic: [面试宝典]
source_type: knowledge
---

**一、面试官真正想考什么？**

不是让你背定义，考的是**方法论和实操能力**：
- 你有没有成体系的方法论，不是零散的点子
- 你能否结合真实项目说明具体做法
- 你对方案的边界和取舍是否清晰

**二、回答思路**

先给方法论框架 → 分步展开核心要点 → 结合项目举例 → 补充边界和注意事项

**三、参考答案（面试标准版）**

> 控制在2分钟

**三类核心参数：**

**资源类：**
```
spark.executor.instances = 50-200（Executor数量）
spark.executor.memory = 4-8g（Executor堆内存）
spark.executor.cores = 2-4（每Executor核数）
spark.executor.memoryOverhead = 1-2g（堆外内存，防OOM）
```

**Shuffle类：**
```
spark.sql.shuffle.partitions = 2000-5000（百亿级）
spark.sql.adaptive.enabled = true（AQE）
spark.shuffle.compress = true
```

**执行类：**
```
spark.sql.autoBroadcastJoinThreshold = 50-100MB
spark.sql.adaptive.skewJoin.enabled = true
spark.maxRemoteBlockSizeFetchToMem = 200MB
```

**调优方法论：**
1. 先保证不OOM（调内存/分区数）
2. 再保证不倾斜（AQE/Salting）
3. 最后优化速度（减少Shuffle/Broadcast/并行度）

**四、技术知识补充**

本题涉及的核心技术点（面试中可能被深挖）：
- **资源类：**：理解其原理和适用场景，不要只记结论

**项目结合点：** 回答时主动关联QQ频道的实际场景，增强可信度。

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

> 三类参数：资源（Executor数/内存/核数）、Shuffle（分区数/AQE/压缩）、执行（Broadcast阈值/倾斜处理）。调优顺序：不OOM→不倾斜→提速度。

---
---
