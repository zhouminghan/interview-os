---
id: FLINK-0575
type: technical
question: 广播流是怎么设计的？为什么用广播流？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-国际化数据开发-20250303 Q14、腾讯-数据工程-20260415（引申）

配置驱动的动态分流：MySQL 配置表作为广播流 → 日志主流通过 connect() 关联 → 按配置自动分发到不同 DWD Iceberg 表。

**为什么用广播流**：配置表小（几十行）日志流百亿级，没必要每条 lookup；配置变更只改数据库不重启任务；本地内存查询无性能开销。

---
