---
id: WAREHOUSE-0055
type: technical
question: ETL 和 ELT 的区别是什么
topic: [warehouse, etl, elt]
difficulty: 2
frequency: high
source_type: knowledge
---

# 一句话

ETL 先转换再加载（在数仓外处理），ELT 先加载再转换（用数仓算力就地加工）。

# 30 秒回答

ETL 在数据进入数仓前完成清洗转换，适合数据量小、隐私要求高；ELT 先把原始数据入湖仓，再在数仓内做转换，利用数仓算力，适合大数据量。

# 1 分钟回答

- ETL：抽取 -> 转换 -> 加载，转换在数仓外
- ELT：抽取 -> 加载 -> 转换，转换在湖仓内
- ELT 优势：利用分布式算力、保留原始数据、灵活重算
- ETL 优势：数仓干净、适合小数据和强清洗

# 追问

- 为什么现在更流行 ELT？
- 两种方式的数据质量怎么保障？
