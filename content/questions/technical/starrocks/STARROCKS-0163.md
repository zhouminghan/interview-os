---
id: STARROCKS-0163
type: technical
question: 如何评估 StarRocks 的导入性能？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看单位时间导入行数、吞吐和导入延迟。

# 参考回答

评估导入性能看每秒导入多少行、吞吐多少 MB、导入延迟多久，还要看是否产生小版本堆积。用真实数据压测最有意义。

# 追问

- 小版本堆积怎么发现？
