---
id: STARROCKS-0165
type: technical
question: 如何进行 StarRocks 的极限性能测试？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用接近上限的数据量和并发，找性能拐点。

# 参考回答

极限测试就是把数据量和并发推到上限，看什么时候延迟陡增、资源打满，找到系统的性能拐点，为容量规划提供依据。

# 追问

- 拐点数据怎么用于容量规划？
