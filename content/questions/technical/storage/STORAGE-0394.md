---
id: STORAGE-0394
type: technical
question: 在实际项目中如何实现HBase的数据加密？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

传输 SSL 加落盘加密。

# 参考回答

数据加密分传输层 SSL 和落盘加密，落盘用 HDFS 加密或列族加密。敏感数据开启，注意性能和密钥管理。生产配合 Kerberos。

# 追问

- 加密怎么配？
