---
id: WAREHOUSE-0266
type: technical
question: HashMap 的 put 过程
difficulty: 0
topic: []
source_type: knowledge
---

**掌握程度**：⬜

**答案要点**：
- 计算 hash → 定位桶 → 空则插入 / 冲突则链表尾插
- 链表长度 ≥ 8 + 数组 ≥ 64 → 树化红黑树
- size > 容量 × 0.75 → 2 倍扩容

> 📖 来源：字节国际化数开一面

---

## 数据治理 & 质量

> 待补充

---

> 💡 新的面经题会持续归入这里，按主题分类。
