---
id: STORAGE-0003
type: technical
question: 小文件问题是什么，如何治理，治理前后效果
topic: [storage, small-files, governance]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-pdd-data-dev
    company: 拼多多
    position: 数据开发（社招）
    date: 2026-09-21
---

# 一句话

小文件会让 NameNode 元数据膨胀、task 数过多、查询变慢；治理靠源头合并 + 存量合并。

# 30 秒回答

危害：NameNode 压力大、task 多、读取开销大、性能下降。治理：合理设置 shuffle 分区数、coalesce/repartition 合并写入、动态分区限制、存量小文件合并任务、合并参数。

# 1 分钟回答

- 产生原因：频繁小批量写、动态分区、shuffle 分区过多、高并发写
- 源头治理：合理 shuffle 分区数、合并写入、限制动态分区数
- 存量治理：小文件合并任务、按分区合并、Hive concatenate
- 参数：spark.sql.shuffle.partitions、AQE 合并分区
- 效果：NameNode 压力下降、task 数减少、查询延迟下降、存储利用率提升

# 追问

- 小文件多大算小？
- coalesce 和 repartition 区别？
- 合并小文件会影响数据正确性吗？
