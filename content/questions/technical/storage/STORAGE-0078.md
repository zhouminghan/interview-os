---
id: STORAGE-0078
type: technical
question: 如何理解Hive的LOAD DATA语句？它和INSERT语句有什么区别？在什么场景下应该使用LOAD DATA？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

LOAD 直接搬文件，INSERT 走计算。

# 参考回答

LOAD DATA 直接把文件搬进表目录，不经过计算，快；INSERT 走查询计算。LOAD 适合数据已经是目标格式、只做搬运的场景。LOAD 不做格式转换和校验。

# 追问

- LOAD 和 INSERT 性能差多少？
