---
id: PROJECT-0315
type: project
question: MapReduce整体流程
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

```text
Input → Split → Map → Shuffle(Sort+Partition) → Reduce → Output
```

详细步骤：
1. **Input Split**：文件按Block切分为多个InputSplit
2. **Map**：每个Split启动一个MapTask，执行map()函数
3. **Shuffle**：Map输出按Key排序、按Partition分组
4. **Reduce**：每个Reduce Task拉取所有Map端对应Partition数据，执行reduce()函数
5. **Output**：Reduce结果写回HDFS

**四、技术知识补充**

**项目结合点：** 回答时主动关联QQ频道的实际场景，增强可信度。

**五、追问预判**

1. **追问：这个方案在你的项目中是怎么落地的？**
   → 结合QQ频道百亿级日志的实际场景，说明具体做法和效果。

2. **追问：如果重新设计，你会改什么？**
   → 体现反思能力：讲一个当初的取舍，现在回头看可以优化的点。

3. **追问：这个方案的边界/不适用场景是什么？**
   → 任何方案都有适用范围，说清楚什么时候不应该用这个方案。


**六、常见错误/踩坑提醒**

- ❌ 背诵原理不联系实际 → ✅ 说清楚这个原理在你日常工作中哪里用到
- ❌ 只知道用不知道为什么 → ✅ 理解原理才能在出问题时快速定位
- ❌ 把Hadoop等同于MapReduce → ✅ Hadoop生态包括HDFS/YARN/MR，现在主要用HDFS+YARN

**七、记忆版（15秒压缩）**

> Input分片→Map(本地计算)→Shuffle(排序+分区)→Reduce(聚合)→Output。Shuffle是Map到Reduce之间的数据重分布。

---
---
