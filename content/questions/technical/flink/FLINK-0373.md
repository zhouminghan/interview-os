---
id: FLINK-0373
type: technical
question: 如何使用FlinkSQL进行欺诈检测(Fraud Detection)？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 MATCH_RECOGNIZE 匹配欺诈模式。

# 参考回答

欺诈检测用 MATCH_RECOGNIZE 定义欺诈行为模式，比如短时间内频繁交易、异地登录。SQL 里声明模式，匹配到就输出告警。实时拦截风险。

# 追问

- 欺诈检测为什么强调实时？
