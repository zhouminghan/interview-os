---
id: PROJECT-0099
type: project
question: 没有项目经验怎么自救
topic: [project, self-project]
difficulty: 2
frequency: medium
source_type: knowledge
---

# 一句话

没项目就自己造：用公开数据集搭小数仓 + 本地搭 ETL Pipeline，面试讲清分层逻辑和建模思路。

# 要点

- 方法一：Kaggle 电商数据集（如 Brazilian E-Commerce），清洗 + ODS→DWD→DWS 建模 + 核心指标
- 方法二：Docker 本地 MySQL→Python ETL→Hive→Airflow 调度，每天自动跑
- 面试话术：「用 Python 清洗，导入 Hive 按三层建模，产出复购率/销售趋势等 5 个指标」
- 面试官要的是你讲清思路，证明真理解，不是只会背概念
