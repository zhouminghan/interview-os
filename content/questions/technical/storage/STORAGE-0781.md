---
id: STORAGE-0781
type: technical
question: 文件格式优化
difficulty: 0
topic: []
source_type: knowledge
---

- **ORC**：列式存储，支持索引和压缩，Hive 推荐格式
- **SELECT \* 优化**：使用 ORC/Parquet 时只扫描需要的列
- **递归访问子目录**：`SET mapreduce.input.fileinputformat.input.dir.recursive=true`
