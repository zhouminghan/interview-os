---
id: STARROCKS-0092
type: technical
question: 如何处理 StarRocks 的数据不一致问题？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

先查副本和版本，触发修复或重新导入。

# 参考回答

数据不一致一般是副本没同步全。先看 tablet 副本状态，触发副本修复或均衡；如果是对账发现结果不对，查导入任务和版本，必要时重导。

# 追问

- 怎么发现数据不一致？
