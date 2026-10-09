---
id: WAREHOUSE-0136
type: technical
question: 请解释缓慢变化维度的概念，并给出一个处理的例子。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

缓慢变化维是维度属性会随时间变，比如用户等级、会员状态。

# 参考回答

维度表里的属性不是一成不变的，像用户从普通会员升到 VIP，这就是缓慢变化维。处理方式常见三种：直接覆盖是 Type1，拉链表保留历史是 Type2，加一列存历史是 Type3。最常用是拉链表，用起止时间记录每次变化。

# 追问

- 拉链表怎么实现？
- Type1 和 Type2 的区别？
