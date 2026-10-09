---
id: STORAGE-0037
type: technical
question: Hive中的视图和物化视图有什么区别？请详细说明它们的特点、使用场景、创建方法和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

视图是逻辑查询，物化视图预存结果。

# 参考回答

普通视图只是保存查询定义，查的时候现算；物化视图把结果预存下来，查询直接复用。物化视图快但占存储、要刷新。常用聚合可以物化加速。

# 追问

- 物化视图什么时候用？
