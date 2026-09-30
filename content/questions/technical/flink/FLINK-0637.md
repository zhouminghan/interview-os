---
id: FLINK-0637
type: technical
question: Flink 任务的 Checkpoint 机制你具体是怎么配置的？遇到 CP 失败怎么排查？
difficulty: 0
topic: []
source_type: knowledge
---

**配置详情**：
- **间隔**：60s（1 分钟）
- **模式**：EXACTLY_ONCE
- **超时**：5 分钟（分流任务状态不大，正常 10-20s 能完成 CP）
- **最小间隔**：30s
- **StateBackend**：RocksDB（支持增量 CP + 大状态）
- **存储路径**：HDFS（`hdfs:///flink/checkpoints/{jobId}`）
- **失败容忍**：允许连续失败 3 次后才 failover

**CP 失败排查流程**：
1. **看 Flink Dashboard**：CP 哪个 subtask 超时 → 一般是状态最大的那个
2. **看 TaskManager 日志**：是否有 `Checkpoint was declined` 或 `Checkpoint expired`
3. **常见原因**：
   - 反压导致 barrier 对齐慢 → 需优化下游算子或开启 Unaligned Checkpoint
   - 状态太大 → 增量 CP 没开（我们显式配置了 `state.backend.incremental=true`）
   - HDFS 写入慢 → 检查 HDFS 负载
   - GC 停顿 → 调整 TaskManager 内存配置

---
