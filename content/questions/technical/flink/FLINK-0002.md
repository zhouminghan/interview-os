---
id: FLINK-0002
type: technical
question: 某一 subtask 长期满载产生反压，如何排查；为什么反压阻塞 checkpoint barrier
topic: [flink, backpressure, checkpoint]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-jiukun-data-dev
    company: 九坤
    position: 数据开发（一面）
    date: 2026-09-21
---

# 一句话

反压是下游处理不过来、向上游传导；排查要定位慢算子，解决要加大并行度、优化算子或削峰。

# 30 秒回答

看 UI backpressure 和 subtask 负载定位慢算子，查 CPU/GC/外部 IO；解决靠加下游并行度、优化慢算子、异步 IO、批量写、减少倾斜。反压会让某 subtask 积压、barrier 无法流过，导致 checkpoint 对齐超时。

# 1 分钟回答

- 排查：定位慢算子，看 CPU、GC、外部 IO、热点 key
- 解决：加并行度、优化算子、异步 IO、批量写、控制 source 速率、处理倾斜
- barrier 阻塞：checkpoint barrier 要所有并行 subtask 对齐，反压导致积压，barrier 流不过去，checkpoint 超时/失败

# 追问

- 反压和背压是一个意思吗？
- 怎么判断是 source 慢还是 sink 慢？
- checkpoint 对齐超时怎么处理？
