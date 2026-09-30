---
id: PROJECT-0344
type: project
question: JVM Full GC触发条件
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

Full GC触发条件：
1. **老年代空间不足** — 大对象/长期存活对象填满Old Gen
2. **方法区(Metaspace)空间不足** — 类加载过多
3. **Young GC晋升失败** — Survivor放不下，Old Gen也放不下
4. **显式调用System.gc()** — 不推荐
5. **CMS GC的Concurrent Mode Failure** — 并发收集跟不上分配速度

**如何减少Full GC：**
- 增大堆内存
- 减少大对象创建
- 调整Young/Old比例
- 选择合适的GC算法（G1替代CMS）

**和Spark的关系：**
```
Spark任务GC时间长 → Spark UI的GC Time列
原因：Executor内存不够 → 频繁Full GC
解决：增加executor.memory / 减少单Task数据量(增加分区数)
```

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

**七、记忆版（15秒压缩）**

> Full GC条件：老年代满/Metaspace满/晋升失败/显式调用。Spark中GC长=内存不够，加内存或加分区数。

---
---
