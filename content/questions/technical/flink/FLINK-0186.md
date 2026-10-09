---
id: FLINK-0186
type: technical
question: 某社交媒体平台如何用Flink处理实时推荐？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 算实时特征，驱动推荐排序。

# 参考回答

社交媒体用 Flink 实时处理用户行为，算实时特征和热度，输出给推荐排序。离线训练加在线实时特征更新。

# 追问

- 实时特征和离线特征怎么结合？
