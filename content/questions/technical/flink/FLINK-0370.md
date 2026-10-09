---
id: FLINK-0370
type: technical
question: 如何在FlinkSQL中使用JOIN实现流式去重和数据修正？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 join 关联修正表，或主键模型去重。

# 参考回答

流式去重用主键模型或窗口去重；数据修正用 join 关联修正表，把错误数据替换成修正值。也可以双流 join 做实时对账和修正。

# 追问

- 数据修正怎么保证幂等？
