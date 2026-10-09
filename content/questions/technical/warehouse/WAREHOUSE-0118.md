---
id: WAREHOUSE-0118
type: technical
question: 什么是OLAP？它有哪些主要操作？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

OLAP 是面向分析的联机分析处理，常见操作有钻取、上卷、切片、切块、旋转。

# 参考回答

OLAP 就是给分析场景用的，专门做多维聚合和复杂查询，跟业务交易那种点查不一样。主要操作：下钻看明细、上卷看汇总、切片固定一个维度、切块固定多个维度、旋转换视角。典型系统是 ClickHouse、Doris、Kylin 这些。

# 追问

- OLAP 和 OLTP 的区别？
- 下钻和上卷是什么关系？
