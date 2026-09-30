---
id: FLINK-0544
type: technical
question: 如何用 CLI 模式运行 Flink 程序？
difficulty: 0
topic: []
source_type: knowledge
---

我们可以使用 Apache Flink CLI（命令行界面）工具来运行构建为 JAR 文件的程序。

例如，可以使用以下命令运行 `WordCounts.jar` JAR 文件：
```bash
./bin/flink run ./examples/batch/WordCounts.jar
```

---
