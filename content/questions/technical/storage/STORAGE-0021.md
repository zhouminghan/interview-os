---
id: STORAGE-0021
type: technical
question: B+ 树和 B 树的区别，为什么 MySQL 用 B+ 树
topic: [storage, mysql, index]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2025-03-03-bytedance-global-data
    company: 字节跳动
    position: 数据开发（一面）
    date: 2025-03-03
---

# 一句话

B+ 树数据只存在叶子节点、叶子用链表串联，范围查询和磁盘 IO 更优，所以 MySQL 用 B+ 树做索引。

# 30 秒回答

B 树节点既存 key 又存数据，B+ 树非叶子只存 key、数据全在叶子，且叶子间有链表。B+ 树更矮、每次 IO 读出更多 key、范围查询顺着叶子链表走，更适合磁盘数据库。

# 1 分钟回答

- B 树：每个节点都存数据，范围查询要回退遍历
- B+ 树：非叶子只存索引 key，数据在叶子，叶子双向链表
- 优势：树更矮（IO 少）、单节点存更多 key、范围查询快、查询稳定
- MySQL：InnoDB 主键索引是聚簇 B+ 树，二级索引存主键回表

# 追问

- 聚簇索引和二级索引的区别？
- 为什么不直接用哈希索引？
