---
id: SPARK-0154
type: technical
question: 如何实现Spark Streaming的自定义接收器？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

继承 Receiver 实现 onStart 和 onStop。

# 参考回答

自定义 Receiver 要继承 Receiver，实现 onStart 接收数据、onStop 停止，用 store 方法把数据写入。对接特殊数据源时用。

# 追问

- store 方法怎么用？
