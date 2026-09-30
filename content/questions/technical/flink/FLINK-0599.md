---
id: FLINK-0599
type: technical
question: 设计用户实时行为宽表（曝光/点击/加购/下单），保证实时性、幂等、口径统一？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-基础数据部5年数开三面-20260530 Q22

业务诉求拆解：一行宽表 = `user_id + item_id + 4 种行为时间戳 + 维度信息`，要求实时性 + 幂等 + 口径统一。

**架构方案（Flink + Iceberg 流批一体）**：

```
[曝光 Topic]
[点击 Topic]   →  Flink 多流合并  →  关联用户/商品维表  →  写 Iceberg DWD
[加购 Topic]                     ↓
[下单 Topic]            按 user_id+item_id keyBy 累积状态
                                 ↓
                       输出实时宽表（每事件触发更新）
```

**关键技术点**：

**① 多流接入**：4 个 Topic 分别接 Source，标准化字段后 union 成统一事件流，每条事件保留 `event_type` 字段。用事件时间 + Watermark 处理乱序

**② 状态管理（核心）**：按 `user_id + item_id` keyBy → MapState 维护该 user × item 的累积状态（4 种行为时间戳）→ 每收到新事件更新对应字段，输出更新后宽表行。**状态必须设 TTL**（如 7 天没新事件清理），避免膨胀

**③ 维表关联**：用户/商品基础信息走广播流（小维表）或异步 IO（大维表），CDC 接入维度变更

**④ 幂等保障**：
- 事件级：每条事件带唯一 event_id，状态更新前用 event_id 去重
- 端到端精确一次：Flink Checkpoint + Iceberg 两阶段提交
- 重放安全：Source 从 Kafka offset 重消费 + Iceberg 事务回滚未提交分区

**⑤ 口径统一（流批一体）**：数据落 Iceberg DWD，Spark 离线读同一份做 T+1 校验。Flink SQL + Spark SQL 共用 SQL 逻辑

**⑥ 输出策略**：
- **每事件更新**：实时性最好，下游 QPS 高
- **窗口聚合**：每 N 分钟输出最新状态，下游压力小但延迟略高
- 折中：写两份——实时给监控，窗口聚合给报表

**⑦ 性能优化**：RocksDB 状态后端 + 增量 Checkpoint + 双层聚合防超活跃用户倾斜 + Iceberg 定期 compact

**⑧ 监控告警**：端到端延迟 / 各事件接入量 / 状态体积 / Checkpoint 延迟 / 实时离线指标差异率

---

> 💡 **专家补充**（场景题口述脚本）
>
> - **这种"多事件实时宽表"是字节、阿里、美团高频场景题**——回答时一定要主动提"流批一体"+"Iceberg/Hudi"+"双层聚合"三个加分名词，立刻显示出做过实时
> - **状态 TTL 是必须主动提到的设计点**——很多候选人答了状态管理但不提 TTL，面试官会追问"状态会不会无限增长"，提前自答省一个追问
> - **end-to-end 精确一次的"两阶段提交"是面试官最爱追问的方向**——准备好"Pre-commit + Commit"两阶段流程，配合 Iceberg/Kafka 事务支持的话术
