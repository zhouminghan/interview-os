---
id: STORAGE-0787
type: technical
question: HBase vs Hive
difficulty: 0
topic: []
source_type: knowledge
---

| | Hive | HBase |
|------|------|-------|
| 定位 | 数据仓库，批处理 | NoSQL 数据库，实时读写 |
| 查询 | SQL → MapReduce | 行键查询 |
| 延迟 | 高（秒到分钟） | 低（毫秒） |
| 更新 | 不支持行级更新 | 支持 |
