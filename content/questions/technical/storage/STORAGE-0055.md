---
id: STORAGE-0055
type: technical
question: 如何理解Hive的谓词下推？请详细说明谓词下推的原理、配置方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

过滤条件提前到数据源执行。

# 参考回答

谓词下推把 where 过滤条件尽量推到扫描阶段，在读数据时就过滤，减少读的数据量。列式存储和分区裁剪配合，性能提升明显。默认开启。

# 追问

- 谓词下推和分区裁剪关系？
