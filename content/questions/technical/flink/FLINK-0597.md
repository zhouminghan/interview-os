---
id: FLINK-0597
type: technical
question: 实时数据倾斜怎么处理？Flink 场景下的解法
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-基础数据部5年数开三面-20260530 Q16

实时数据倾斜本质和离线一样——**某个 key 的数据量远大于其他 key**，导致单个并行实例处理不过来反压。但 Flink 解法略有不同。

**常见场景**：

- **keyBy 倾斜**：按 user_id keyBy 后，超活跃用户的事件全路由到同一个 subtask 反压
- **Source 端分区倾斜**：Kafka Topic 某个分区数据量是其他分区的几十倍，下游 source subtask 不均
- **业务高峰热点**：大促期间某类商品 ID 流量集中

**解法**：

**① 双层聚合（局部 + 全局）**——Flink 实时倾斜的标准解法：

```
Source → keyBy(原 key + 随机后缀) → 局部聚合（Window） 
       → keyBy(原 key) → 全局聚合（合并局部结果）
```

举例统计每个 user_id 的 PV：第一层 `keyBy(user_id + random(0~99))` 局部聚合打散到 100 个 subtask，第二层 `keyBy(user_id)` 把 100 份局部结果合成全局

**② 热点 key 单独处理**——实时识别 Top N 热点 key（HeavyHitters 算法或离线挖好），热点走单独的处理逻辑（更高并发或 broadcast），非热点走标准链路

**③ Source 分区均衡**——如果是 Kafka 分区倾斜，调整生产端分区策略（用 hash 而不是 round-robin），或下游接 rebalance 算子打散

**④ 调优参数**：
- `parallelism` 提升并行度
- `setMaxParallelism` 控制 keyGroup 上限
- 合理 watermark 策略，避免长时间等待倾斜数据

**⑤ 业务上的兜底**：极端热点 key（机器人、刷量）做风控前置过滤，不入流

---

> 💡 **专家补充**
>
> - **"双层聚合"是 Flink 处理倾斜的银弹**——和 Spark 加盐打散思路一致，但 Flink 实现更优雅，靠 keyBy 自然路由
> - **Source 端倾斜很少被讨论但很常见**——Kafka 分区数据量不均时，单纯调下游并行度没用，要从生产端 partition 策略入手
> - **大促前必须做"倾斜演练"**——线上倾斜往往是大促期间才暴露，提前用流量回放工具验证倾斜处理是否生效

---
