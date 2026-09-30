---
id: WAREHOUSE-0244
type: technical
question: OLAP 和 OLTP 的区别？典型系统和选型场景？（高频⭐⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：业务负载差异 | 行存 vs 列存 | 事务 vs 分析 | 系统选型对应表 | HTAP 趋势

**🎯 核心定义**：

- **OLTP**（Online Transaction Processing，联机事务处理）：面向**业务系统**的高并发、低延迟事务处理。每次操作影响少量行（通常 1~几条），强调 ACID。
- **OLAP**（Online Analytical Processing，联机分析处理）：面向**数据分析**的复杂查询和聚合统计。一次查询扫海量数据，强调吞吐和聚合能力。

**🎯 核心差异对比**：

| 维度 | OLTP | OLAP |
|------|------|------|
| **核心场景** | 业务系统：下单、支付、注册、转账 | 分析系统：报表、看板、用户画像、AB 实验 |
| **典型操作** | INSERT / UPDATE / DELETE，少量 SELECT 单行 | SELECT + GROUP BY + JOIN 大量数据 |
| **数据规模** | 单行、少量行（GB 级总量） | 海量数据扫描（TB ~ PB 级） |
| **响应时间** | 毫秒级（用户在等） | 秒~分钟级（分析师在等） |
| **并发量** | 高（万级 QPS） | 低~中（百级 QPS） |
| **存储格式** | **行存**（一行所有字段挨着，便于按主键读写） | **列存**（同列连续存储，便于压缩+裁剪+向量化计算） |
| **数据更新** | 频繁（CRUD 实时） | 批量灌入为主，更新少（一般是 INSERT-only / 拉链） |
| **事务要求** | 严格 ACID（脏读零容忍） | 弱事务，最终一致即可 |
| **索引设计** | B+ 树索引（点查快） | 列存自带 min/max + Bitmap，分区裁剪为主 |
| **数据冗余** | 范式化（3NF，避免冗余） | 反范式化（宽表、星型/雪花，冗余换查询效率） |
| **典型用户** | 业务系统 / 终端用户（间接） | 数据分析师 / BI 工程师 / 算法 |
| **设计目标** | 一致性 + 高并发短事务 | 吞吐 + 复杂查询 |

**🎯 典型系统对应表**：

| 类型 | 数据库 / 引擎 | 备注 |
|------|--------------|------|
| **OLTP** | MySQL、PostgreSQL、Oracle、SQL Server、TiDB（HTAP 偏 OLTP） | 行存为主，强 ACID |
| **OLAP（MPP 数据仓库）** | Greenplum、ClickHouse、Doris、StarRocks、Vertica | 列存 + MPP 架构 |
| **OLAP（数据湖）** | Hive、Spark SQL、Presto/Trino、Impala | 计算存储分离，存 HDFS / S3 |
| **OLAP（云原生）** | Snowflake、BigQuery、Redshift、MaxCompute | 弹性伸缩，按用量计费 |
| **HTAP（混合）** | TiDB、OceanBase、SingleStore | 一套系统跑两种负载 |

**🎯 列存为什么适合 OLAP？三大优势**：

1. **压缩率高**：同列数据类型一致、值域接近，压缩算法（RLE / Bitmap / 字典编码）效果好，常见压缩比 5~10 倍
2. **列裁剪**：分析查询 `SELECT a, b FROM t WHERE c=1` 通常只用少数列，列存只读这几列文件，IO 节省 N 倍
3. **向量化计算**：同列数据连续 → SIMD 指令批量处理，CPU cache 友好，比行存按行处理快几倍

**🎯 选型场景的 3 道判断题**：

1. **业务系统订单库** → OLTP（MySQL / PostgreSQL）。每次只查/改 1 个订单，要 ACID
2. **运营看 7 日 GMV 趋势** → OLAP（Doris / ClickHouse）。扫几亿订单做聚合
3. **既要业务实时，又要随时分析** → HTAP（TiDB / OceanBase）或 **OLTP + 实时同步到 OLAP**（CDC + Doris/StarRocks）

> 💡 **专家补充**（大数据架构师视角）：
> - **OLTP 和 OLAP 不是非此即彼**——多数公司是"业务库（MySQL）+ 数仓（Hive/Doris）"双栈架构，业务库做事务，CDC 同步到数仓做分析。这是过去 20 年的经典模式
> - **HTAP 的本质是"读写分离 + 异构副本"**——TiDB 有 TiKV（行存，OLTP）+ TiFlash（列存，OLAP）双存储，写入同步给两边，查询路由到合适引擎。但 HTAP 不是银弹：极端场景下还是双栈更灵活
> - **"OLAP on 数据湖"是新潮流**——传统 MPP 数仓（Greenplum、Vertica）正在被 Iceberg/Hudi + Spark/Presto 这种"数据湖 + 计算引擎"组合替代。优势是存储计算分离，不用同时扩缩，云原生友好
> - **新一代实时 OLAP（Doris / StarRocks）正在吃 Hive 的午餐**——亚秒级查询、支持高并发点查（不只是聚合），让"实时数仓"门槛大幅降低。架构师面试问到 OLAP 选型一定要说出"为什么不再 all-in Hive"
> - **常见误区**："OLAP 不能更新"——错。Doris/StarRocks 都支持 UPDATE/DELETE（虽然性能不如 OLTP），Iceberg/Hudi/Delta 也支持 row-level update。只是设计上还是以"批量灌入 + 偶尔更新"为主
> - **回答模板（面试时按这个层次讲）**：
>   1. 一句话定义（事务 vs 分析）
>   2. 核心差异 3 点（数据规模、操作模式、存储格式）
>   3. 典型系统举例（MySQL vs Doris/Hive）
>   4. 当前架构演进趋势（HTAP / 数据湖 / 实时 OLAP）
>   ——这样讲既显基础扎实又显技术视野

---
