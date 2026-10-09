---
id: SPARK-0050
type: technical
question: Spark支持哪些部署模式？各有什么特点？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

local、standalone、YARN、K8s 等模式。

# 参考回答

部署模式有 local 本地跑、standalone 自带集群、YARN 上跑、K8s 上跑，还有 Mesos。生产上最常用 YARN 或 K8s，能统一管资源。

# 追问

- YARN 和 K8s 部署怎么选？
