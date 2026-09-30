---
id: SPARK-0387
type: technical
question: 数据倾斜处理策略
difficulty: 0
topic: []
source_type: knowledge
---

| 策略 | 适用场景 |
|------|---------|
| AQE 倾斜 Join | Join 场景（Spark 3.2+ 默认开启） |
| 广播小表 | 大表 Join 小表 |
| 加盐 Salting | 聚合或 Join，给倾斜 key 拼接随机后缀 |
| 两阶段聚合 | GROUP BY 倾斜，先局部再全局 |
| 过滤倾斜 key | 热点 key 单独处理再 UNION |
