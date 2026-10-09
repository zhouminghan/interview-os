---
id: STORAGE-0326
type: technical
question: HBase的预分区策略有哪些？如何选择合适的预分区方案？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按 RowKey 范围预分 Region，避免热点。

# 参考回答

预分区策略按 RowKey 范围均匀切分，比如 hash 分区或范围分区。选型看 RowKey 分布，均匀就范围分，不均就 hash 分。预分区好能避免初期热点。

# 追问

- 预分区怎么定分区数？
