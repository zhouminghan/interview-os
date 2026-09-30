---
id: WAREHOUSE-0330
type: technical
question: 这些是日志数据，还是存在 MySQL 里？
difficulty: 0
topic: []
source_type: knowledge
---

**参考回答**：
> 两类都有。业务库（MySQL）通过 CDC 或定时同步入仓；客户端/服务端日志经 Kafka 进实时链路，也落离线存储。两类数据最终在 DWD 层统一建模。

**💡 点评**：最好主动提"知道数据采集链路"。
