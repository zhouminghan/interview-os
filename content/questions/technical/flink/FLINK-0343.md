---
id: FLINK-0343
type: technical
question: 解释如何进行FlinkSQL作业的离线调试和上线部署。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

本地小数据调试，savepoint 迁移上线。

# 参考回答

调试先在本地或测试环境用小数据跑，验证逻辑和结果。上线打 savepoint 迁移状态，灰度验证后全量。配好监控和告警再上生产。

# 追问

- 上线前要验证什么？
