---
interview_id: INTERVIEW-2026-06-26-bytedance-ai-data
company: 字节跳动
business: AI 数据开发
position: AI 数据工程师（三轮技术 + HR）
date: 2026-06-26
round: 多轮
---

# 面经记录（原始）

1. 自我介绍 + 最匹配的项目
2. 项目深挖：重构数据管道提升 50% 效率，瓶颈在哪，CPU 密集还是 IO 密集；构建训练数据集怎么做数据清洗，标注不一致怎么处理
3. 手撕：写一个 LRU 缓存，O(1)，实现 get 和 put
4. PB 级推荐模型训练数据预处理服务（高吞吐、复杂负采样、分布一致性）
5. RAG 解决大模型什么问题，向量召回和 BM25 适合什么场景，为什么混合
6. 字节做 AI 应用最大瓶颈是模型能力还是数据质量
7. 线上事故：第三方数据源 Schema 变更导致解析任务全挂，怎么处理
8. 手撕：二叉树最短路径
9. LoRA 微调原理、Self-Attention 的 QKV 公式推导
10. ReAct、Function Calling、MCP 协议的区别
