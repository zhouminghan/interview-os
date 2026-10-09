---
id: STARROCKS-0201
type: technical
question: StarRocks 在日志分析领域的最佳实践是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

明细模型加时间分区，常用指标用物化视图。

# 参考回答

日志分析一般是明细模型加时间分区，原始日志存明细，常用聚合指标用物化视图或聚合模型。注意控制存储，冷数据可以转对象存储。

# 追问

- 日志冷数据怎么处理？
