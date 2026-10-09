---
id: WAREHOUSE-0152
type: technical
question: 数据仓库中，ETL工具的主要功能是？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ETL 工具核心是抽取、转换、加载，外加调度和监控。

# 参考回答

主要功能就三块：从不同源抽数据、做清洗转换、加载到目标库，配套还有调度、增量识别、异常重试和监控。本质是把数据从原始状态流水线式地加工成可用状态。

# 追问

- ETL 工具的增量抽取怎么做？
- 为什么还需要调度能力？
