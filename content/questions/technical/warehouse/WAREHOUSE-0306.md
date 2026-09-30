---
id: WAREHOUSE-0306
type: technical
question: Star Schema 设计 E-commerce 数据库
difficulty: 0
topic: [SHEIN]
source_type: knowledge
---

- Fact Table：订单事实表（order_id, customer_id, product_id, date_id, amount, quantity）
- Dim Tables：Customer、Product、Date、Store
- 追问：track customer historical address → SCD Type 2（加 start_date/end_date）
