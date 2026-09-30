---
id: STORAGE-0768
type: technical
question: 能否为一个数据文件创建多个 Hive 表？
difficulty: 0
topic: []
source_type: knowledge
---

可以。多个表可以指向同一个 HDFS 位置，但不推荐，因为可能造成数据一致性混乱。
