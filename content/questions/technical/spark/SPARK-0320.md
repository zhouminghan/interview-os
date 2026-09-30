---
id: SPARK-0320
type: technical
question: Doris 与 ClickHouse 的区别？MPP 架构理解？（高频⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-国际化数据开发-20250303 Q13、字节跳动-交易与广告-20260415 Q6/Q21、京东JDY-一面-20260415 Q3/Q12

**MPP（大规模并行处理）架构**：数据分散到多个节点，每个节点独立计算自己的部分再汇总结果。MPP 和 MapReduce 最大区别在于 MPP 是常驻进程、数据本地化查询，不需要每次启动 Container，交互式分析延迟很低。但 MPP 也有短板——对大规模 ETL 和复杂 Shuffle 不如 Spark，某个节点慢会拖慢整体（木桶效应）。

**Doris**：MPP 架构，JOIN 能力强，MySQL 协议兼容，运维简单（FE+BE）。支持向量化执行引擎，批量处理数据减少虚函数调用开销。建模支持明细模型、聚合模型和 Unique 模型。

**ClickHouse**：单机性能极强，大宽表聚合极快，但 JOIN 差，运维复杂（依赖 ZooKeeper）。

多维分析/实时报表选 Doris，纯大宽表单表聚合选 ClickHouse。如果业务方需要高并发低延迟查询，引入 Doris 做 ADS Serving 层是合理方向。

> 💡 **专家补充**（大数据架构师视角，面试中视情况展开）
>
> - **OLAP 引擎选型的本质是"查询模式决定引擎"**：高并发短查询（看板刷数）选 MPP（Doris/StarRocks），复杂分析长查询选 Spark/Presto，单表大宽表聚合选 ClickHouse。没有万能引擎，很多公司同时部署 2~3 种
> - **MPP 的"木桶效应"是最大弱点**：所有节点都要等最慢的那个完成，一个节点磁盘 IO 高就拖累全局。所以 MPP 集群的节点配置必须均匀，不能混部。这一点和 Spark 的容错性（单 Task 慢可以推测执行）形成对比
> - **向量化执行引擎是 OLAP 领域的核心加速技术**：传统逐行处理改为批量处理（一次处理 1024 行），利用 CPU SIMD 指令集并行计算，减少虚函数调用开销，这是 Doris/ClickHouse 性能远超 Hive 的底层原因

---
