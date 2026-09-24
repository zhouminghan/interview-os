---
id: SPARK-0018
type: technical
question: 链路性能优化是做什么
topic: [spark, pipeline, performance]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-08-27-alibaba-data-dev
    company: 阿里巴巴
    position: 数据开发（一面）
    date: 2026-08-27
---

# 一句话

链路性能优化是从采集、传输、计算、存储到查询的全链路找瓶颈并逐一优化。

# 30 秒回答

采集/传输限流、批量、压缩；计算层 Spark/Flink 调优（并行度、倾斜、join、缓存）；存储用列式、合理分区、小文件治理；调度减少等待、并行执行。

# 1 分钟回答

- 采集/传输：批量、压缩、异步、限流
- 计算：并行度、数据倾斜、join 策略、缓存、资源调优、SQL 优化
- 存储：Parquet/ORC、分区、小文件合并、冷热分层
- 调度：任务依赖、并行调度、减少等待
- 监控：端到端耗时、各环节占比，定位瓶颈

# 追问

- 怎么定位链路瓶颈在哪一段？
- 端到端延迟由哪几部分组成？
