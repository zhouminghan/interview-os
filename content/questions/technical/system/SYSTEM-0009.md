---
id: SYSTEM-0009
type: technical
question: 系统设计题先问哪些澄清问题？为什么不能直接开做
topic: [system, design, clarification]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-27-google-ai-de
    company: Google
    position: ML Data Engineer（硕 3 年社招，L4）
    date: 2026-09-27
---

# 一句话

先问清规模、时效、吞吐、容错、消费方、成本六件事，否则方案一开口就可能是错的。

# 30 秒回答

数据量多大、SLA 要多久更新、吞吐多少、要不要容错、下游谁消费、成本上限多少。这六点直接决定架构选型和每一层的设计，跳过澄清直接堆组件是这类题最常见的翻车点。

# 1 分钟回答

- 规模：数据量、增长曲线
- 时效：新鲜度 SLA，离线还是实时
- 吞吐：QPS、写入速率
- 容错：失败重试、幂等、断点续跑要求
- 消费方：下游谁用、怎么用、要不要可解释
- 成本：预算上限，决定用不用更贵的组件
- 结论：澄清完再画架构，把约束对应到每一层

# 追问

- 面试官不主动给约束，你怎么办？
- 哪些约束对最终架构影响最大？
