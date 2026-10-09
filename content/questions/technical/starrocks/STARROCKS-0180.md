---
id: STARROCKS-0180
type: technical
question: 如何使用 CDC 工具同步数据到 StarRocks？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CDC 监听 binlog 增量，转成事件写入 StarRocks。

# 参考回答

CDC 就是捕获数据库变更，监听 binlog 或 WAL，把 insert、update、delete 转成事件，同步到 StarRocks 的主键模型做 upsert，实现准实时一致。

# 追问

- CDC 和全量同步怎么配合？
