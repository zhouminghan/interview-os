---
id: SPARK-0333
type: technical
question: Spark UI 排查问题的实操方法？重点看什么？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：Stage耗时分布 | Task数据量偏差 | GC时间占比 | SQL页面JOIN策略 | 实操经验
> **来源面经**：滴滴金融-数仓社招-20260422 一面Q14、美团-大数据开发-20260415 Q6、腾讯-数据工程-20260415 Q14

Spark UI 排查分四步看：

**第一看 Stage 页面**：找耗时最长的 Stage。Stage 耗时占了整个 Job 的大头，说明瓶颈在这个 Stage。

**第二看 Task 详情**：进到慢 Stage 里看各 Task 的执行时间和 Shuffle Read/Write 数据量。如果个别 Task 的 Shuffle Read 明显高于其他（比如其他几百 MB，它有几十 GB），就是数据倾斜。如果所有 Task 都慢，可能是数据量整体大或资源不足。

**第三看 GC 时间**：Task 的 GC 时间占比高（比如超过 20%），说明 Executor 内存不够。要么调大内存，要么减少单个 Task 处理的数据量（增加 partition 数）。

**第四看 SQL 页面**：如果是 Spark SQL 任务，SQL 页面可以看物理执行计划。重点确认 JOIN 策略——是 BroadcastHashJoin（小表广播，无 Shuffle）还是 SortMergeJoin（两边都 Shuffle）。该走广播的走了 Shuffle，是很多慢任务的根因。

> 💡 **专家补充**（大数据架构师视角，面试中视情况展开）
>
> - **Spark UI 是大数据开发的"听诊器"**：不会看 Spark UI 等于盲调优，先诊断再治疗是铁律
> - **最常见的三种定位结论**：倾斜（Task 数据量不均）、内存不足（GC 时间高）、执行计划不优（该广播没广播）——覆盖了 80% 的慢任务原因
> - **面试中讲 Spark UI 一定要结合实操案例**：不要只说"可以看 Task 数据量"，要说"之前排查一个宽表倾斜，从 Stage 页面定位到 Shuffle Stage，进去看发现热门频道 key 数据量是其他的上百倍"

---
