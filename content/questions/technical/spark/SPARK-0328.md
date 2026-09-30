---
id: SPARK-0328
type: technical
question: HashMap 的 put 过程？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-国际化数据开发-20250303 Q9

JDK 1.8：hashCode() 高低 16 位异或（扰动函数）→ `(n-1) & hash` 定位桶 → 空桶直接插 → key 相同覆盖 → 链表尾插法（1.7 头插法）→ 链表长度≥8 且数组≥64 时树化红黑树 → size 超阈值（容量×0.75）2 倍扩容。

---
