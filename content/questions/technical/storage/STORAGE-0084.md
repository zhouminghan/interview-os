---
id: STORAGE-0084
type: technical
question: 在Hive中实现数据复制有哪些方法？请详细说明各种复制方式的优缺点和适用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

建表复制、导出导入、直接拷贝文件。

# 参考回答

复制数据可以 CTAS 建表复制、INSERT 重写、EXPORT IMPORT、或直接拷 HDFS 文件。CTAS 简单，EXPORT 适合跨集群，直接拷贝最快但要自己管元数据。

# 追问

- 跨集群复制用什么？
