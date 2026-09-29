---
id: WAREHOUSE-0100
type: technical
question: 怎么评价一个数仓设计得好不好
topic: [warehouse, evaluation]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-30-fliggy-data-dev
    company: 飞猪
    position: 数据开发 / 大数据（4 轮）
    date: 2026-06-30
---

# 一句话

看四件事：口径是否统一可信、模型是否可复用、链路是否稳定可回溯、成本是否可控。

# 30 秒回答

好数仓：指标口径统一、无烟囱重复建设、分层清晰复用度高、质量有熔断保障、血缘可回溯、存储计算成本合理。坏数仓：口径打架、大宽表堆砌、依赖混乱、任务经常挂、成本失控。

# 1 分钟回答

- 口径统一：同一指标只有一处定义，多方对齐
- 复用：公共层共享，避免重复建表
- 稳定性：核心表有熔断、按时产出
- 可回溯：血缘完整，问题能定位到上游
- 成本：存储/计算不过度冗余

# 追问

- 从 0 到 1 设计数仓第一步做什么？
- 怎么量化数仓的建设收益？
