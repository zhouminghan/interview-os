---
id: FLINK-0641
type: technical
question: Flink StateBackend 用的是什么类型？为什么选这个？
difficulty: 0
topic: []
source_type: knowledge
---

用的 **RocksDB StateBackend**。原因：

1. **状态大小不可控**：分流任务需要存储广播规则状态 + 维表缓存，特征提取任务需要存储窗口内的中间聚合结果。内存 StateBackend 容易 OOM。
2. **支持增量 Checkpoint**：只持久化增量变化的 SST 文件，CP 时间从全量的 30s+ 降到 5-10s。
3. **磁盘扩展性好**：RocksDB 存在本地磁盘，TaskManager 配 SSD 后读写性能足够。

**性能优化配置**：
- `state.backend.rocksdb.block.cache-size=256MB`（增大 Block Cache 减少磁盘读）
- `state.backend.rocksdb.writebuffer.size=128MB`（增大写缓冲减少 flush 频率）
- 开启 `state.backend.incremental=true`

---

## 三、Iceberg 实时数据湖
