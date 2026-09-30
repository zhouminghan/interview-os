---
id: STORAGE-0761
type: technical
question: 什么是 Hive 中的分桶（Bucketing）？
difficulty: 0
topic: []
source_type: knowledge
---

分桶将数据按某列的哈希值划分为多个桶，每个桶存储在一个单独的文件中。适合用于高效采样和 Map Join 优化。
