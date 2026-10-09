---
id: STORAGE-0300
type: technical
question: HBase的版本控制实现机制是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

时间戳区分版本，限制版本数。

# 参考回答

版本控制靠时间戳，一个 Cell 可存多个版本，按时间倒序。配置最大版本数，超过的旧版本在 compact 清理。读取可指定版本数或时间范围。

# 追问

- 版本数设多少？
