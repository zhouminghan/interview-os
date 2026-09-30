---
id: LAKEHOUSE-0008
type: technical
question: 一、隐藏分区机制（Hidden Partitioning）
difficulty: 0
topic: []
source_type: knowledge
---

Iceberg 与 Hive 最大的不同之一是采用**隐藏分区（Hidden Partitioning）** 机制：

- **Hive**：分区是显式的物理列，需要用户在写入和查询时都手动指定分区列。
- **Iceberg**：分区是通过**分区转换函数（Partition Transform）** 从源数据列自动派生的逻辑分区，用户查询时**无需感知分区的存在**。

### 支持的分区转换函数

| 转换函数 | 说明 | 源列类型 | 示例 |
|---------|------|---------|------|
| `identity(col)` | 原值分区 | 任意类型 | `identity(country)` → `"CN"` |
| `year(ts)` | 按年分区 | timestamp / date | `year(event_time)` → `2025` |
| `month(ts)` | 按月分区 | timestamp / date | `month(event_time)` → `2025-03` |
| `day(ts)` | 按天分区 | timestamp / date | `day(event_time)` → `2025-03-24` |
| `hour(ts)` | 按小时分区 | timestamp | `hour(event_time)` → `2025-03-24-10` |
| `bucket(N, col)` | 哈希分桶 | 任意类型 | `bucket(16, user_id)` → `0~15` |
| `truncate(W, col)` | 截断分区 | string / int / long | `truncate(3, city)` → `"Bei"` |

---
