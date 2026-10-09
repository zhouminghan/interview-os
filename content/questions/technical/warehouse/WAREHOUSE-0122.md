---
id: WAREHOUSE-0122
type: technical
question: 请解释什么是OLAP，并给出一个实际的应用案例。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

OLAP 面向海量数据做多维分析，典型案例就是电商实时大屏或运营报表。

# 参考回答

OLAP 是联机分析处理，核心是海量数据的聚合和多维下钻。举个例子，电商平台要做一张实时 GMV 大屏，按地区、品类、时间多维度看成交额，这就是典型 OLAP，用 Doris、ClickHouse 这类列存加预聚合，秒级出结果。

# 追问

- 为什么 OLAP 引擎查聚合这么快？
- 实时大屏和离线报表在架构上有什么区别？
