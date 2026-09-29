---
id: SYSTEM-0004
type: technical
question: JVM 内存模型和 Full GC 排查
topic: [system, jvm]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

JVM 分堆、栈、方法区、程序计数器、本地方法栈；Full GC 触发于老年代/元空间满或显式调用。

# 30 秒回答

线上频繁 Full GC：看 GC 日志频率和耗时，jstat 看各代占用，MAT/jmap 找大对象定位内存泄漏；锁信息（对象头）在堆里。

# 追问

- Full GC 和 Minor GC 区别？
- 对象头里存了什么？
