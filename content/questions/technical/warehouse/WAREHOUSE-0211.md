---
id: WAREHOUSE-0211
type: technical
question: 模型评测数据、标注数据、实验数据链路怎么设计？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：评测数据集管理 | 标注流水线 | A/B实验分流 | 实验效果归因 | 版本管理
> **来源**：字节-AI Agent数据开发-20260420 Q24

模型评测数据链路：核心是构建标准化评测数据集。从线上对话日志中按策略抽样（覆盖不同场景、不同难度），标注人员打标后形成 golden dataset。评测时模型输出和 golden dataset 对比计算指标（准确率、满意度等）。数据存储上建两张表——评测数据集表（question、expected_answer、tags）和评测结果表（model_version、question_id、model_output、score、judge）。

标注数据链路：标注平台产出的数据走标准化接入——标注结果导出 → 格式校验 → DWD 层清洗标准化 → DWS 层聚合统计（标注一致性、标注进度、标注质量分布）。标注数据要做版本管理，不同批次用 batch_id 区分。

实验数据链路：A/B 实验核心是做好分流和效果归因。实验平台负责用户分桶（控制组/实验组），每个请求打上 experiment_id 和 bucket_id。数据端把实验标签关联到所有相关行为数据上，按实验组做指标聚合对比。DWS 层建实验效果宽表，维度包含实验ID、实验组、指标名。

---
