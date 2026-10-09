---
id: FLINK-0284
type: technical
question: 如何创建和使用FlinkSQL自定义连接器？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实现 DynamicTableSource 和 Sink。

# 参考回答

自定义连接器要实现 DynamicTableSource 和 DynamicTableSink 接口，定义读取、写入和 schema。门槛较高，特殊数据源才写。

# 追问

- 什么时候需要自定义连接器？
