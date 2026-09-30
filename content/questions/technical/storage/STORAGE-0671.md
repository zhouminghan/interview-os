---
id: STORAGE-0671
type: technical
question: 如何在 Hive 中递归访问子目录？
difficulty: 0
topic: []
source_type: knowledge
---

可以在 Hive 中使用以下命令递归访问子目录：

```sql
hive> Set mapred.input.dir.recursive=true;
hive> Set hive.mapred.supports.subdirectories=true
```

一旦将上述选项设置为 true，Hive 将在 MapReduce 中递归访问目录的子目录。

---
