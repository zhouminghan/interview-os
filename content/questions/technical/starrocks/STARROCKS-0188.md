---
id: STARROCKS-0188
type: technical
question: StarRocks 中的窗口函数性能如何优化？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少窗口分区大小，利用排序键避免全排序。

# 参考回答

窗口函数慢往往是分区太大或数据全排序。优化就是缩小 partition by 的范围、把窗口条件下推、利用排序键。必要时改成预聚合结果再做窗口。

# 追问

- 窗口函数为什么容易慢？
