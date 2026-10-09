---
id: SPARK-0070
type: technical
question: 什么是Spark的推测执行？它的作用是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

慢任务在别的节点重跑一份，谁先完用谁。

# 参考回答

推测执行就是发现某个 task 特别慢，就在另一个节点再跑一份，谁先完成用谁的结果。解决个别节点慢或数据倾斜导致的拖尾问题。

# 追问

- 推测执行有什么副作用？
