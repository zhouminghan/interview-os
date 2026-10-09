---
id: STORAGE-0259
type: technical
question: 什么是HBase的Region状态转换？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Region 在分配、打开、关闭等状态间转换。

# 参考回答

Region 有多个状态，比如未分配、正在打开、打开、正在关闭、已关闭。Master 管理状态转换，故障时重新分配。状态转换保证数据一致。

# 追问

- 状态转换谁管理？
