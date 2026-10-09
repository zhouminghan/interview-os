---
id: SPARK-0185
type: technical
question: 如何实现Structured Streaming的自定义检查点？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 checkpointLocation 指定，一般不自定义实现。

# 参考回答

自定义检查点基本就是指定 checkpointLocation 路径，底层机制引擎管。自定义检查点实现很少见，除非改引擎。

# 追问

- 为什么检查点底层不开放自定义？
