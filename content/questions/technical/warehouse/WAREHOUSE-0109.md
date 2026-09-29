---
id: WAREHOUSE-0109
type: technical
question: 大数据概念兴衰史（麻烦型名词 vs 东西型名词）
topic: [warehouse, history]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

「大数据」是麻烦型名词（描述「数据太多处理不了」的痛点），当云、Spark、AI 从各方向吸收掉这个麻烦后，大词本身退潮。

# 30 秒回答

描述东西的词（数据库、编译器）寿命长；描述麻烦的词（大数据、Web 2.0）麻烦解决后即退潮。Hadoop 生态被 Redshift/Snowflake（云数仓）、Spark（替代 MR）、S3（存储成本）一组更便宜好用的服务分拆。

# 1 分钟回答

- 起源：1997 NASA 论文 "the problem of big data"，跟在 problem 后面
- 3V 是后来倒装的（Doug Laney 2001 本是 3D Data Management）
- Hadoop 三件套：HDFS + MapReduce + YARN，data locality（把代码搬到数据旁）
- Cloudera 案例：2014 估值 41 亿美元 → 2021 年 53 亿私有化，每股只涨 $1
- 对比 Databricks 2026 估值 1880 亿美元（云+湖仓+AI 逻辑）
- 判断框架：技术热词分「描述东西」和「描述麻烦」两类

# 追问

- 为什么说大数据「兑现了反而退潮」？
