---
id: SPARK-0280
type: technical
question: Transformer 和 Estimator 的区别？
difficulty: 0
topic: []
source_type: knowledge
---

- **Transformer**：是特征转换器和学习模型的抽象，实现 `transform()` 方法，将一个 DataFrame 转换为另一个 DataFrame，向 DataFrame 追加一个或多个列。在特征转换器中，输入是 DataFrame，输出是带有新映射列的新 DataFrame。
- **Estimator**：是用于在数据上拟合或训练的学习算法的抽象，实现 `fit()` 方法，`fit()` 方法接受 DataFrame 作为输入，并生成一个模型（Model）。

---
