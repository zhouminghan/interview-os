---
id: STORAGE-0347
type: technical
question: HBase的多版本优化方案有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制版本数和 TTL。

# 参考回答

多版本优化限制版本数、配 TTL，避免版本过多占存储。不需要历史就设 1 版本。版本多读合并也慢。

# 追问

- 版本设多少？
