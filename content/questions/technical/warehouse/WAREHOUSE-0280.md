---
id: WAREHOUSE-0280
type: technical
question: 如何实现 SCD Type 2？
difficulty: 0
topic: []
source_type: knowledge
---

SCD Type 2 通常存储：
- 代理键
- 自然键/业务键
- 有效开始和结束时间戳（或 end_date）
- 当前行标志（current_flag）

变更时，"关闭"上一行记录并插入新版本。必须定义如何检测变更以及如何处理迟到更新。
