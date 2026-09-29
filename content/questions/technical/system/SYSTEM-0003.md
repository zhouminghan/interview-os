---
id: SYSTEM-0003
type: technical
question: HashMap 为什么引入红黑树，ConcurrentHashMap 分段锁和 CAS 的区别
topic: [system, java]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-12-netease-bigdata
    company: 网易（杭州）
    position: 大数据开发工程师
    date: 2026-06-12
---

# 一句话

JDK1.8 HashMap 链表过长转红黑树，把最坏 O(n) 降到 O(log n)；ConcurrentHashMap 用 CAS + 节点锁替代整段锁。

# 30 秒回答

HashMap 链表长度超过阈值（8）转红黑树，避免哈希冲突严重时查询退化为 O(n)。ConcurrentHashMap 1.7 分段锁（锁一段），1.8 改为 CAS 写 + synchronized 锁单个桶头节点，并发粒度更细。

# 1 分钟回答

- HashMap：链表 -> 红黑树（长度 >8），查询 O(n) -> O(log n)
- ConcurrentHashMap 1.7：Segment 分段锁
- 1.8：CAS 写桶头（无锁）、冲突时锁单节点，粒度更细、性能更好
- CAS：乐观、无锁、自旋；synchronized：重量级、阻塞

# 追问

- 为什么阈值是 8？
- CAS 的 ABA 问题？
