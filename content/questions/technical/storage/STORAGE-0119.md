---
id: STORAGE-0119
type: technical
question: 如何理解Hive的桶表？请详细说明桶表的设计原则、创建方法、使用场景和性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

桶表按 hash 分文件，适合 join 和采样。

# 参考回答

桶表 CLUSTERED BY 分桶字段 INTO 桶数，按 hash 分到固定文件。适合 join 和采样，分桶键选高基数均匀的。桶数和并行度匹配。

# 追问

- 桶表 join 为什么快？
