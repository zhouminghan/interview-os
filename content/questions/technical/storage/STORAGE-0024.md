---
id: STORAGE-0024
type: technical
question: HBase 面试题大纲（200 题覆盖范围）
topic: [storage, hbase, outline]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

HBase 200 题大纲，四块：基础概念、基础设计、性能优化、集群运维。

# 30 秒回答

基础：数据模型/Region/WAL/MemStore/HFile/LSM/行列存对比；设计：RowKey 设计/预分区/列族/TTL/Compaction/Split/Bloom Filter/读写路径；优化：RowKey 热点/BlockCache/MemStore Flush/GC/过滤器；运维：监控/备份/Replication/故障/权限/Phoenix 集成。

# 1 分钟回答

- 基础：表/行键/列族/时间戳/值、Region/RegionServer、HMaster、ZK 角色、WAL、MemStore/HFile、LSM 树、行存 vs 列存、CAP
- 设计：RowKey（散列/反转/加盐）、预分区、列族、TTL/版本、Compaction、Split、Bloom Filter、HFile、读写路径
- 优化：RowKey 防热点、批量读写、BlockCache、Flush、Compaction、Region 均衡、GC、扫描缓存、过滤器下推
- 运维：监控、Snapshot/Export/Replication、故障处理、滚动重启、ACL/Kerberos、Shell、Phoenix/Hive

# 追问

- HBase 的 LSM 树原理？
