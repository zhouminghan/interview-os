---
id: STORAGE-0077
type: technical
question: Hive中的INSERT语句有哪些不同的用法？请举例说明INSERT INTO、INSERT OVERWRITE等语句的区别和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

INTO 追加，OVERWRITE 覆盖。

# 参考回答

INSERT INTO 追加数据，INSERT OVERWRITE 覆盖目标分区。数仓任务基本都用 OVERWRITE，避免重复。也支持多路输出和动态分区。

# 追问

- 为什么数仓用 OVERWRITE？
