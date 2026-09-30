---
id: PROJECT-0226
type: project
question: Spark整体架构介绍
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

> 控制在2分钟

```text
Client → Driver（SparkContext/DAGScheduler/TaskScheduler）
          ↓
    Cluster Manager（YARN/Standalone/K8s）
          ↓
    Executor（Task执行 + 内存存储）
```

**核心组件：**
- **Driver**：程序入口，负责DAG生成、Stage划分、Task调度
- **Executor**：实际执行计算任务的进程，每个Executor有独立内存和CPU
- **Cluster Manager**：资源管理（分配Executor给应用）

**执行模型：** 一个Application → 多个Job → 每个Job多个Stage → 每个Stage多个Task

**四、技术知识补充**

本题涉及的核心技术点（面试中可能被深挖）：
- **Driver**：理解其原理和适用场景，不要只记结论
- **Executor**：理解其原理和适用场景，不要只记结论
- **Cluster Manager**：理解其原理和适用场景，不要只记结论

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

**七、记忆版（15秒压缩）**

> Driver负责调度（DAG/Stage/Task），Executor负责执行和存储，ClusterManager管资源。Application→Job→Stage→Task四级结构。

---
---
