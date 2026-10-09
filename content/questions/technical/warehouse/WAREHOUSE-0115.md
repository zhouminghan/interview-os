---
id: WAREHOUSE-0115
type: technical
question: 在数据仓库中，ETL 是什么意思？请描述其主要过程
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ETL 是抽取、转换、加载三个动作，把原始数据变成能用的数据。

# 参考回答

E 是 Extract，从源系统把数据抽出来；T 是 Transform，做清洗、格式统一、口径计算、去重这些加工；L 是 Load，把加工好的数据装进数仓。现在很多其实是 ELT，先把原始数据拉进来，再在数仓里用 SQL 做转换，因为算力便宜了，放后面转换更灵活。

# 追问

- ETL 和 ELT 的区别？
- 什么时候选 ELT 更合适？
