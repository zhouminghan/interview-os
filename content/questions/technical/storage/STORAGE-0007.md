---
id: STORAGE-0007
type: technical
question: LSM-Tree 大概是什么
topic: [storage, lsm-tree]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

LSM-Tree 把写先落内存和 WAL，再批量刷成有序 SSTable，后台 compaction 合并，换写性能。

# 30 秒回答

写入先到内存 memtable 和 WAL，memtable 满了刷成有序的 SSTable；读要查 memtable 和多层 SSTable；后台 compaction 合并减少文件数。

# 1 分钟回答

- 写：内存 memtable + WAL（顺序写）
- flush：memtable 满刷成 SSTable
- 读：查 memtable + SSTable，可能用布隆过滤器
- compaction：合并 SSTable、去旧版本
- 特点：写放大、读放大，适合写多读少
- 代表：RocksDB、HBase、LevelDB

# 追问

- LSM-Tree 和 B+ 树区别？
- compaction 有哪些策略？
