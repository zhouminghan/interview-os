---
id: STARROCKS-0132
type: technical
question: StarRocks 为什么选择单进程多线程模型？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

单进程多线程减少进程间通信，共享内存，性能更好。

# 参考回答

单进程多线程能共享内存、减少 IPC 开销，调度和缓存都更高效，适合计算密集的查询引擎。代价是稳定性，一个线程崩可能影响进程，所以要做好隔离。

# 追问

- 单进程模型的稳定性怎么保证？
