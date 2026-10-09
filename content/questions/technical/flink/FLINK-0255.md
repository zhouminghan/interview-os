---
id: FLINK-0255
type: technical
question: 解释SQL Client中的环境配置文件(Environment Files)。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 YAML 配环境，定义表和函数。

# 参考回答

环境配置文件是 YAML 格式，配置执行参数、Catalog、表、函数。SQL Client 启动时加载，省得每次手动建表。

# 追问

- 环境文件里配什么？
