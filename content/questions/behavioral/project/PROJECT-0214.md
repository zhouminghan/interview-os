---
id: PROJECT-0214
type: project
question: Broadcast Join原理？
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

> 控制在1分钟

**Broadcast Join是Spark版的Map Join。** 把小表数据广播（Broadcast）到所有Executor节点，大表数据不动，每个Partition本地完成Join。

```text
Driver收集小表数据 → 广播到所有Executor → 每个Executor本地Join大表分区
```

**和Map Join的区别：**
- Map Join是Hive概念（Map端完成）
- Broadcast Join是Spark概念（广播变量机制）
- 本质一样：小表复制，大表不动，避免Shuffle

**Spark参数：**
```
spark.sql.autoBroadcastJoinThreshold = 10MB（默认）
```

**四、技术知识补充**

**项目结合点：** 回答时主动关联QQ频道的实际场景，增强可信度。

**五、追问预判**

1. **追问：Spark任务OOM怎么排查？→ 看Executor GC Time/Shuffle Spill/Driver Log，定位是堆内还是堆外。**

2. **追问：Hive和Spark SQL有什么区别？→ Hive底层是MR（慢），Spark SQL底层是DAG（快），但Hive MetaStore两者共用。**

3. **追问：这个方案在你的项目中是怎么落地的？**
   → 结合QQ频道百亿级日志的实际场景，说明具体做法和效果。


**六、常见错误/踩坑提醒**

- ❌ 只说优化手段不说定位过程 → ✅ 先定位瓶颈（EXPLAIN/执行计划），再选方案
- ❌ 优化没有量化效果 → ✅ 必须说"从X降到Y，提升Z%"
- ❌ 把所有优化手段堆上来 → ✅ 针对具体问题选最合适的方案

**七、记忆版（15秒压缩）**

> Broadcast Join = 小表广播到所有节点，大表不动，本地Join。Spark版MapJoin，核心价值是消除Shuffle。

---
---
