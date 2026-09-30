---
id: SPARK-0317
type: technical
question: Spark 调优有哪些方面？（高频⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：腾讯-数据工程-20260415 Q6、字节-大数据开发-20260414 Q3、京东JDY-二面-20260415 Q14

1. **资源参数**：Executor 数量、内存、core 数合理配置
2. **数据倾斜**：热点 key 打散、MapJoin 广播小表
3. **Shuffle 优化**：调 shuffle partition 数，避免小文件过多或单 partition 过大
4. **序列化**：Kryo 替代默认 Java 序列化
5. **缓存**：合理 persist/cache 避免重复计算
6. **大任务拆分**：降低单次失败重跑成本
7. **SQL 层面**：谓词下推、分区裁剪、列裁剪只 SELECT 需要的字段
8. **引擎层面**：开启 CBO（Cost-Based Optimizer）、开启 Spark AQE（Adaptive Query Execution）自动调整 shuffle partition 和处理倾斜

---
