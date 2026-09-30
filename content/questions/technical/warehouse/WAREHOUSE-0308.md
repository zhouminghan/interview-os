---
id: WAREHOUSE-0308
type: technical
question: 每天 10 点需要前一天交易 Top3 product，怎么设计 pipeline？
difficulty: 0
topic: [SHEIN]
source_type: knowledge
---

| 步骤 | 内容 |
|------|------|
| 1 | 凌晨 ETL 处理前一天订单数据 → DWD |
| 2 | 按 product_id 聚合 GMV/销量 → DWS |
| 3 | ROW_NUMBER 取 Top3 → ADS |
| 4 | 调度设为早上 9:30 前完成 |
| 5 | 输出到报表 / 推送通知 |

---

## 四、备考建议

1. **Spark Shuffle / OOM / 数据倾斜** — 三件套必能说清楚
2. **Hive 内外部表 + 数据倾斜优化** — 基础门槛
3. **数仓分层不能只背诵** — 准备一个自己项目的逐层设计 + 为什么
4. **Star Schema + SCD** — 北美岗高频，国内偶尔问
5. **Pipeline 设计题** — 考察工程思维，平时多看真实业务场景
