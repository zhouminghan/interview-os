---
id: STORAGE-0008
type: technical
question: 数据库索引了解吗
topic: [storage, index]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

索引是加速查询的数据结构，常见 B+ 树、Hash、位图、全文索引。

# 30 秒回答

B+ 树适合范围查询，Hash 适合等值查询，位图适合低基数列；聚簇索引叶子存整行，非聚簇索引叶子存主键需回表。索引加速查询但占空间、影响写入。

# 1 分钟回答

- B+ 树：范围、有序，最常用
- Hash：等值查询快，不支持范围
- 位图：低基数、多条件
- 聚簇/非聚簇：是否按索引顺序存整行
- 代价：存储、写放大、维护成本
- 优化：覆盖索引避免回表、最左前缀

# 追问

- 什么是回表，怎么避免？
- 联合索引的最左前缀原则？
