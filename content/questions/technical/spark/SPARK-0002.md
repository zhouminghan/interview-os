---
id: SPARK-0002
type: technical
question: 大表 left join 小表和大表 right join 小表，都能用 MapJoin 吗
topic: [spark, hive, mapjoin, join]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-14-bytedance-cn-transaction-ads
    company: 字节跳动
    position: 大数据开发（校招）
    date: 2026-09-14
---

# 一句话

都能。MapJoin 的本质是把小表广播到 map 端内存做哈希关联，与 outer join 保留哪侧无关，只要被广播的是小表即可。

# 30 秒回答

MapJoin 是把小表加载到内存哈希表，map 阶段直接关联、避免 shuffle。left join 右表是小表可以广播；right join 小表仍在右侧、同样可以广播，所以两种都能用 mapjoin。full outer join 不能。

# 1 分钟回答

- left join：大表（左）保留全部，小表（右）广播，可 mapjoin
- right join：大表（左）right join 小表（右），保留小表（右）全部，但小表仍在右侧，广播小表即可
- 本质：广播对象是「小表」，join 方向只决定保留哪侧、不匹配填 null
- 限制：full outer join 两侧都可能保留，不能只广播一侧，通常不走 mapjoin

# 追问

- full outer join 为什么不能 MapJoin？
- MapJoin 对表大小有什么限制？
- 大表 join 大表怎么办？
