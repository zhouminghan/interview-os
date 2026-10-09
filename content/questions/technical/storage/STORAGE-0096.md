---
id: STORAGE-0096
type: technical
question: Hive中的ORDER BY和SORT BY有什么区别？请详细说明它们的工作原理、使用场景和性能差异。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ORDER BY 全局排序，SORT BY 分区内排序。

# 参考回答

ORDER BY 全局排序，只用一个 reducer，数据大很慢；SORT BY 每个 reducer 内排序，快但整体无序。只要局部有序用 SORT BY，全局才用 ORDER BY。

# 追问

- 为什么 ORDER BY 慢？
