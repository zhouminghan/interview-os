---
id: FLINK-0591
type: technical
question: Flink 和 Spark Streaming 区别？（高频⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：真流vs微批 | 延迟级别 | 事件时间+watermark | 状态原生 | 容错粒度 | 反压机制
> **来源面经**：美团-数据开发实习一面-20260430 Q9

**核心区别一句话**：Flink 是**真流处理**，Spark Streaming 是**微批模拟流**。

| 维度 | Flink | Spark Streaming |
|---|---|---|
| **计算模型** | 来一条算一条，事件驱动 | 切成小批（如 1s）当批处理跑，本质还是 Spark 批引擎 |
| **延迟** | 毫秒级 | 秒级（受批次间隔限制） |
| **时间语义** | 原生支持事件时间 + watermark 处理乱序 | 早期只支持处理时间，Structured Streaming 才补上事件时间 |
| **状态管理** | 状态是一等公民，状态后端 + checkpoint 原生支持 | state 基于 RDD，状态大就是负担 |
| **容错** | checkpoint + barrier 对齐做精确一次，恢复回滚到最近 checkpoint | RDD 血缘 + WAL，恢复粒度粗 |
| **反压** | Credit-based 流控天然反压 | 反向调速（反馈机制） |
| **窗口** | 灵活（滚动/滑动/会话/全局） | 受批次粒度限制 |

**Structured Streaming 的补救**：Spark 后来出了 Structured Streaming + Continuous Processing 模式想做真流，但生态成熟度和功能完整度不如 Flink。

**结论**：**真正的实时数仓选 Flink，离线偏批的场景 Spark 更顺**，业界基本是这个共识。我们项目里实时就是 Flink，离线就是 Spark。

> 💡 **专家补充**：
> - **"真流 vs 微批"的差异不只是延迟，更是设计哲学**——Flink 把每条数据当一等公民，Spark 把批当一等公民流是特例。这导致两者在状态管理、时间语义、容错恢复上的设计思路完全不同
> - **Spark Streaming 已经在被 Spark 官方"软性弃用"**——Spark 3.x 之后官方推荐 Structured Streaming，但即便如此 Continuous Processing 仍标注 experimental。流计算这条赛道 Spark 没追上 Flink
> - **选型不是技术问题是生态问题**——如果团队已经全是 Spark，引入 Flink 学习成本很高；反过来如果团队 Flink 用熟了，Spark Streaming 完全没必要再碰。这就是为什么实时数仓基本是 Flink 一统天下

---
