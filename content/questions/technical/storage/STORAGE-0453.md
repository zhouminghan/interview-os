---
id: STORAGE-0453
type: technical
question: 解释Clickhouse的写入流程。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

写入形成数据块，后台合并。

# 参考回答

写入流程：数据按分区和排序键组织成数据块写入，后台 MergeTree 定期合并小块。写入是追加，更新删除靠 alter 或特殊引擎。

# 追问

- 写入为什么快？
