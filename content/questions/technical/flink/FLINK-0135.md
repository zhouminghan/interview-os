---
id: FLINK-0135
type: technical
question: Flink在实时推荐系统中的应用方案是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时特征计算加模型打分，输出推荐结果。

# 参考回答

实时推荐用 Flink 做实时特征计算和在线打分，把用户行为实时变成特征，输出推荐结果。离线训练加在线预测的组合。

# 追问

- 推荐里 Flink 负责什么？
