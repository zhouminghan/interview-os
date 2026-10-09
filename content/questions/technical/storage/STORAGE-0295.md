---
id: STORAGE-0295
type: technical
question: 解释HBase的客户端缓存机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

缓存 Region 位置，减少寻址。

# 参考回答

客户端缓存 Region 位置信息，避免每次都查 Meta。位置失效了再重新查。缓存提高性能，但 Region 迁移后要刷新缓存。

# 追问

- 缓存失效怎么办？
