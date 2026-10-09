---
id: WAREHOUSE-0151
type: technical
question: 如何理解维度退化？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

维度退化就是维度属性直接退化进事实表，不再单独建维表。

# 参考回答

有些维度只有一个属性，比如订单号，单独建一张维表不值当，就直接把它放进事实表当一列，这就是维度退化。好处是少 join、结构简单。常见于订单号、发票号这类高基数、又没有其他属性的维度。

# 追问

- 维度退化有什么优缺点？
- 什么维度适合退化？
