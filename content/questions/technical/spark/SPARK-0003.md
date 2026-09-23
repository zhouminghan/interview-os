---
id: SPARK-0003
type: technical
question: MapJoin 和 Broadcast Join 的区别是什么
topic: [spark, hive, mapjoin, broadcast]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-14-bytedance-cn-transaction-ads
    company: 字节跳动
    position: 大数据开发（校招）
    date: 2026-09-14
---

# 一句话

本质是同一思想（小表广播 + map 端 join）在不同引擎里的实现与叫法：MapJoin 是 Hive 的机制，Broadcast Join 是 Spark 的机制。

# 30 秒回答

MapJoin 是 Hive 把小表加载到 map 端内存哈希表完成 join；Broadcast Join 是 Spark 用 broadcast 变量把小表分发到 executor 内存，在 task 端做 join。两者都避免 shuffle，只是引擎和实现不同。

# 1 分钟回答

- MapJoin（Hive）：由 hive.auto.convert.join 控制，阈值 hive.mapjoin.smalltable.filesize
- Broadcast Join（Spark）：由 spark.sql.autoBroadcastJoinThreshold（默认 10MB）控制
- Spark 用 TorrentBroadcast 分块分发小表，可跨 task/job 复用
- 共同点：小表广播、map/task 端关联、避免 shuffle

# 追问

- Spark 的 autoBroadcastJoinThreshold 默认是多少？
- broadcast 变量可以跨 job 复用吗？
- 表大小刚好超过阈值时怎么办？
