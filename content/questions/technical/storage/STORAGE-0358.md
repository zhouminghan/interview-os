---
id: STORAGE-0358
type: technical
question: 详细解释HBase的数据导出优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

并行导出、快照导出。

# 参考回答

导出优化用并行 scan、快照导出避免影响在线服务。Export 工具或快照加导出。控制导出并发，别拖垮集群。

# 追问

- 快照导出为什么好？
