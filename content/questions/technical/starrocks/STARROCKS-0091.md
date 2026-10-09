---
id: STARROCKS-0091
type: technical
question: StarRocks 升级过程需要注意什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

先备份、读升级说明、灰度升级、验证再全量。

# 参考回答

升级要先备份元数据和数据，读版本升级说明看兼容性，先灰度升一部分节点，验证查询导入正常再全量。注意别跨大版本直接跳，按官方路线走。

# 追问

- 为什么要灰度升级？
