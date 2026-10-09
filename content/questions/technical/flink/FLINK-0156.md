---
id: FLINK-0156
type: technical
question: Flink任务长时间不推进（卡住）的原因分析与处理？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看反压、外部调用阻塞、资源不足。

# 参考回答

任务卡住先看反压和资源，是不是外部调用阻塞、死锁、资源耗尽。看 UI 和线程栈定位卡在哪。

# 追问

- 线程栈怎么看？
