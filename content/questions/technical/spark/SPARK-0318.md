---
id: SPARK-0318
type: technical
question: Spark 任务失败排查思路？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：腾讯-数据工程-20260415 Q14、字节-大数据开发-20260414 Q7

1. 看 Driver/Executor 日志，定位哪个 Stage/Task 报错
2. 常见原因：OOM（加内存/调 partition/处理倾斜）、数据倾斜（Task 耗时差异大）、上游数据问题（分区没到齐/格式异常）、资源不足（YARN 资源不够 Executor 被 kill）
3. 修复后验证 → 复盘 → 加监控

---
