---
id: FLINK-0333
type: technical
question: 如何监控和排查FlinkSQL作业的性能瓶颈？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看指标、执行计划、反压定位瓶颈。

# 参考回答

排查性能看吞吐、延迟、反压、CPU、状态大小这些指标，结合执行计划找瓶颈算子。是倾斜、状态大、还是外部调用慢，逐个排除。

# 追问

- 怎么区分瓶颈类型？
