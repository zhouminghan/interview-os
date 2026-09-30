---
id: WAREHOUSE-0291
type: technical
question: Star Schema 设计 E-commerce
difficulty: 0
topic: []
source_type: knowledge
---

- **Fact**：订单事实表（order_id, customer_id, product_id, date_id, amount, quantity）
- **Dim**：Customer / Product / Date / Store
- 追问历史地址 → SCD Type 2（start_date / end_date）
