---
id: STORAGE-0082
type: technical
question: 解释一下Hive的MERGE语句的工作原理。在什么场景下应该使用MERGE语句？它和INSERT、UPDATE有什么区别？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MERGE 按条件匹配后插入或更新。

# 参考回答

MERGE 根据匹配条件决定插入还是更新，类似 upsert。要求 ACID 表。适合数据同步和增量合并，把 insert 和 update 合成一步。

# 追问

- MERGE 适合什么场景？
