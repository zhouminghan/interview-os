---
id: FLINK-0087
type: technical
question: Flink中的任务链接（Operator Chaining）是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

把相邻算子串成一条链，减少线程和序列化开销。

# 参考回答

任务链接把条件允许的相邻算子合并成一个 task，在同一个线程里流水线执行，减少线程切换和网络传输。大部分算子默认会链起来。

# 追问

- 什么情况不能链接？
