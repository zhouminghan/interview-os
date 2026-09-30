---
id: FLINK-0640
type: technical
question: Flink 任务出现反压时，你怎么定位瓶颈？
difficulty: 0
topic: []
source_type: knowledge
---

**定位流程**：

1. **Flink Web UI 看反压指标**：从 Sink 往上游看，第一个显示 `HIGH` 反压的算子就是瓶颈
2. **看指标细化**：
   - `busyTimeMsPerSecond`：算子忙碌时间占比（> 900ms/s 说明接近满载）
   - `numRecordsOutPerSecond`：输出速率是否异常低
3. **常见瓶颈及处理**：

| 瓶颈位置 | 表现 | 解决方案 |
|----------|------|----------|
| 维表 JOIN | Process Function 耗时高 | 加本地缓存、异步 IO |
| 窗口聚合 | 窗口触发时瞬间压力大 | 预聚合、增大并行度 |
| Iceberg Sink | 写入延迟高 | 调大写入批次、优化小文件合并频率 |
| 状态操作 | RocksDB 读写慢 | 增加 Block Cache、使用 SSD |

---
