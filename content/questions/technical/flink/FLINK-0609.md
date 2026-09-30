---
id: FLINK-0609
type: technical
question: 如何提交 Flink 程序？
difficulty: 0
topic: []
source_type: knowledge
---

```bash
# CLI 模式
flink run -c com.example.MyJob my-job.jar

# 带并行度
flink run -p 4 -c com.example.MyJob my-job.jar
```

---

