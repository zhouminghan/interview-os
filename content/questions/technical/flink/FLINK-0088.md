---
id: FLINK-0088
type: technical
question: 什么是槽共享组（Slot Sharing Group）？如何配置？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制哪些算子共享 slot。

# 参考回答

槽共享组让同组的算子共享 slot，提高资源利用率。可以配置 slotSharingGroup 把算子分组，默认所有算子一个组。

# 追问

- 为什么要拆槽共享组？
