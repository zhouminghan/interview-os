---
id: SPARK-0336
type: technical
question: ORC + Snappy 的组合是什么？为什么常用这个搭配？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：ORC 列式存储 | Stripe 级索引 | 谓词下推 | Snappy 快速压缩 | 读写性能平衡
> **来源**：字节-数开-20260422 Q8

**ORC（Optimized Row Columnar）——列式存储格式**：
- 按列存储数据，同一列的数据物理上连续存放，有利于压缩和向量化读取
- Stripe 级别维护 min/max/count/sum 等统计信息，支持谓词下推（Predicate Pushdown），查询时跳过不满足条件的 Stripe
- 自带多种编码：字典编码（Dictionary Encoding）、游程编码（Run-Length Encoding），对重复值多的列压缩效果极好
- 支持 ACID 事务（Hive 3.x+），是 Hive 的默认推荐格式

**Snappy——压缩算法**：
- 特点是**压缩/解压速度极快**，但压缩率比 Gzip/Zstd 低（通常 2-4 倍 vs Gzip 的 5-8 倍）
- 不支持分片（不可切分），但 ORC 本身按 Stripe 组织，Stripe 内压缩不影响并行读取
- CPU 开销低，适合对延迟敏感的 OLAP 查询场景

**为什么组合使用**：
| 维度 | ORC 贡献 | Snappy 贡献 |
|------|---------|-------------|
| 存储效率 | 列式编码压缩 | 进一步压缩 |
| 查询速度 | 谓词下推跳过无关数据 | 快速解压不拖慢读取 |
| I/O 开销 | 只读需要的列 | 减少磁盘读取量 |

这个组合在 Hive/Spark 生态中是**性能和存储的最优平衡点**，生产环境中几乎是标配。

> 💡 **专家补充**：如果面试官追问"什么时候不用 Snappy"——当存储成本是主要矛盾（如冷数据归档）时，用 Zstd 或 Gzip 替代 Snappy，牺牲解压速度换更高压缩率。

---
