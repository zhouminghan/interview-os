---
id: STORAGE-0392
type: technical
question: 分享一个HBase的性能问题排查案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看指标定位瓶颈，逐步排除。

# 参考回答

性能排查看读写延迟、GC、磁盘 IO、Region 分布。一个案例是读慢，定位到 BlockCache 太小命中低，加大缓存后恢复。

# 追问

- 排查从哪开始？
