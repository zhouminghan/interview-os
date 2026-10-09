---
id: STARROCKS-0131
type: technical
question: StarRocks 如何平衡实时性和吞吐量？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用主键模型做实时更新，批量导入做吞吐，按业务 SLA 取舍。

# 参考回答

实时性和吞吐量本来有冲突，实时强调低延迟，吞吐强调单位时间量。平衡靠分场景：核心实时指标用 Routine Load 加主键模型，历史大批量用 Broker Load，再按 SLA 区分延迟要求。

# 追问

- 什么场景必须强实时？
