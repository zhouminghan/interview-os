---
id: STARROCKS-0224
type: technical
question: Doris 的导入方式有几种？怎么选？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：Stream Load=HTTP流式 | Broker Load=HDFS批量 | Routine Load=Kafka实时 | INSERT INTO=小数据 | Spark Load=超大批量

| 方式 | 适用场景 | 量级 | 特点 |
|---|---|---|---|
| **Stream Load** | 实时 / 准实时小批量 | 单次 ≤ 10GB | HTTP PUT，事务，外部触发 |
| **Broker Load** | HDFS / S3 批量导入 | TB 级 | 内部异步，长事务 |
| **Routine Load** | Kafka 实时同步 | 流式 | 内部常驻消费，自动 commit |
| **INSERT INTO** | 测试 / 小数据 | MB 级 | 简单但慢，**不要批量循环 INSERT** |
| **Spark Load** | 超大批量首次入库 | 100GB+ | 通过 Spark 完成 ETL 再导入 |

**实战选择**：
- 离线 T+1 全量 → Broker Load（HDFS → Doris）
- 实时同步 MySQL Binlog → Canal → Kafka → Routine Load
- 业务系统主动推数据 → Stream Load
- 历史一次性大批量 → Spark Load

---

## 📌 Doris 知识地图（短期补强清单）

按重要性排序：

1. ⭐⭐⭐ 三种数据模型（Aggregate / Unique / Duplicate）使用场景
2. ⭐⭐⭐ rollup vs 物化视图 vs 预聚合 区别
3. ⭐⭐⭐ 分区分桶设计 + 前缀索引
4. ⭐⭐⭐ EXPLAIN + Query Profile 实操
5. ⭐⭐⭐ Bitmap / HLL 用法
6. ⭐⭐ Colocate Join 配置和限制
7. ⭐⭐ Stream Load / Routine Load / Broker Load 实操
8. ⭐⭐ Merge-on-Write vs Merge-on-Read
9. ⭐⭐ Compaction 机制和 -235 错误
10. ⭐ FE / BE 角色和高可用
11. ⭐ 倒排索引（2.0+）
12. ⭐ AQE 类似的自适应能力对比 Spark

---

## 📚 推荐资料

- 官方文档（中文）：https://doris.apache.org/zh-CN/docs/
- 重点看：数据模型、rollup、物化视图、Colocate Join、Stream Load 章节
- 实操：本地起一个单机 Doris（Docker），跑通 Aggregate 模型 + rollup + Bitmap UV 这条链路

---

## 🚨 面试避雷清单

❌ 不要假装做过 Doris 生产项目
❌ 不要混淆 rollup 和物化视图（虽然 rollup 是物化视图的子集，但面试官想听差异）
❌ 不要忽略 Doris 不擅长大批量 UPDATE 这个特点
❌ 不要把 Doris 当 OLTP 用（高频随机读写不是它的主场）
✅ 用"我们用 THive，Doris 是了解层"开场，再用通用 OLAP 知识迁移作答
✅ 给出"如果迁到 Doris 怎么做"的合理设想
✅ 主动提"如果给我时间补一下我可以实操一遍"——展示学习能力
