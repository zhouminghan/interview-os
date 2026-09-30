---
id: SPARK-0311
type: technical
question: 宽依赖和窄依赖的区别？具体算子？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：腾讯-数据工程-20260415 Q9/Q16、字节-国际化数据开发-20250303 Q16、字节跳动-交易与广告-20260415 Q19

窄依赖：父 RDD 一个分区最多被一个子 RDD 分区使用，不 Shuffle。算子：map、flatMap、filter、union。

宽依赖：父 RDD 一个分区被多个子 RDD 分区使用，需 Shuffle。算子：groupByKey、reduceByKey、sortByKey、join（大部分）、repartition。

join 特殊：两个 RDD 相同分区器且分区数一致时是窄依赖。

---
