---
id: WAREHOUSE-0030
type: technical
question: 交付层延迟时如何自动回溯定位上游任务，而不是每个任务单独加 DQC
topic: [warehouse, lineage, root-cause]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

用血缘 + 任务依赖 + 运行时长监控，交付层延迟时沿血缘向上回溯定位根因任务。

# 30 秒回答

基于任务血缘和依赖图，监控每个节点的完成时间和延迟，最终交付层延迟时自动向上回溯，找到最早延迟/失败的源头任务，而不是每个任务单独加 DQC。

# 1 分钟回答

- 血缘：记录任务上下游依赖
- 运行监控：每个任务的开始/结束时间、耗时
- 回溯：交付层延迟 -> 沿血缘向上找最早异常节点
- 收益：一次定位根因，减少大量 DQC 配置

# 追问

- 血缘图怎么构建？
- 多上游同时延迟怎么定位？
