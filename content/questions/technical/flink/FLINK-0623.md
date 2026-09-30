---
id: FLINK-0623
type: technical
question: 维表关联怎么做？
difficulty: 0
topic: []
source_type: knowledge
---

| 方案 | 说明 |
|------|------|
| **全部预加载** | 启动时加载全量维表到内存 |
| **异步 IO** | 查询外部存储（HBase/Redis） |
| **广播维表** | 维表数据广播到所有 Task |
| **LRU 缓存** | 内存缓存 + 定时刷新 |
