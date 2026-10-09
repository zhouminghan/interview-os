---
id: FLINK-0400
type: technical
question: 如何设计FlinkSQL与实时机器学习集成的架构？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 实时算特征，模型服务做预测。

# 参考回答

实时 ML 架构用 Flink SQL 实时算特征，输出给模型服务做在线预测。离线训练、在线特征加预测的组合。Flink 管特征实时更新。

# 追问

- 实时特征怎么更新？
