---
id: STORAGE-0513
type: technical
question: 如何在Clickhouse中创建视图？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CREATE VIEW 建逻辑视图。

# 参考回答

普通视图用 CREATE VIEW 加查询定义，不存数据。物化视图用 MATERIALIZED VIEW。视图封装复杂查询。

# 追问

- 普通视图和物化视图区别？
