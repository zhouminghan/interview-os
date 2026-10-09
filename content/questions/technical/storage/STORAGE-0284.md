---
id: STORAGE-0284
type: technical
question: HBase的MemStore刷新机制是怎样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MemStore 满了 flush 成 HFile。

# 参考回答

MemStore 达到阈值触发 flush，把内存数据刷成 HFile。触发条件有大小、RegionServer 全局内存、WAL 回滚。flush 是顺序写，减少随机 IO。

# 追问

- flush 频繁怎么办？
