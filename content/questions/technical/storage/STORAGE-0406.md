---
id: STORAGE-0406
type: technical
question: 在实际项目中如何实现HBase的数据版本控制？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配置版本数和 TTL。

# 参考回答

版本控制配置列族最大版本数和 TTL。写入带时间戳区分版本，读指定版本数。按业务需要保留历史，不需要就 1 版本。

# 追问

- 版本保留几个？
