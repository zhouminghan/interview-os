---
id: FLINK-0631
type: technical
question: KeyedProcessFunction 如何工作？
difficulty: 0
topic: []
source_type: knowledge
---

获取 KeyedStream 后调用`.process()`，每个 key 独立处理。
可访问：状态（ValueState/ListState/MapState）、定时器（TimerService）
典型场景：按用户统计、按 key 去重

---

> *共计 40+ 道核心问答，按六个阶段渐进式组织，覆盖基础概念到流处理实战。*
