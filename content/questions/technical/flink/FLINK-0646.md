---
id: FLINK-0646
type: technical
question: 你是怎么统一实时和离线的计算逻辑的？保证口径一致性？
difficulty: 0
topic: []
source_type: knowledge
---

统一策略是 **"一份逻辑，两处执行"**：

1. **指标定义统一**：所有指标的计算口径记录在指标字典中（Confluence 文档），Flink SQL 和 Hive SQL 必须引用同一份定义。
2. **核心逻辑抽象**：对于复杂指标（如"有效互动用户数"），将过滤条件抽象为标准规则：`action_type IN ('like','comment','share') AND env <> 'test' AND is_robot = 0`。Flink 和 Hive 都使用同一组过滤条件。
3. **定时校验任务**：每天凌晨 4 点，拿实时链路的天级聚合结果和离线 T+1 的结果做 diff，差异率 > 1% 自动告警。

**diff 对齐方式**：
- 实时数据按天聚合存入 Iceberg 的一张对账表
- 离线数据产出后写入对应的对账表
- 校验任务 JOIN 两张表，按 channel_id + 指标名比较

**实际差异来源**：
- 迟到数据（实时 3 分钟 Watermark 截断 vs 离线 T+1 全收）→ 差异率通常 < 0.5%
- 维表版本差异（实时用的是当天最新维度，离线用的是 T-1 快照）→ 影响极小

---
