---
id: STARROCKS-0159
type: technical
question: StarRocks 在 TPC-H 测试中的表现如何？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TPC-H 测复杂 join 和聚合，StarRocks 表现靠前。

# 参考回答

TPC-H 是标准分析基准，考复杂多表 join 和聚合，StarRocks 在这个场景表现不错，这也是它跟 ClickHouse 拉开差距的地方，因为 join 是它的强项。

# 追问

- TPC-H 主要考什么能力？
