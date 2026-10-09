---
id: STORAGE-0384
type: technical
question: 如何处理HBase的数据质量问题？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

写入校验加清洗修正。

# 参考回答

数据质量靠写入前校验、脏数据清洗、异常修正。加数据质量监控，发现脏数据及时处理。源头预防比事后修好。

# 追问

- 脏数据怎么发现？
