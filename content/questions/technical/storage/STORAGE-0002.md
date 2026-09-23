---
id: STORAGE-0002
type: technical
question: InnoDB 怎么存储数据
topic: [storage, innodb, btree]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-09-bytedance-data-dev
    company: 字节跳动
    position: 数据开发（秋招）
    date: 2026-09-09
---

# 一句话

InnoDB 以页为单位存储，数据按主键聚簇组织成 B+ 树，二级索引叶子存主键。

# 30 秒回答

数据以页（默认 16KB）为单位存到磁盘，主键索引是聚簇索引（B+ 树叶子存整行），二级索引叶子存主键再回表；同时用 redo log、undo log、binlog 保证一致性和恢复。

# 1 分钟回答

- 页结构：File Header、Page Header、Infimum/Supremum、User Records、Free Space、Page Directory、File Trailer
- 聚簇索引：按主键顺序存储，叶子节点含完整行
- 二级索引：叶子存主键，查非索引列需回表
- 日志：redo（崩溃恢复）、undo（回滚/MVCC）、binlog（主从复制）
- MVCC：多版本链 + ReadView 实现可重复读

# 追问

- 什么是回表，怎么避免？
- 聚簇索引和非聚簇索引区别？
- 为什么建议自增主键？
