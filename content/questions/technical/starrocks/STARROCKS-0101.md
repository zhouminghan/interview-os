---
id: STARROCKS-0101
type: technical
question: StarRocks 元数据不一致如何修复？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用元数据恢复或重建，必要时从 FE 快照恢复。

# 参考回答

元数据不一致一般靠 FE 的元数据快照恢复，或重新加载元数据。如果多 FE 之间不一致，先确认 leader 正确，再触发同步。严重时用备份恢复。

# 追问

- FE 之间元数据怎么同步？
