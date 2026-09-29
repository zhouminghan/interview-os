---
interview_id: INTERVIEW-2026-09-27-google-ai-de
company: Google
business: AI 数据工程
position: ML Data Engineer（硕 3 年社招，L4）
date: 2026-09-27
round: Onsite（系统设计 + ML 基础 + 行为面）
---

# 面经记录（原始，图片 OCR）

> 数据工程师勇哥整理，硕 3 年数据开发面 Google AI 方向数据工程师（ML Data Engineer）。核心：训练/RAG 样本管线、特征存储、非结构化数据处理、数据质量与漂移监控。技术栈 GCP：BigQuery、Dataflow、Pub/Sub、Vertex AI。

## C 轮：AI/ML 数据系统设计（权重最高）

题目：Design end-to-end data pipeline for RAG system（海量网页文档 → 清洗分块 → embedding → 向量库 + 评估数据集），持续追加约束：

1. 先问哪些澄清问题：数据规模、SLA 新鲜度、吞吐、容错、消费方、成本约束
2. 原始网页脏数据、重复、低质量垃圾页怎么清洗去重
3. 文档分块策略，不同分块方式怎么影响 RAG 召回
4. Embedding 生成离线批量还是实时，怎么扩容
5. 向量库选型理由、读写权衡、向量数据更新方案
6. 文档/embedding 分布漂移怎么监控
7. 管线失败怎么处理：重试、幂等、断点续跑
8. GCP 上哪些环节资源开销最大，如何降本
9. 文档含隐私信息怎么做脱敏

## D 轮：ML 基础 + 概率统计 + 数据偏差

1. 什么是 selection bias 采样偏差，举训练集采样偏差例子和修复方式
2. Data Drift 和 Concept Drift 区别，分别如何监控
3. 概率题：二项分布、置信区间、样本量估算
4. 训练集大量重复样本会带来什么影响，怎么检测
5. 线上模型效果下滑，怎么区分是模型问题还是输入数据问题

## E 轮：Googleyness 行为面

1. 和算法/研究团队发生重大分歧的项目，怎么处理，最终结果
2. 线上管线故障完整经过、你的操作、复盘
3. 有没有坚持的技术方案事后证明错了，如何调整
4. 需求模糊、文档缺失，怎么拆解推进
5. 怎么帮助团队其他同事成长
6. 为什么选谷歌、为什么 AI 数据方向、长期规划

> 备注：来源小红书 @数据工程师勇哥。核心考点：RAG 数据管线设计、Data/Concept Drift、特征对齐、Apache Beam/Feast。翻车点：跳过需求澄清直接堆组件。
