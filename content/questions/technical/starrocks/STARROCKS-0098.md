---
id: STARROCKS-0098
type: technical
question: StarRocks 数据导入失败如何处理？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看导入报错和错误行，定位格式、类型、网络问题。

# 参考回答

导入失败先看导入任务的报错信息，常见是字段格式不匹配、类型转换失败、网络抖动、超过过滤比例。按报错定位后修数据或调参重导。

# 追问

- 错误行过滤比例是什么？
