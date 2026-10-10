---
id: STORAGE-0015
type: technical
question: Kylin 和 Doris、ClickHouse 对比，适用场景
topic: [storage, olap]
difficulty: 3
frequency: medium
source_type: knowledge
---

> **来源面经**：字节-数据开发三面-20261010

# 一句话

Kylin 预计算 Cube 适合固定报表，Doris/ClickHouse 实时/即席查询更灵活，正在替代 Kylin。

# 30 秒回答

Kylin 按维度组合预计算 Cube，查询快但维度爆炸成本高；Doris/ClickHouse 列存 + MPP，即席分析灵活；现代场景多用 Doris/StarRocks。

# 追问

- Kylin 为什么式微？
- 固定报表和即席分析分别选什么？
