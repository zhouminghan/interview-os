---
id: FLINK-0625
type: technical
question: Flink TopN 和离线 TopN 的区别？
difficulty: 0
topic: []
source_type: knowledge
---

离线：一次性排序取 TopN
Flink：流式维护状态中的 TopN 集合，不断更新
