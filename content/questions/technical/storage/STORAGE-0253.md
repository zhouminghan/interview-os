---
id: STORAGE-0253
type: technical
question: 解释HBase中的Put和Delete操作的原理。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Put 写新版本，Delete 打删除标记。

# 参考回答

Put 写一条带时间戳的新数据，多版本共存；Delete 打删除标记，读时过滤，compact 时清理。两者都先写 WAL 再写 MemStore。

# 追问

- Put 覆盖还是追加？
