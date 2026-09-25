---
id: STORAGE-0009
type: technical
question: Hive 表存储和压缩格式用什么，Parquet 有什么优缺点
topic: [storage, hive, format]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-xpeng-data-dev
    company: 小鹏
    position: 数据开发（27 届秋招一面）
    date: 2026-09-26
---

# 一句话

Hive 常用 ORC/Parquet 列式 + Snappy/ZSTD 压缩，分析场景首选列式。

# 30 秒回答

存储格式：TextFile、SequenceFile、Avro、ORC、Parquet；压缩：Snappy、ZSTD、GZIP。Parquet 列式、压缩率高、支持谓词下推，适合分析；缺点是更新难、小文件敏感、写入开销大。

# 1 分钟回答

- 列式：ORC/Parquet，分析查询快、压缩好
- 行式：TextFile/Avro，交换和通用
- Parquet 优点：列式、压缩、谓词下推、跨引擎
- Parquet 缺点：更新难、小文件问题、写入开销

# 追问

- ORC 和 Parquet 怎么选？
- 压缩格式怎么选？
