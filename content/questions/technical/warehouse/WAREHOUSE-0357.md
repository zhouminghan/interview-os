---
id: WAREHOUSE-0357
type: technical
question: 快速排序原理是什么？
difficulty: 0
topic: []
source_type: knowledge
---

**参考回答**：
> 分治：选基准元素，把数组划分成"小于基准"和"大于基准"两部分，递归排序子数组。平均每次划分均匀，时间复杂度 O(nlogn)；空间复杂度平均 O(logn)（递归栈）。因大部分工作在划分阶段完成、移动少，工程应用广。

**💡 点评**：通常会追问最好/最坏复杂度。
