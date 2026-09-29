---
id: FLINK-0021
type: technical
question: FlinkSQL 面试题大纲（200 题覆盖范围）
topic: [flink, sql, outline]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

FlinkSQL 200 题大纲，六大模块：基础、进度、高级、实战、优化、源码。

# 30 秒回答

高频考点：动态表、Event Time vs Processing Time、Watermark、窗口（滚动/滑动/会话）、双流 JOIN、Checkpoint 精准一次、反压排查。六大模块从基础语法到源码调优。

# 1 分钟回答

- 基础：DDL/DML/窗口/Join
- 进度：状态/Checkpoint/Savepoint
- 高级：CEP/时间处理/CDC
- 实战：场景设计/常见问题
- 优化：反压/数据倾斜/内存调优
- 源码：JobGraph/算子链/State Backend

# 追问

- 动态表是什么？
