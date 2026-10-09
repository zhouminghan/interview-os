---
id: FLINK-0241
type: technical
question: 如何在FlinkSQL中实现对HBase表的读写操作？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 HBase Connector 配表名和 zookeeper。

# 参考回答

HBase 读写用 HBase Connector，配表名、zookeeper quorum、列族。可以做 lookup 维表和 sink。注意 HBase 是行存，适合点查。

# 追问

- HBase 适合什么场景？
