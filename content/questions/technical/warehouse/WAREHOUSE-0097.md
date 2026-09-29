---
id: WAREHOUSE-0097
type: technical
question: 数仓定时调度怎么做，怎么保证第二天按时产出
topic: [warehouse, scheduling]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-07-25-kuaishou-commercial-warehouse
    company: 快手
    position: 数据开发（数仓）
    date: 2026-07-25
---

# 一句话

调度按 DAG 依赖触发，核心链路优先 + 凌晨错峰；按时产出靠关键路径倒排、熔断卡点、延迟告警和兜底重跑。

# 30 秒回答

调度：DAG 上游就绪才触发下游，核心链路优先级最高、凌晨先跑，非核心错峰。保证八点可用：关键路径倒排预留时间、核心表熔断（校验不过卡下游）、基线告警超时提醒、失败自动重试。

# 1 分钟回答

- 定时调度：DAG 依赖 + 优先级，核心凌晨 0 点开跑，非核心白天错峰
- SLA 保障：关键路径倒排、核心表熔断卡下游、基线告警、失败重试
- 多上游（5 张表）协同：上游设统一产出窗口 + 依赖检查，超时告警定位是哪张表拖后腿
- 目标：让「上游延迟」可定位，而不是等最终交付才发现

# 追问

- 核心链路怎么倒排时间？
- 上游延迟怎么快速定位是哪张表？
