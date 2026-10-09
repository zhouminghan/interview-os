---
id: WAREHOUSE-0129
type: technical
question: 在设计数据仓库时，你会如何考虑数据的粒度和聚合层次？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

粒度决定事实表一行代表什么，聚合层次决定预计算到什么程度。

# 参考回答

设计时先定最细粒度，比如订单明细一行代表一个订单或一个订单行，这决定表能回答多细的问题。然后往上做聚合，按天、周、月或按维度汇总到 DWS。原则是最细粒度放 DWD，常用聚合提前算好放 DWS，避免每次现算。

# 追问

- 粒度太细或太粗分别有什么问题？
- 聚合层放 DWS 还是 ADS 怎么判断？
