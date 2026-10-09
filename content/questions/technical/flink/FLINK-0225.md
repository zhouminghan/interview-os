---
id: FLINK-0225
type: technical
question: FlinkSQL中如何定义和使用视图(VIEW)？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CREATE VIEW 建逻辑视图。

# 参考回答

视图用 CREATE VIEW 定义，是对查询的命名，不存数据。临时视图 session 内有效，永久视图存 Catalog。

# 追问

- 视图和表有什么区别？
