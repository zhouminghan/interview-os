---
id: STORAGE-0143
type: technical
question: 如何优化Hive的磁盘IO？请详细说明磁盘IO优化的各种策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列式压缩、分区裁剪、减少小文件。

# 参考回答

磁盘 IO 优化用列式压缩减少读取、分区裁剪减少扫描、合并小文件。SSD 也有帮助。IO 是 Hive 常见的瓶颈，读得少就快。

# 追问

- 小文件为什么拖慢？
