---
id: WAREHOUSE-0360
type: technical
question: Hive 的 UDF、UDAF、UDTF 区别？开发分别继承什么？
difficulty: 0
topic: []
source_type: knowledge
---

**参考回答**：
> - UDF：一行进一行出（手机号脱敏、日期转换），继承 `UDF` / `GenericUDF`；
> - UDAF：多行进一行出（聚合：均值、中位数），继承 `UDAF` / `GenericUDAF`；
> - UDTF：一行进多行出（如 `explode`），继承 `GenericUDTF`。
> 最大区别在输入输出形态。

**💡 点评**：别只背定义，最好举实际业务例子。
