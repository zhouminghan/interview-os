---
id: PROJECT-0341
type: project
question: Java线程池原理
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

> 控制在2分钟

**线程池 = 预创建一组线程，复用执行多个任务，避免频繁创建/销毁线程的开销。**

```text
任务提交 → 核心线程是否满？
  ├─ 否 → 创建核心线程执行
  └─ 是 → 队列是否满？
       ├─ 否 → 放入队列等待
       └─ 是 → 最大线程是否满？
            ├─ 否 → 创建非核心线程执行
            └─ 是 → 执行拒绝策略
```

**七大参数：**
```java
new ThreadPoolExecutor(
    corePoolSize,     // 核心线程数（常驻）
    maximumPoolSize,  // 最大线程数
    keepAliveTime,    // 非核心线程空闲存活时间
    unit,             // 时间单位
    workQueue,        // 任务队列（LinkedBlockingQueue/ArrayBlockingQueue）
    threadFactory,    // 线程工厂
    handler           // 拒绝策略（AbortPolicy/CallerRunsPolicy/DiscardPolicy）
);
```

**拒绝策略（队列满+线程满时）：**
- AbortPolicy：抛异常（默认）
- CallerRunsPolicy：调用者线程执行
- DiscardPolicy：直接丢弃
- DiscardOldestPolicy：丢弃队列最老任务

**和大数据的关系：** Spark的Task调度/YARN的Container管理本质都是"资源池+任务调度"的思想。

**四、技术知识补充**

**项目结合点：** 回答时主动关联QQ频道的实际场景，增强可信度。

**五、追问预判**

1. **追问：Spark任务OOM怎么排查？→ 看Executor GC Time/Shuffle Spill/Driver Log，定位是堆内还是堆外。**

2. **追问：AI生成的SQL出错了谁负责？→ 人负责。AI辅助生成，人Review确认，最终质量由人把关。**

3. **追问：这个方案在你的项目中是怎么落地的？**
   → 结合QQ频道百亿级日志的实际场景，说明具体做法和效果。


**六、常见错误/踩坑提醒**

- ❌ 死背八股不联系大数据 → ✅ 说清楚JVM/线程池和Spark/Flink的关系
- ❌ 只知道API不知道原理 → ✅ 面试要说清楚为什么这么设计
- ❌ 不提实际应用场景 → ✅ 结合Spark Executor内存模型/GC调优来讲

**七、记忆版（20秒压缩）**

> 线程池=复用线程避免频繁创建销毁。流程：核心线程→队列→最大线程→拒绝策略。七个参数核心：核心数/最大数/队列/拒绝策略。

---
---
