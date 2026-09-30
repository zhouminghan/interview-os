---
id: SPARK-0323
type: technical
question: Iceberg vs Hudi vs Delta Lake 怎么选？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-大数据开发-20260414 Q34

QQ 频道选 Iceberg：支持 Flink 写 + Spark 读（流批一体）、ACID 事务。Hudi 适合 upsert 场景（MOR/COW 两种模式），Delta Lake 跟 Spark 生态集成最好。三者功能趋同，看团队技术栈和生态适配。

> 💡 **专家补充**（大数据架构师视角，面试中视情况展开）
>
> - **湖仓三兄弟（Iceberg/Hudi/Delta）的本质都是给数据湖补上"表级管理能力"**：传统数据湖就是一堆文件扔在 HDFS/S3 上，没有 ACID、没有 Schema Evolution、没有 Time Travel。这三个项目就是在文件系统之上加了一层元数据管理
> - **选型的关键看两个维度**：一是引擎兼容性（Iceberg 对 Flink/Spark/Trino 都友好，Delta 偏 Spark，Hudi 偏 Spark+Flink），二是核心能力（Hudi 的 upsert 性能最好，Iceberg 的 Schema Evolution 最灵活，Delta 和 Spark 集成最深）
> - **ACID 事务在数据湖上的意义**：保证"写一半断了不会产生脏数据"，这在实时写入场景下尤为关键——Flink 每个 checkpoint 做一次 commit，如果没有事务保障，读端可能读到不完整的数据

---
