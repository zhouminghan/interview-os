---
id: PROJECT-0143
type: project
question: 数据倾斜排查与治理的系统方法论是什么？（面试官深挖版）
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：定位→确认key→分场景治理→业务层面规避 | 四步系统化流程
> **来源**：美团-大数据开发-20260415

这个我有一套比较系统的流程，在美团面试时被面试官追问过。

**第一步定位**：看 Spark UI，进到慢的 Stage 看各 Task 的 Shuffle Read 数据量，某几个 Task 比其他大好几倍甚至几十倍，就是倾斜了。

**第二步确认倾斜 key**：用 `GROUP BY key ORDER BY count DESC LIMIT` 快速看数据分布，确认是哪些 key 集中。

**第三步分场景治理**：
- 大表 JOIN 小表 → 直接 MapJoin（广播小表），避免 Shuffle
- 大表 JOIN 大表，热点 key 集中 → 对倾斜 key 加盐打散，另一张表对应膨胀，JOIN 完去后缀聚合回来
- 参数层面 → 调大 `spark.sql.shuffle.partitions` 让分区更均匀
- 大任务 → 拆成多个小任务分段跑，降低单次失败重试成本

**第四步业务层面规避**：考虑是不是可以提前在 DWD 层就把热点数据单独处理，避免到 DWS 层才暴露倾斜。

面试官对这个话题格外感兴趣（追问了约 15 分钟），建议深入准备每一步的细节和实际案例。

---
