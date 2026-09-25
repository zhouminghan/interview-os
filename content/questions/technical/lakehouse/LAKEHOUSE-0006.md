---
id: LAKEHOUSE-0006
type: technical
question: 数据采集入湖方式是什么
topic: [lakehouse, ingestion]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-banmu-huadao
    company: 半亩花田
    position: 数据开发（校招）
    date: 2026-09-25
---

# 一句话

入湖方式分批量、流式和文件直传，落开放表格式（Hudi/Iceberg/Delta）。

# 30 秒回答

批量用 Spark/DataX 定期落湖，流式用 Flink CDC/Kafka 写入 Hudi/Iceberg，或文件直接传对象存储；表格式选 Hudi/Iceberg/Delta。

# 1 分钟回答

- 批量：Spark/DataX 定时写湖
- 流式：Flink CDC/Kafka -> Hudi/Iceberg
- 直传：文件落 S3/OSS 对象存储
- 表格式：Hudi（upsert）、Iceberg（快照）、Delta

# 追问

- 入湖和入仓有什么区别？
- Hudi 和 Iceberg 怎么选？
