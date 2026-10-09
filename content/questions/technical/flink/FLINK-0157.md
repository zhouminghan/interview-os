---
id: FLINK-0157
type: technical
question: 如何诊断和解决Flink作业的数据一致性问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

对账、看 checkpoint、查 sink 幂等。

# 参考回答

一致性诊断靠和源端对账，看 checkpoint 是否正常，sink 是否幂等。不一致常见是迟到数据、重复消费或 sink 非幂等。

# 追问

- 重复消费怎么解决？
