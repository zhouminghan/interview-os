---
id: FLINK-0393
type: technical
question: 解释基于FlinkSQL的Lambda架构实现方案。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时和离线双链路，服务层合并。

# 参考回答

Lambda 架构实时链路用 Flink SQL 算实时，离线链路用批处理算准确结果，服务层合并两者。优点准确性加时效，缺点两套代码维护。

# 追问

- Lambda 的缺点是什么？
