---
id: STORAGE-0010
type: technical
question: Hive 可以用 text 存储吗，CSV 能不能直接加载成 Hive 表
topic: [storage, hive, csv]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-xpeng-data-dev
    company: 小鹏
    position: 数据开发（27 届秋招一面）
    date: 2026-09-26
---

# 一句话

可以，Hive 支持 TEXTFILE，CSV 能直接建外部表或 LOAD 加载，注意分隔符、表头和转义。

# 30 秒回答

TEXTFILE 可存储；CSV 用 ROW FORMAT 指定分隔符建外部表指向 HDFS，或 LOAD DATA 加载；注意表头跳过、转义、编码。TEXT 适合交换，查询性能和压缩都不如列式。

# 1 分钟回答

- TEXTFILE：可存，通用文本
- CSV 加载：外部表 LOCATION 或 LOAD DATA
- 注意：分隔符、表头、转义、编码、类型
- 缺点：无列式优化、查询慢、占空间

# 追问

- CSV 有表头怎么处理？
- 什么时候用 TEXT 什么时候用 ORC？
