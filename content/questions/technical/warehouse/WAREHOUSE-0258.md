---
id: WAREHOUSE-0258
type: technical
question: Shuffle 过程
difficulty: 0
topic: []
source_type: knowledge
---

**掌握程度**：⬜

**答案要点**：
- MR Shuffle：环形缓冲区溢写 → 排序 → 合并 → Reduce 端拉取
- Spark Shuffle：Hash Shuffle → Sort-Based Shuffle 演进
- Shuffle 是最昂贵操作（磁盘 IO + 网络传输）

> 📖 来源：字节国际化数开一面

---
