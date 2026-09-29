---
id: SPARK-0034
type: technical
question: Spark SQL 数据倾斜怎么排查和解决
topic: [spark, skew]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

先定位热点 key，再用加盐、热点拆分或 AQE 处理。

# 30 秒回答

看 task 数据量/耗时找长尾，定位热点 key；group by 用两阶段加盐聚合，join 用热点拆分或加盐 join，开启 AQE skew join，过滤脏数据。

# 1 分钟回答

- 定位：UI task 分布、抽样统计 key
- group by：加盐两阶段聚合
- join：热点拆分、两阶段加盐 join
- 通用：AQE skew join、过滤 null/脏数据

# 追问

- 你实际遇到的倾斜场景？
- 加盐后怎么还原？
