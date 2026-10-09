---
id: STORAGE-0092
type: technical
question: Hive中的JOIN类型有哪些？请详细说明各种JOIN类型的特点、性能差异和适用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

内、左、右、全外、半、交叉连接。

# 参考回答

JOIN 类型有 inner、left、right、full outer、left semi、cross。left semi 相当于 in 子查询，cross 是笛卡尔积要小心。性能上小表 MapJoin 最快，大表 join 要 shuffle。

# 追问

- left semi 和 inner 区别？
