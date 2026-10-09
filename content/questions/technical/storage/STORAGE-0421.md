---
id: STORAGE-0421
type: technical
question: 在生产环境中如何进行HBase的性能诊断？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看指标、日志、线程定位瓶颈。

# 参考回答

性能诊断看读写延迟、GC、IO、Region 分布、线程。结合日志和线程栈定位慢点。是热点、缓存、还是资源问题，逐个排除。

# 追问

- 诊断从哪开始？
