---
interview_id: INTERVIEW-2026-06-23-tencent-kuaishou-zhenti
company: 腾讯 / 快手
business: 数据开发
position: 数据开发（一面真题）
date: 2026-06-23
round: 一面
---

# 面经记录（原始）

## 腾讯数据开发一面

1. 线上任务慢的完整排查流程（定位 → 分析 → 解决）
2. 广播 vs Shuffle 区别（Shuffle 涉及磁盘 IO + 网络传输 + 排序）
3. 小文件对 Spark 的影响环节（IO 调度/任务数膨胀）
4. Hive 二级分区 Spark 写入问题
5. SQL 在 Spark 内部的完整运行流程
6. 核心业务 SQL 的优化维度 + 代码性能改写
7. 滑动窗口计算量预估（100 万条/分钟，每 5 分钟统计过去 1 小时 → 窗口重叠 12 倍）
8. Checkpoint 重启能否精准回溯到某一秒（barrier 对齐位点，非时间戳）

## 腾讯软件开发-数据开发一面

9. MySQL 事务与隔离级别、Java 多线程、线程安全集合、线程生命周期、Zookeeper 选举
10. Stage 划分规则（宽依赖为界）、AQE 原理、SQL 优化器（Catalyst → 物理计划 → 代码生成）
11. count(distinct) 精度妥协优化（approx_count_distinct / HyperLogLog）
12. 加 CPU/内存不一定提速（瓶颈可能在 Shuffle/数据倾斜/GC）
13. 手撕算法：栈实现队列 + 连续性 SQL

## 快手数据开发实习一面

14. Skill 文档能否替代引擎全工作流（编排/分析/执行/质检/总结）
15. Vibe Coding IDE Agent vs 自研 Agent 的本质区别

> 备注：涤生大数据整理的三场 2026 大厂校招数开一面真题，腾讯重底层原理，快手重 AI 工具落地。
