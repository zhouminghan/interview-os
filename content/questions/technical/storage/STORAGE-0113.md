---
id: STORAGE-0113
type: technical
question: 如何理解Hive的UDTF？请详细说明UDTF的工作原理、开发方法和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

UDTF 是表生成函数，一行进多行出。

# 参考回答

UDTF 继承 GenericUDTF，实现 process 和 forward 输出多行。explode 就是内置 UDTF。配合 LATERAL VIEW 用，做行展开。

# 追问

- UDTF 怎么输出多行？
