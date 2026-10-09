---
id: WAREHOUSE-0154
type: technical
question: 在数据仓库中，以下哪种数据模型是最常见的？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数仓最常见的是星型模型，也就是维度建模。

# 参考回答

答案是星型模型。因为它 join 少、查询快、好理解，跟 OLAP 分析场景最匹配。雪花模型虽然更规范省存储，但 join 多、查询慢，实际用得少。所以数仓建模默认就选星型。

# 追问

- 星型和雪花怎么选？
- 维度建模和关系建模的区别？
