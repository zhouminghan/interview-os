---
id: FLINK-0294
type: technical
question: 解释FlinkSQL中的重启策略(Restart Strategy)及配置方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

重启策略决定任务失败后怎么重试。

# 参考回答

重启策略有固定延迟、失败率、无限重启、不重启几种。SQL 作业在配置里设，配合 checkpoint 才能恢复状态。失败率策略按时间窗口内失败次数限制重启。

# 追问

- 重启策略和 checkpoint 什么关系？
