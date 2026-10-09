---
id: STORAGE-0379
type: technical
question: 在生产环境中如何进行HBase的版本升级？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

滚动升级，先测试后生产。

# 参考回答

升级先测试环境验证，生产滚动升级逐个 RegionServer 升，留回滚。升级前备份和快照。按官方升级顺序，别跨大版本。

# 追问

- 滚动升级怎么做？
