---
id: PROJECT-0311
type: project
question: NameNode如何保证高可用？
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

**HA方案：Active-Standby双NN + 共享EditLog**

```text
Active NN ←→ JournalNode集群(共享EditLog) ←→ Standby NN
     ↑                                              ↑
  ZooKeeper（选主/故障检测/自动切换）
```

**核心机制：**
1. Active NN写EditLog到JournalNode（多数派确认）
2. Standby NN从JournalNode读EditLog保持同步
3. ZooKeeper监控Active NN健康状态
4. Active挂了 → ZK触发 → Standby升为Active

**数据一致性保证：** JournalNode是Quorum协议（多数派写入成功才确认），不会脑裂。

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

> 双NN Active-Standby + JournalNode共享EditLog + ZooKeeper选主切换。JN多数派协议防脑裂。

---
---
