---
id: STARROCKS-0012
type: technical
question: Flink 写入 StarRocks 慢，怎么排查和优化
topic: [starrocks, flink, sink]
difficulty: 3
frequency: low
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-30-fliggy-data-dev
    company: 飞猪
    position: 数据开发 / 大数据（4 轮）
    date: 2026-06-30
---

# 一句话

排查写入慢从 Flink 侧（并行度/反压）和 StarRocks 侧（分桶/表模型/Compaction/导入方式）两边看。

# 30 秒回答

Flink 侧看并行度、反压、批量大小、开启两阶段提交；StarRocks 侧看分桶是否均匀、是否主键模型频繁更新、Compaction 压力、Stream Load 批量参数。对症：加大 batch、调并行度、减 Compaction、换明细模型。

# 1 分钟回答

- Flink 侧：sink 并行度、batch size、反压、两阶段提交开销
- StarRocks 侧：分桶是否倾斜、主键模型更新放大、Compaction 频繁、BE 负载
- 优化：调大 batch、控制写入频率、分桶打散、必要时换明细模型
- 定位：看 Flink 反压 + StarRocks 监控（导入吞吐、Compaction）

# 追问

- 主键模型写入为什么比明细模型慢？
- 怎么判断是 Flink 慢还是 StarRocks 慢？
