---
id: STARROCKS-0010
type: technical
question: StarRocks 是怎么做分区分桶排序键的
topic: [starrocks, table-design]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-xunlei-data-dev
    company: 迅雷
    position: 资深数据开发（一面）
    date: 2026-09-25
---

# 一句话

分区按时间/范围裁剪，分桶按高基数 hash 分布，排序键决定前缀索引和查询性能。

# 30 秒回答

分区选时间/范围做裁剪和生命周期；分桶选高基数列 hash 保证分布均匀和并行；排序键选高频过滤/排序/聚合的前缀列，决定前缀索引。

# 1 分钟回答

- 分区：按时间（日/月）或范围，裁剪 + TTL
- 分桶：按订单号/用户 ID hash，桶数按数据量和 BE 数
- 排序键：常用 where/order by/group by 的前缀列
- 原则：能裁剪、分布均匀、贴近查询

# 追问

- 分桶数怎么定？
- 排序键太长会怎样？
