---
id: FLINK-0285
type: technical
question: 如何在FlinkSQL中实现滑动窗口Top-K分析？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

窗口内分组再排名取前 K。

# 参考回答

滑动窗口 Top-K 是窗口内按 key 聚合，再用排名函数取前 K。SQL 里窗口聚合加 row_number 过滤排名。

# 追问

- Top-K 用哪个排名函数？
