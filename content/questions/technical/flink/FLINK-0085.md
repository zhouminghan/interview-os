---
id: FLINK-0085
type: technical
question: Flink的反压检测机制是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

通过检查网络缓冲池使用率判断。

# 参考回答

Flink 反压检测看任务输出缓冲池的使用率，满就说明下游消费慢，在反压。UI 里能看到反压状态，从高到低定位瓶颈算子。

# 追问

- 反压状态 OK 和 HIGH 什么意思？
