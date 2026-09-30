---
id: SPARK-0382
type: technical
question: 什么是推测执行（Speculative Execution）？
difficulty: 0
topic: []
source_type: knowledge
---

推测执行是 Spark 的优化功能：当某个 Task 运行异常缓慢时，自动在同一数据上启动一个备用 Task。先完成的 Task 结果被采用，另一个被终止。用于处理硬件不可靠、网络带宽降低等情况。
