---
id: STARROCKS-0102
type: technical
question: StarRocks 内存溢出如何处理？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

限制查询内存、调小并发、优化大查询、加内存。

# 参考回答

OOM 先看是查询还是导入引起的。查询 OOM 就限制单查询内存、调低并发、优化 SQL；导入 OOM 就调 batch。根本解决是加内存或优化数据模型。

# 追问

- 怎么判断是哪个查询 OOM？
