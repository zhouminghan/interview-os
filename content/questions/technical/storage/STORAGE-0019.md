---
id: STORAGE-0019
type: technical
question: MySQL 表连接的底层实现方式
topic: [storage, mysql, join]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-20-meituan-data-dev1
    company: 美团
    position: 数据开发（社招，一面）
    date: 2026-05-20
---

# 一句话

三种：Nested Loop Join（嵌套循环）、Hash Join（哈希）、Index Join（走索引定位），取决于是否有索引和等值条件。

# 30 秒回答

Nested Loop 外层逐行扫驱动表、内层找匹配，适合小表驱动大表；Hash Join 用等值连接 key 建哈希表，适合无索引等值连接；Index Join 用被驱动表索引快速定位，适合驱动表小 + 被驱动表有索引。

# 1 分钟回答

- Nested Loop Join：双层循环，驱动表越小越好，配合索引快
- Hash Join：等值连接建哈希表，适合大表、无合适索引
- Index Join：被驱动表用索引回表，避免全表扫描
- 驱动表选择：结果集小、过滤后行数少的表做驱动表
- 等值 vs 非等值：非等值只能用 Nested Loop 类

# 追问

- 为什么小表驱动大表快？
- 等值连接优化器怎么选 Join 算法？
