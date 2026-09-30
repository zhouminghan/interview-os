---
id: STORAGE-0633
type: technical
question: Hive 的主要组件有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

Hive 的主要组件如下：

- **Hive Driver**：Hive Driver 接收来自用户的查询。它处理会话，并提供类似于 JDBC/ODBC 接口的执行和获取 API 命令。
- **Metastore**：有关 Hive 表和分区的所有元数据信息都存储在 Metastore 中。它还维护有关列和列类型的信息。它知道用于在对应 HDFS 文件中读写数据的序列化和反序列化器。
- **Hive Compiler**：Hive 中的编译器解析查询，并对不同的查询块和查询表达式执行语义分析。它还生成从表和分区查找数据的执行计划。
- **Execution Engine（执行引擎）**：这是 Hive 组件中执行由编译器创建的执行计划的部分。执行引擎管理执行计划不同阶段之间的依赖关系。它在相关系统组件上执行执行计划的各个阶段。
- **User Interface（UI）**：Hive 为用户提供 UI 以与系统交互。用户可以在系统上提交查询并执行其他操作。

---
