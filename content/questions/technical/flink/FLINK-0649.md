---
id: FLINK-0649
type: technical
question: 实时/离线数据一致性校验，发现差异后怎么自动溯源修正？
difficulty: 0
topic: []
source_type: knowledge
---

溯源修正流程：

1. **差异检测**：校验任务发现 channel_id=xxx 的"互动数"实时比离线少 5%
2. **自动溯源**：
   - 查 Iceberg DWD 表该 channel 当天的记录数 → 确认是 DWD 层就少了还是聚合环节丢了
   - 如果 DWD 层数据量正常 → 问题在聚合逻辑（Spark 任务）
   - 如果 DWD 层数据量也少 → 往上游追 Kafka Topic 的消费位移，看是否有 Lag 或数据丢失
3. **修正策略**：
   - DWD 层缺数据 → 用离线数据回填 Iceberg 表（INSERT INTO ... SELECT FROM offline_table）
   - 聚合逻辑有 bug → 修复后重跑 Spark 任务
   - 修正完成后重新触发校验确认

**自动 vs 人工**：
- 差异率 < 1%：记录日志，不修正（在误差容忍范围内）
- 差异率 1%-5%：自动用离线数据覆盖实时指标表
- 差异率 > 5%：人工告警 + 人工确认后修正

---
