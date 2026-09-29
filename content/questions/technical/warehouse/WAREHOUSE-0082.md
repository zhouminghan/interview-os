---
id: WAREHOUSE-0082
type: technical
question: 怎么判断哪些任务优先优化，哪些不着急
topic: [warehouse, optimization]
difficulty: 2
frequency: medium
source_type: knowledge
---

# 一句话

看 SLA 影响、下游依赖数、资源消耗，投入产出比高的优先优化。

# 30 秒回答

优先优化：核心链路、下游依赖多、资源消耗 Top20% 的任务；不着急：无下游、时效要求低、资源消耗小的任务。

# 追问

- 怎么统计任务资源消耗？
- 优化优先级怎么量化？
