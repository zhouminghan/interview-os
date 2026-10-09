---
id: STORAGE-0076
type: technical
question: 在Hive中创建表时，需要考虑哪些因素？请详细说明CREATE TABLE语句的各个参数及其作用。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

字段、分区、分桶、格式、压缩、位置。

# 参考回答

建表要考虑字段类型、分区字段、分桶、存储格式、压缩、存储位置、内外表。CREATE TABLE 里指定这些参数。设计好表结构是性能的基础。

# 追问

- 建表最先定什么？
