---
id: SPARK-0004
type: technical
question: 广播后的变量是存储在内存吗，与 MapJoin 有什么区别
topic: [spark, broadcast, mapjoin]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-14-bytedance-cn-transaction-ads
    company: 字节跳动
    position: 大数据开发（校招）
    date: 2026-09-14
---

# 一句话

广播变量默认放在 executor 内存中（可配置内存+磁盘），由 TorrentBroadcast 分块分发；MapJoin 则是把整张小表在 map 端做成内存哈希表。

# 30 秒回答

Spark 的 broadcast 变量分发到各 executor，默认以内存为主、必要时可溢写磁盘，各 task 反序列化使用。MapJoin 是 Hive 在 map 端一次性构建内存哈希表。二者实现不同，思想一致。

# 1 分钟回答

- broadcast：序列化后分块（TorrentBroadcast），存 executor 内存，可跨多个 action 复用，支持自定义广播变量
- MapJoin：Hive 把小表加载到 map 内存做哈希表，通常一次 join 使用
- 区别：存储/分发机制不同、是否可复用不同、参数控制不同
- 联系：都是「小表广播 + map 端关联」避免 shuffle

# 追问

- broadcast 变量什么时候会落盘？
- 广播变量需要手动 unpersist 吗？
- Spark Broadcast Join 内部用的是 broadcast 变量吗？
