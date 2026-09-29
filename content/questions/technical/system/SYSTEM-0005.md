---
id: SYSTEM-0005
type: technical
question: synchronized 和 ReentrantLock 的区别，AQS 原理，锁升级
topic: [system, java-lock]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

synchronized 内置锁、自动释放；ReentrantLock 显式锁，支持可中断、超时、公平；AQS 用 state + CAS + 队列实现。

# 30 秒回答

锁升级：无锁 → 偏向锁 → 轻量级锁 → 重量级锁；非公平锁大体维持 FIFO 但新线程可插队。

# 追问

- AQS 的 state 是什么？
- 什么时候升级到重量级锁？
