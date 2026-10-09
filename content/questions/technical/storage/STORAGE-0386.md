---
id: STORAGE-0386
type: technical
question: 分享一个HBase的数据清理方案。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TTL 加版本控制加定期 compact。

# 参考回答

数据清理方案：列族配 TTL 自动过期、限制版本数、定期 Major Compaction 清理删除标记。错峰执行 compact，监控存储增长。

# 追问

- 清理方案怎么设计？
