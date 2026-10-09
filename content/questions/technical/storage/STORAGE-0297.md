---
id: STORAGE-0297
type: technical
question: 详细描述HBase的表创建过程。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

建表定义列族，划分 Region。

# 参考回答

建表时定义表名、列族、预分区。Master 建元数据，按预分区或默认单 Region 创建，分配 Region 到 RegionServer。列族建了不好改。

# 追问

- 建表要注意什么？
