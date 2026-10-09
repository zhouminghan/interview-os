---
id: STARROCKS-0187
type: technical
question: 如何优化 StarRocks 中的复杂聚合查询？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用聚合模型、物化视图、bitmap 近似减少计算。

# 参考回答

复杂聚合优化靠预聚合，用聚合模型或物化视图把常用聚合提前算好；大基数去重用 bitmap 或 hll；再保证分区裁剪生效。

# 追问

- bitmap 去重为什么快？
