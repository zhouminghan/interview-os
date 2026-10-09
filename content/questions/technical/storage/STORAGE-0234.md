---
id: STORAGE-0234
type: technical
question: 解释HBase中的flush、compact和split的概念。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

flush 落盘、compact 合并、split 分裂。

# 参考回答

flush 把内存里的数据刷到磁盘 HFile；compact 合并多个 HFile 减少文件数；split 把大 Region 分裂成两个。三者是 HBase 存储维护的核心。

# 追问

- compact 为什么重要？
