---
id: STORAGE-0265
type: technical
question: 解释HBase中的数据版本清理机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

版本数限制和 TTL 控制清理。

# 参考回答

数据版本清理靠版本数上限和 TTL。超过版本数的旧版本、超过 TTL 的数据在 compact 时被清理。配置好版本数和 TTL，控制存储增长。

# 追问

- 版本清理什么时候发生？
