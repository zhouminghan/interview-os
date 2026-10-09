---
id: STORAGE-0177
type: technical
question: 如何排查Hive的查询问题？请详细说明问题排查的方法、工具和常见问题的解决方案。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看报错、执行计划、日志定位。

# 参考回答

排查查询问题先看报错信息，再看 EXPLAIN 执行计划和日志。常见问题是语法、权限、资源、数据格式。定位到具体原因再处理。

# 追问

- 慢查询怎么排查？
