---
id: STORAGE-0368
type: technical
question: HBase的数据清理优化策略有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TTL、版本数、Major Compaction。

# 参考回答

数据清理靠 TTL 过期、版本数限制、Major Compaction 清理删除标记。定期清理控制存储增长。Major 错峰做。

# 追问

- 清理不及时会怎样？
