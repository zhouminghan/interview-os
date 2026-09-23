---
id: STORAGE-0004
type: technical
question: 存储治理项目怎么做，治理后有什么效果
topic: [storage, governance]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-pdd-data-dev
    company: 拼多多
    position: 数据开发（社招）
    date: 2026-09-21
---

# 一句话

存储治理围绕「生命周期 + 冷热分层 + 压缩 + 小文件 + 清理无用数据」做，目标是降成本、提性能。

# 30 秒回答

手段：TTL 分区清理、冷热分层、压缩格式（Parquet/ORC）、小文件合并、无用表/临时表清理、重复数据治理、分区策略优化。

# 1 分钟回答

- 生命周期：按保留策略自动清理过期分区
- 冷热分层：热数据高性能介质，冷数据低频/归档
- 压缩：列式存储 + 压缩编码，减少体积
- 小文件：合并，降低 NameNode 压力
- 清理：下线无用表、临时表、重复数据
- 效果：存储成本下降、查询性能提升、元数据压力降低、任务更稳定（按实际项目量化）

# 追问

- 冷热分层怎么自动做？
- 压缩格式怎么选？
- 怎么评估治理收益？
