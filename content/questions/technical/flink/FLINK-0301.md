---
id: FLINK-0301
type: technical
question: 详细解释FlinkSQL中的INNER JOIN语法及其在流处理中的实现原理。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

INNER JOIN 两边维护状态做持续匹配。

# 参考回答

流式 INNER JOIN 会在两边各自维护状态，一条数据来了就跟另一边的状态匹配，匹配上的输出，同时自己也存进状态供对方匹配。状态要配 TTL 清理，不然无限增长。

# 追问

- 流式 join 的状态为什么会长大？
