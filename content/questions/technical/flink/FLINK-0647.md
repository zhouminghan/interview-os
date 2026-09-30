---
id: FLINK-0647
type: technical
question: 分钟级 Spark 任务加工实时指标，为什么不全用 Flink？Spark 在这里的角色是什么？
difficulty: 0
topic: []
source_type: knowledge
---

这是一个 **Flink 负责秒级 DWD + Spark 负责分钟级 DWS/ADS** 的分工架构：

- **Flink**：处理原始日志清洗、分流、写入 Iceberg DWD 表。强项是低延迟、事件驱动。
- **Spark**：每 10 分钟调度一次 Spark 任务，读取 Iceberg DWD 表做聚合计算，产出 DWS 指标表（如频道维度的 10 分钟活跃数、互动量）。

为什么不全用 Flink 做聚合：
1. **资源成本**：Flink 7×24 常驻资源，所有聚合逻辑都放 Flink 需要大量 TaskManager。分钟级聚合用 Spark 短时任务更省资源。
2. **复杂聚合适配**：DWS 层涉及多表 JOIN + 复杂窗口聚合，Spark SQL 的优化器更成熟，写起来也更快。
3. **离线复用**：Spark 任务的 SQL 逻辑可以直接复用到离线 T+1 的全量计算中，一份代码两处用。

---
