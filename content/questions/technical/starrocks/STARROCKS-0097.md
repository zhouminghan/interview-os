---
id: STARROCKS-0097
type: technical
question: StarRocks 查询超时如何排查？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看是数据量大还是倾斜，优化计划或调超时参数。

# 参考回答

查询超时先 EXPLAIN 看计划，是扫描量大、JOIN 慢还是倾斜；能优化就优化 SQL 和模型，实在是大查询就调大 query timeout 或走异步。

# 追问

- 超时参数调大有什么风险？
