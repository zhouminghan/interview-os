---
id: SYSTEM-0007
type: technical
question: 堆、栈、队列的区别，线程和进程的区别
topic: [system, data-structure]
difficulty: 2
frequency: medium
source_type: knowledge
---

# 一句话

栈 LIFO，队列 FIFO，堆是完全二叉树（堆顶是最大/最小值）；进程是资源分配单位，线程是 CPU 调度单位。

# 30 秒回答

栈后进先出，队列先进先出，堆用于优先队列/TopN；进程有独立内存，线程共享进程内存、切换开销小（Spark Executor=进程，Task=线程）。

# 追问

- 大顶堆和小顶堆区别？
- 为什么线程切换比进程快？
