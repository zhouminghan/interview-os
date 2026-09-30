---
id: FLINK-0596
type: technical
question: Flink 状态后端选择 Memory / FS / RocksDB 区别？怎么选？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-基础数据部5年数开三面-20260530 Q15

三种状态后端的核心区别在**状态存哪里 + Checkpoint 持久化到哪里**：

| 状态后端 | 状态存储位置 | Checkpoint 位置 | 状态体积上限 | 性能 |
|---------|-------------|----------------|-------------|------|
| **MemoryStateBackend** | TM 堆内存 | JM 堆内存 | 几 MB（默认 5MB） | 最快 |
| **FsStateBackend** | TM 堆内存 | 远程文件系统（HDFS/S3） | TM 堆大小 | 快 |
| **RocksDBStateBackend** | TM 本地 RocksDB（堆外） | 远程文件系统 | 磁盘大小（几百 GB） | 较慢但稳定 |

**MemoryStateBackend**：状态和 Checkpoint 都在内存，**仅用于测试和 Demo**，生产严禁——JM 重启状态全丢

**FsStateBackend**：状态在 TM 堆内存（访问最快）+ Checkpoint 异步写远程，适合状态体积小（几 GB 内）+ 低延迟场景。缺点是状态受 TM 堆内存限制，太大会 OOM

**RocksDBStateBackend**（生产标配）：状态存 TM 本地嵌入式 RocksDB（基于磁盘 LSM 树），堆外内存不占 JVM 堆 + Checkpoint 支持**增量 Checkpoint**（只上传增量 SST 文件）。适合状态大（几十 GB ~ 几百 GB）/ 长窗口聚合 / 用户级别状态。缺点是访问比堆内慢一个量级，要序列化反序列化 + 读盘

**选型决策树**：
- 测试/Demo → MemoryStateBackend
- 状态 < 几 GB + 极低延迟 → FsStateBackend
- 状态 > 几 GB / 长窗口 / 用户级别状态 → RocksDB（绝大多数生产场景）

**Flink 1.13+ 演进**：MemoryStateBackend 已废弃，FsStateBackend 改名 HashMapStateBackend，新项目直接选 **HashMap（小状态）/ RocksDB（大状态）** 二选一。

---

> 💡 **专家补充**（大数据架构师视角）
>
> - **"99% 生产场景选 RocksDB"是行业共识**——状态体积是不可预测的，选 RocksDB 即使状态变大也不会 OOM，HashMap 状态超过 TM 堆内存就崩。除非你能严格保证状态恒定小，否则别赌
> - **增量 Checkpoint 是 RocksDB 的杀手锏**——大状态场景下全量 Checkpoint 会让 IO 打爆，RocksDB 增量 Checkpoint 只上传新生成的 SST 文件，几十 GB 状态也能秒级完成
> - **状态后端不是越快越好**——FsStateBackend 在小状态场景比 RocksDB 快，但 RocksDB 在大状态场景反而更稳定。选型按业务量级而非"性能榜单"

---
