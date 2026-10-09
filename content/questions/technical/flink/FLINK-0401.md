---
id: FLINK-0401
type: technical
question: 解释企业级FlinkSQL平台的架构设计及核心组件。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

平台层管作业、资源、元数据、监控。

# 参考回答

企业级平台包含作业管理、资源调度、元数据、监控告警、权限、多租户这些组件。核心是让 Flink 作业可管理、可观测、可运营。

# 追问

- 平台最重要的能力是什么？
