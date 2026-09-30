---
id: STORAGE-0639
type: technical
question: Hive 配置的优先级顺序是什么？
difficulty: 0
topic: []
source_type: knowledge
---

在 Hive 中，可以使用以下优先级顺序来设置可配置属性：

1. Hive `SET` 命令（最高优先级）
2. 来自 Hive 命令行的 `-hiveconf` 选项
3. `hive-site.xml` 文件
4. `hive-default.xml` 文件
5. `hadoop-site.xml` 文件
6. `hadoop-default.xml` 文件

---
