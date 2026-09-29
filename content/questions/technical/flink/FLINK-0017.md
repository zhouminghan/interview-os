---
id: FLINK-0017
type: technical
question: 为什么引入实时数仓，什么场景值得上实时
topic: [flink, realtime]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-11-bytedance-douyin-ecommerce
    company: 字节跳动
    position: 大数据开发（实习）
    date: 2026-05-11
---

# 一句话

引入实时是业务驱动不是技术驱动：只有「当天运营监控、实时干预」这类分钟级诉求才上实时，其他场景离线 T+1 更划算。

# 30 秒回答

核心指标需要当天看趋势、做实时干预，T+1 等不了，所以上实时。但实时成本高（集群常驻、状态、小文件），所以只在少数核心指标做分钟级，其余继续离线。

# 1 分钟回答

- 业务诉求：当天活动上线后想知道登录 UV 涨没涨，T+1 已经错过干预窗口
- 边界判断：真正秒级场景占比很小，多数「小时级」用离线小时调度就能满足，不必上 Flink
- 架构：Kafka + Flink + Iceberg，10 分钟一批刷新核心看板
- 反思：实时是工具不是目的，业务要分钟级才上，否则离线更省钱

# 追问

- 小时级诉求为什么可以不用 Flink？
- 实时和离线的成本差异主要在哪？
