---
id: STORAGE-0167
type: technical
question: 如何优化Hive的存储空间？请详细说明存储空间优化的各种策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列式压缩、生命周期、清理小文件。

# 参考回答

存储优化用列式压缩、数据生命周期清理过期分区、合并小文件。冷数据可转低成本和压缩格式。定期清理无效数据。

# 追问

- 冷数据怎么处理？
