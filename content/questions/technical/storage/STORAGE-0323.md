---
id: STORAGE-0323
type: technical
question: 解释HBase的数据加密实现机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

传输加密加落盘加密。

# 参考回答

加密分传输层 SSL 和落盘加密。落盘用 HDFS 加密或列族加密。生产敏感数据开启，注意性能开销和密钥管理。

# 追问

- 加密影响性能吗？
