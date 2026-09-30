---
id: STORAGE-0776
type: technical
question: 如何提高 Hive 程序的性能？
difficulty: 0
topic: []
source_type: knowledge
---

- 选择正确的数据结构
- 使用合适的文件格式（ORC、Parquet）
- 启用分区裁剪和谓词下推
- 合理设置并行度和内存
- 用小表驱动大表做 JOIN
- 开启向量化查询执行
