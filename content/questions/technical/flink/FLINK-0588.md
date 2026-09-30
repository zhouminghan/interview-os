---
id: FLINK-0588
type: technical
question: Checkpoint 慢怎么排查和优化？（高频⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：同步/异步阶段定位 | 反压传导 | 状态大小 | 增量 checkpoint | 后端选型 | 间隔参数
> **来源面经**：美团-数据开发实习一面-20260430 Q1

排查 checkpoint 慢先看 Flink Web UI 的 checkpoint 详情页，**分两段定位**：

**同步阶段慢**：通常是**反压**导致——barrier 在算子之间传不下去，下游算子卡了，同步阶段干等。先治反压（参考反压排查思路）。

**异步阶段慢**：一般是**状态太大** 或 **远端存储（HDFS/COS）写入慢**。

**优化思路**：
1. **先治反压**——反压不解决 checkpoint 一定慢
2. **开增量 checkpoint**——RocksDB 后端支持，每次只快照增量 SST 文件，状态大的任务必开
3. **状态后端选型**——状态特别大上 RocksDB，小状态用 HashMap
4. **checkpoint 间隔不要太密**——给系统喘息空间，调大 `min-pause-between-checkpoints`
5. **非对齐 checkpoint（unaligned）**——Flink 1.11+，反压严重时 barrier 不等待对齐直接快照，缓解反压下 checkpoint 卡死，代价是占用更多存储
6. **远端存储优化**——HDFS/COS 写入慢就换更快的存储或调大并发

**判断标准**：Flink Web UI 的 Sync Duration / Async Duration / End to End Duration 三个指标，看哪个超长定位哪个阶段。

> 💡 **专家补充**：
> - **同步阶段慢 90% 是反压问题**——反压治不好 checkpoint 永远做不快，这是因果关系不是相关关系
> - **非对齐 checkpoint 是 Flink 1.11 之后的"杀手锏"**——它打破了"barrier 必须对齐"的传统设计，专门解决反压场景下 checkpoint 卡死的问题，但要注意它需要更多 IO 存储未对齐的数据
> - **checkpoint 慢的隐性危害是"任务恢复时间长"**——最近一次成功 checkpoint 越远，故障恢复时回滚的数据越多，业务损失越大

---
