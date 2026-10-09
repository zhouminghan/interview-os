---
id: STORAGE-0166
type: technical
question: 什么是Hive的压缩比？请详细说明压缩比的计算方法、影响因素和优化策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

压缩比是压缩前后大小的比例。

# 参考回答

压缩比是原始大小除以压缩后大小，受数据重复度和压缩算法影响。重复度高压缩比好。选压缩看压缩比和 CPU 的权衡。

# 追问

- 怎么提高压缩比？
