---
id: FLINK-0363
type: technical
question: 如何在FlinkSQL作业中嵌入自定义Transformation？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

转 DataStream 做自定义转换再转回。

# 参考回答

自定义 Transformation 同样靠表转 DataStream，做自定义算子转换，再转回表。SQL 和 DataStream 互操作是嵌入自定义逻辑的统一方式。

# 追问

- 自定义转换的典型场景？
