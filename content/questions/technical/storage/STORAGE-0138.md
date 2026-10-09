---
id: STORAGE-0138
type: technical
question: 什么是Hive的谓词下推？请详细说明谓词下推的工作原理、配置方法和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

过滤条件提前到数据源执行。

# 参考回答

谓词下推把 where 条件推到扫描阶段，读数据时就过滤，减少 IO。默认开启，列式格式和分区裁剪配合效果最好。

# 追问

- 谓词下推失效场景？
