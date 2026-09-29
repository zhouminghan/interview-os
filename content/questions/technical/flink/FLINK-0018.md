---
id: FLINK-0018
type: technical
question: Checkpoint 重启能精准回溯到某一秒吗
topic: [flink, checkpoint]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-23-tencent-kuaishou-zhenti
    company: 腾讯 / 快手
    position: 数据开发（一面真题）
    date: 2026-06-23
---

# 一句话

不能。Checkpoint 保存的是 barrier 对齐时的状态和位点，粒度是「事件位点」而非时间戳，只能回溯到最近一次成功的 Checkpoint 位点。

# 30 秒回答

Checkpoint 记录的是算子状态 + source 位点（如 Kafka offset），是 barrier 对齐那一刻的一致性快照，不是按秒存的。重启从最近成功 Checkpoint 恢复位点，无法指定回溯到某个秒。

# 1 分钟回答

- barrier 对齐：所有并行度算子处理到 barrier 才做快照
- 粒度：source 位点（offset/filename+position），不是时间戳
- 恢复：从最近成功 Checkpoint 的位点精准重放
- 想按时间回溯：要靠 savepoint 或业务侧记录时间 + 位点映射

# 追问

- Checkpoint 和 savepoint 有什么区别？
- 想按业务时间回溯怎么办？
