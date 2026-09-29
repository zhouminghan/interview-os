---
id: STORAGE-0014
type: technical
question: Hive 内部表和外部表的区别
topic: [storage, hive]
difficulty: 2
frequency: high
source_type: knowledge
---

# 一句话

内部表 Hive 管理元数据和数据，drop 连数据一起删；外部表只管理元数据，drop 不删数据文件。

# 30 秒回答

ODS 层用外部表（保留原始数据），DWD 以上用内部表（可随时重跑重建）。

# 追问

- 什么场景必须用外部表？
- 外部表数据文件删了会怎样？
