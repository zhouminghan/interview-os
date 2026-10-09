---
id: STARROCKS-0042
type: technical
question: StarRocks 中的 ARRAY 和 MAP 类型如何使用？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ARRAY 存数组，MAP 存键值对，方便存多值字段。

# 参考回答

StarRocks 支持 ARRAY 和 MAP 类型，ARRAY 存数组、MAP 存键值对。对多值字段很方便，比如一个商品挂多个标签。查询时可以用 array 函数、lateral view 展开处理。

# 追问

- ARRAY 字段怎么展开成多行？
