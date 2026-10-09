---
id: WAREHOUSE-0143
type: technical
question: 请介绍一下你在数据仓库性能调优方面的经验。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调优围绕少读、少 shuffle、少倾斜、合理并行度。

# 参考回答

我的经验是先看执行计划和 Spark UI，找到最慢的 stage，再针对性调。常见手段：分区裁剪、列裁剪、谓词下推减少读；小表 broadcast 减少 shuffle；热点 key 加盐；调整并行度和内存。调完对比前后时长验证效果。

# 追问

- 并行度是不是越大越好？
- 谓词下推是什么？
