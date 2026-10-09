---
id: WAREHOUSE-0156
type: technical
question: 下列哪个工具用于数据仓库的数据质量管理？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数据质量管理靠 DQC 这类质量校验工具，比如 Griffin、Deequ。

# 参考回答

这题考的是数据质量工具。常见的有 Apache Griffin、Deequ、还有各家平台的 DQC 模块。它们做的事就是定义质量规则，比如空值率、唯一性、范围校验，然后定期跑、出报告、告警。

# 追问

- 数据质量一般校验哪些维度？
- DQC 规则怎么设计？
