---
id: FLINK-0643
type: technical
question: 你设计的 Iceberg 小文件合并策略，"大小+时间"触发逻辑具体怎么实现的？
difficulty: 0
topic: []
source_type: knowledge
---

**问题背景**：Flink 流式写入 Iceberg 每次 CP（1 分钟）都会 flush 产生数据文件。如果某个分区每分钟只有几 KB 数据 → 一天产生 1440 个小文件 → 查询时 Open 文件开销巨大。

**双触发合并策略**：

1. **大小触发（128MB）**：配置 Iceberg 的 `write.target-file-size-bytes=134217728`，当分区内未合并文件总大小 ≥ 128MB 时触发 Compaction。
2. **时间触发（24h）**：通过 US 调度平台每天凌晨 3 点执行一次全量 Compaction，清理当天遗留的小文件。

**实现方式**：
```sql
-- 通过 Spark 执行 Iceberg 的 rewrite_data_files 操作
CALL catalog.system.rewrite_data_files(
  table => 'db.dwd_channel_action_di',
  options => map(
    'target-file-size-bytes', '134217728',
    'min-file-size-bytes', '67108864',    -- 小于 64MB 的文件才参与合并
    'max-file-size-bytes', '201326592'    -- 合并后文件不超过 192MB
  )
);
```

**效果量化**：
- 合并前：日均文件数 ~5000 个/分区 → 合并后：~50 个/分区
- 查询 Scan 时间：2.8s → 0.9s（提速约 67%）
- 存储空间：因为大文件压缩效率更高，存储成本降低约 25%

---
