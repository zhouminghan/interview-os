---
id: STARROCKS-0002
type: technical
question: 分区分桶排序键怎么设置
topic: [starrocks, table-design]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-23-anker-data
    company: 安克创新
    position: 数据岗（一面）
    date: 2026-09-23
  - interview_id: INTERVIEW-2026-10-05-tencent-cdg-data-eng
    company: 腾讯 CDG
    position: 数据工程（秋招一面）
    date: 2026-10-05
---

# 一句话

分区管裁剪，分桶管分布，排序键管查询和前缀索引。

# 30 秒回答

分区按时间/范围切分用于裁剪和生命周期；分桶按高基数列 hash 分布保证均匀和并行；排序键选高频过滤/排序/聚合的前缀列，决定前缀索引。

# 1 分钟回答

- 分区：按时间（日/月）或范围，分区键选高频过滤的时间维度
- 分桶：按高基数列（订单号/用户 ID）hash，桶数按数据量、BE 数、副本权衡
- 排序键：选常用 where/order by/group by 的前缀列，顺序按查询频率和基数
- 原则：能裁剪、分布均匀、贴近查询

# 追问

- 分桶数怎么定？
- 排序键太长会怎样？
