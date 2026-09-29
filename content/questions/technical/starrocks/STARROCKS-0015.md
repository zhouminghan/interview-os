---
id: STARROCKS-0015
type: technical
question: StarRocks 面试题大纲（200 题覆盖范围）
topic: [starrocks, outline]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

StarRocks 200 题大纲，四块：基础知识、进阶调优、高级特性、实战应用。

# 30 秒回答

基础（1-50）：MPP/FE/BE/三种数据模型/导入/分区分桶/物化视图/SQL/权限；进阶（51-100）：CBO/向量化/Join 策略/调优/HA/故障排查/表设计；高级（101-150）：架构设计理念/核心机制/云原生/基准测试；实战（151-200）：生态集成/数据迁移/查询优化/行业案例/趋势。

# 1 分钟回答

- 基础：MPP 架构、FE/BE、明细/聚合/更新模型、列存、Broker/Stream Load、Range/List 分区、Bucket、物化视图、JOIN 策略、权限
- 进阶：CBO、向量化、谓词下推、EXPLAIN、统计信息、内存/IO 调优、HA、备份、扩缩容、故障排查、表设计
- 高级：为什么 MPP、存储引擎设计、与 Doris 关系、事务、压缩、Colocate Join、Pipeline、云原生、K8s/Helm、基准测试
- 实战：Hadoop/Kafka/Flink 集成、MySQL/CH/Hive 迁移、大表 JOIN、TopN、电商/金融/广告案例、与 ClickHouse/Doris 对比

# 追问

- 三种数据模型分别适用什么场景？
