---
id: FLINK-0648
type: technical
question: US 平台实现全链路任务调度，具体是怎么编排的？Flink 常驻任务和 Spark 批任务怎么协调？
difficulty: 0
topic: []
source_type: knowledge
---

调度层面的设计：

- **Flink 常驻任务**：不在 US 里调度，由 Flink 集群自管理（自动重启、CP 恢复）。US 只做 Flink 任务的健康监控告警。
- **Spark 分钟级任务**：US 每 10 分钟触发一次，依赖条件是"Iceberg DWD 表的最新 snapshot 时间 > 当前周期开始时间"。
- **离线 T+1 任务**：US 按 DAG 编排，上游 ODS 就绪 → DWD → DWS → ADS → 报表推送。

**Flink ↔ Spark 协调**：
- Flink 每次 Checkpoint commit 到 Iceberg 后，Iceberg 表的 snapshot 时间更新
- Spark 任务启动前检查 Iceberg 表的最新 snapshot ≥ 期望时间窗口 → 满足才执行
- 如果 Flink 延迟导致 snapshot 不满足 → Spark 任务等待重试（最多等 5 分钟）→ 超时告警

---

## 五、数据质量与一致性
