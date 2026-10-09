---
id: SPARK-0094
type: technical
question: RDD的转换操作有哪些常见类型？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

map、filter、flatMap、join、groupByKey、reduceByKey 等。

# 参考回答

常见转换有 map 映射、filter 过滤、flatMap 展开、join 关联、groupByKey 分组、reduceByKey 分组聚合、distinct 去重。转换都是惰性的。

# 追问

- map 和 flatMap 的区别？
