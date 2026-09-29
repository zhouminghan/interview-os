---
id: STORAGE-0011
type: technical
question: 把 ClickHouse 和 Hive 任务迁移到 Doris，怎么设计和保证一致性
topic: [storage, doris, migration]
difficulty: 4
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-12-netease-bigdata
    company: 网易（杭州）
    position: 大数据开发工程师
    date: 2026-06-12
---

# 一句话

按分区/分桶/排序键设计 Doris 表，用 Colocation Join 避免搬迁，物化视图预聚合，新旧对账保证一致。

# 30 秒回答

设计：分区按时间、分桶按高基数列、排序键贴近查询；Join 用 Colocation Join 让同 key 落在同 BE；物化视图预聚合；迁移后新旧双跑对账保证一致性。

# 1 分钟回答

- 建模：Partition 裁剪 + Bucket 均匀 + 排序键
- Join：Colocation Join 消除 shuffle，避免数据搬迁
- 预计算：物化视图加速聚合
- 一致性：新旧双跑、总量+分维度对账
- 倾斜：分桶倾斜、写放大治理

# 追问

- Colocation Join 的条件是什么？
- 迁移后一致性怎么验证？
