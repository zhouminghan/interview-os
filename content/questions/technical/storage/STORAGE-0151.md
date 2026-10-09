---
id: STORAGE-0151
type: technical
question: 如何优化Hive的数据导入导出？请详细说明数据导入导出的优化策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

LOAD 快、并行导入、避免小文件。

# 参考回答

导入用 LOAD 直接搬文件最快，INSERT 走计算。并行导入、控制分区和文件大小。导出用 INSERT 写文件或 EXPORT，注意格式和压缩。

# 追问

- LOAD 和 INSERT 怎么选？
