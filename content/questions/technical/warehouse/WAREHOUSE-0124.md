---
id: WAREHOUSE-0124
type: technical
question: 谈谈你对ETL过程的理解，并说明其在数据仓库中的重要性。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ETL 是数仓的生产流水线，没有它数据就是一堆脏的原始日志。

# 参考回答

ETL 就是把原始数据加工成可分析数据的过程，抽取、清洗、转换、加载。它重要在：数仓质量好不好，九成取决于 ETL 做得好不好。数据不干净、口径算错，下游报表全跟着错。所以 ETL 是数仓的命脉。

# 追问

- 清洗阶段主要处理哪些脏数据？
- ETL 的 T 和 L 为什么现在经常互换顺序？
