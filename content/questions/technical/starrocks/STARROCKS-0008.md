---
id: STARROCKS-0008
type: technical
question: 为什么做存算分离，有什么好处
topic: [starrocks, architecture]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-23-anker-data
    company: 安克创新
    position: 数据岗（一面）
    date: 2026-09-23
---

# 一句话

存算分离主要是为了弹性扩缩容和降本。

# 30 秒回答

计算按需伸缩应对负载波动，存储独立扩容，按量计费；多集群共享一份数据，资源隔离；成本更低、运维更灵活。

# 1 分钟回答

- 弹性：计算按需扩缩，应对峰谷
- 成本：计算存储独立优化、按量付费、冷热分层
- 共享：多集群共享一份数据，避免冗余
- 运维：存储独立扩容、备份恢复灵活

# 追问

- 存算分离的成本优势体现在哪？
- 什么场景存算分离更划算？
