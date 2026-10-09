---
id: STORAGE-0600
type: technical
question: 如何实现Clickhouse的数据加密？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

传输 SSL 加磁盘加密。

# 参考回答

数据加密传输用 SSL，落盘用磁盘加密或文件系统加密。敏感数据开启，注意性能开销和密钥管理。

# 追问

- 加密怎么做？
