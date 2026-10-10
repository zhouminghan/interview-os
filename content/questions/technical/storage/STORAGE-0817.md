---
id: STORAGE-0817
type: technical
question: Doris 的存算架构是什么？存算一体和存算分离有什么区别？
topic: [storage, doris, architecture]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-10-10-bytedance-data-dev-3round
    company: 字节跳动
    position: 数据开发（秋招三面）
    date: 2026-10-10
---

# 一句话

Doris 有存算一体和存算分离两种，分离把数据放对象存储、计算按需扩缩。

# 参考回答

Doris 传统是存算一体，BE 节点既算又存，本地磁盘延迟低；新版本支持存算分离，计算节点无状态、数据放对象存储，计算按需扩缩容，存储成本更省。存算一体查询延迟低，存算分离弹性好、成本低，适合负载波动大的场景。

# 追问

- 存算分离和存算一体怎么选？
- 存算分离的查询延迟会变高吗？
