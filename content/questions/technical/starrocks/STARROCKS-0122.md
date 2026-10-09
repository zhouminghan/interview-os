---
id: STARROCKS-0122
type: technical
question: StarRocks 中的 UDF（用户自定义函数）如何使用？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

写自定义函数扩展标量或聚合逻辑。

# 参考回答

UDF 就是用户自定义函数，StarRocks 支持标量 UDF 和聚合 UDF，用 C++ 或 Java 写。当内置函数不够用时扩展。但 UDF 会影响性能，能内置就别自己写。

# 追问

- UDF 为什么会影响性能？
