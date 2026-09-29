---
id: ALGORITHM-0008
type: technical
question: 快速排序的实现思路和时空复杂度
topic: [algorithm, quicksort]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

选 pivot 分区，递归排序左右，平均 O(nlogn)、最坏 O(n²)、空间 O(logn)。

# 30 秒回答

选基准值，比它小的放左、大的放右，再递归排序两边；随机选 pivot 避免最坏情况。

# 追问

- 最坏情况什么时候出现？
- 怎么避免最坏情况？
