---
id: FLINK-0361
type: technical
question: 解释FlinkSQL与PyFlink的集成方式及使用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

PyFlink 用 Python 写 Flink SQL 和 UDF。

# 参考回答

PyFlink 让 Python 用户能写 Flink SQL 和 UDF，适合数据分析师和算法团队。SQL 部分一样，UDF 用 Python 写，注意跨语言性能开销。

# 追问

- Python UDF 性能如何？
