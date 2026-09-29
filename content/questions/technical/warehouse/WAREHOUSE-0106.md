---
id: WAREHOUSE-0106
type: technical
question: 数仓面试题大纲（50 题覆盖范围）
topic: [warehouse, outline]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

随川数仓 50 题大纲，五大模块：基础架构、建模方法论、ETL/ELT、OLAP 与数据服务、性能优化。

# 30 秒回答

基础：数仓/数据库/数据湖、Kimball vs Inmon、星型 vs 雪花、事实表类型、SCD、分层；建模：维度建模四步、粒度、退化维度、桥接表、快照类型、一致性维度/总线矩阵；ETL：全量增量/CDC/清洗/拉链表/调度/回刷/SLA；OLAP：MOLAP/ROLAP/HOLAP、多维分析、Lambda vs Kappa、治理；优化：存储格式/分区分桶/物化视图/小文件/指标体系。

# 1 分钟回答

- 基础：数仓 vs 数据库 vs 数据湖、Kimball（自下而上）vs Inmon（自上而下 3NF）、星型/雪花、事务/周期/累积快照事实表、SCD Type1/2/3、ODS→DWD→DWS→ADS
- 建模：四步法（业务过程→粒度→维度→事实）、粒度、退化维度、桥接表、累积 vs 周期快照、一致性维度、总线矩阵
- ETL：全量/增量、CDC（时间戳/日志/触发器）、清洗、拉链表、Airflow/DolphinScheduler、回刷、SLA
- OLAP：MOLAP/ROLAP/HOLAP、钻取/上卷/切片/切块、Lambda/Kappa、元数据/血缘/质量/成本/安全
- 优化：ORC/Parquet/Avro、分区分桶、物化视图、小文件合并、指标体系建设

# 追问

- 大纲里哪些点已经在题库中有带答案的版本？
