---
id: STARROCKS-0007
type: technical
question: 存算分离和存算一体的区别
topic: [starrocks, architecture]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-23-anker-data
    company: 安克创新
    position: 数据岗（一面）
    date: 2026-09-23
---

# 一句话

一体是节点既存又算、本地磁盘；分离是计算和存储独立、共享存储。

# 30 秒回答

存算一体：BE 本地存储 + 计算，扩展要一起扩，弹性差、成本高。存算分离：计算节点独立、数据放共享存储，计算存储独立扩展，弹性好、成本低。

# 1 分钟回答

- 一体：本地磁盘、数据本地计算、扩展耦合、成本高
- 分离：CN 计算 + 对象存储，独立扩缩容、按需计费、多集群共享
- 代价：网络延迟、缓存/一致性复杂度
- 选择：看弹性需求和成本

# 追问

- 存算分离会变慢吗？
- 什么负载适合存算分离？
