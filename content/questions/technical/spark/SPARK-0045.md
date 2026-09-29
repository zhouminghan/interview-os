---
id: SPARK-0045
type: technical
question: Spark 面试题大纲（200 题覆盖范围）
topic: [spark, outline]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

甜获师兄 Spark 200 题纯题库大纲，覆盖 RDD/DAG 核心、SparkSQL/Catalyst、Streaming、性能调优四块。

# 30 秒回答

四大必问：RDD 依赖类型、Catalyst 执行流程、Shuffle 优化、Streaming 容错。四块大纲：基础概念与架构、SparkSQL 与数据操作、Streaming 实时处理、性能优化与生态。

# 1 分钟回答

- 基础：RDD/DAG 懒执行、宽窄依赖、Shuffle、Lineage 容错、广播变量/累加器、Checkpoint、统一内存管理、提交流程、YARN/K8s/Standalone
- SparkSQL：Catalyst 四阶段、谓词下推/列剪裁、Broadcast Join、DataFrame/Dataset/RDD、窗口函数、UDF/UDAF、AQE
- Streaming：DStream vs Structured Streaming、Exactly-Once、Watermark/迟到、背压、Checkpoint 恢复、窗口、Kafka 集成
- 优化：数据倾斜（加盐/两阶段/广播）、Kryo、GC 调优、动态资源、Shuffle 文件管理、MLlib、Delta Lake

# 追问

- 大纲里哪些点已经在题库中有带答案的版本？
