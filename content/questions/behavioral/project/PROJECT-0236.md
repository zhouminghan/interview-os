---
id: PROJECT-0236
type: project
question: Spark内存模型？
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

Spark统一内存管理（Unified Memory Management）：

```text
Executor内存总量
├── Reserved Memory（300MB固定，系统保留）
├── User Memory（25%，用户自定义数据结构）
└── Unified Memory（75%）
    ├── Storage Memory（缓存RDD/DataFrame）
    └── Execution Memory（Shuffle/Sort/聚合的中间数据）
```

**核心特点：** Storage和Execution之间**可以互相借用**：
- Execution不够时可以借用Storage（会驱逐缓存数据）
- Storage不够时可以借用Execution的空闲部分
- 但Execution正在使用的内存不会被Storage抢占（计算优先）

**四、技术知识补充**

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

> Executor内存：Reserved(300MB) + User(25%) + Unified(75%)。Unified分Storage(缓存)+Execution(计算)，两者可互借。计算优先级高于缓存。

---
---
