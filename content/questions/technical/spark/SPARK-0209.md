---
id: SPARK-0209
type: technical
question: 如何优化Spark的广播变量使用？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

小表或小配置广播，避免重复传输。

# 参考回答

广播变量用于只读小数据，广播一次各节点复用。join 小表用 broadcast，配置字典也可以广播。注意别广播大数据。

# 追问

- 广播过大数据会怎样？
