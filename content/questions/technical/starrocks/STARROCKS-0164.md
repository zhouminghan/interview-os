---
id: STARROCKS-0164
type: technical
question: StarRocks 在不同硬件配置下的性能差异如何？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CPU 核数、内存、SSD 都直接影响查询和导入性能。

# 参考回答

CPU 决定计算和并发，内存决定缓存和能跑多大的查询，SSD 决定扫描 IO。OLAP 场景一般内存和 SSD 影响最大，CPU 核数决定并行度。

# 追问

- OLAP 为什么最吃内存和磁盘？
