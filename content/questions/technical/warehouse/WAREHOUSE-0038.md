---
id: WAREHOUSE-0038
type: technical
question: 业务系统内部的数据怎么同步到数仓
topic: [warehouse, data-sync]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-banmu-huadao
    company: 半亩花田
    position: 数据开发（校招）
    date: 2026-09-25
---

# 一句话

常见方式有批量抽取、CDC 增量、消息队列实时同步，核心是「全量初始化 + 增量」。

# 30 秒回答

用 DataX/Sqoop 全量+增量抽取，或 Canal/Flink CDC 解析 binlog 实时同步，或 Kafka 消费写入。增量按时间戳/主键/binlog 水位，考虑幂等和断点续传。

# 1 分钟回答

- 批量：DataX/Sqoop 全量 + 增量（时间戳/主键）
- CDC：Canal/Flink CDC 监听 binlog 实时同步
- 消息：Kafka 中转，实时写入数仓/数据湖
- 要点：全量初始化、增量水位、幂等、一致性

# 追问

- 全量和增量怎么衔接？
- CDC 和批量抽取怎么选？
