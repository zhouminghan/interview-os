---
id: SYSTEM-0001
type: technical
question: 应用突然 CPU 利用率飙升，怎么定位和处理
topic: [system, cpu, diagnose]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-xunlei-data-dev
    company: 迅雷
    position: 资深数据开发（一面）
    date: 2026-09-25
---

# 一句话

先定位进程和线程，再判断是流量、热点代码、GC、死循环还是锁竞争。

# 30 秒回答

用 top/监控定位高 CPU 进程和线程，看用户态/系统态/IO wait 占比，结合 jstack/火焰图定位热点代码；按流量突增、死循环、GC、锁竞争分类，再限流/扩容/优化。

# 1 分钟回答

- 定位：top、监控、进程/线程
- 分类：用户态（热点代码）、系统态（IO/系统调用）、GC
- 工具：jstack、火焰图、GC 日志
- 处理：限流、扩容、优化热点、修死循环/锁

# 追问

- 用户态和系统态高分别说明什么？
- 火焰图怎么看？
