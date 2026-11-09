---
id: SPARK-0106
type: technical
question: DataFrame的join操作有哪些类型？
topic:
- spark
difficulty: 1
frequency: low
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-28-bytedance-fandouyin-liangjing
    company: 字节跳动
    position: 数据开发（泛抖音，校招一面凉经）
    date: 2026-09-28
---

> **来源面经**：字节-泛抖音数开一面-20260928 Q15

# 一句话

内连接、外连接、半连接、交叉连接等。

# 参考回答

join 类型有 inner、left、right、full outer、left_semi、left_anti、cross。cross 是笛卡尔积要小心。跟 SQL 的 join 类型对应。

# 追问

- left_semi 和 inner 的区别？
