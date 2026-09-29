---
interview_id: INTERVIEW-2026-06-12-netease-bigdata
company: 网易（杭州）
business: 大数据开发
position: 大数据开发工程师（三面）
date: 2026-06-12
round: 三面
---

# 面经记录（原始）

> 来源小红书 @数据工程师勇哥。Flink + Doris 是主线。

## 一面（技术细节）

1. 自我介绍（打断）：你做的那个实时数仓，数据延迟是多少？数据量多大？
2. 场景题：要实时统计亿级用户点击流的 UV，要求去重且精准，不能有误差，你怎么做？（追问：Redis 扛不住亿级 QPS 怎么办？Flink 状态后端怎么调优？）
3. 手撕 SQL：给一张用户登录表，求连续登录 3 天的用户
4. 手撕算法：手写单例模式（Double Check Lock），为什么加 Volatile？
5. 实时：Flink 的 Exactly-Once 怎么实现，Checkpoint 机制详细讲

## 二面（Leader）

1. 项目深挖：你做过最得意的项目是什么？如果现在重做，你会改进哪里？
2. 架构：把原来 ClickHouse 和 Hive 的任务迁移到 Doris，怎么设计？怎么保证数据一致性？Join 性能慢怎么办？（Bucket/Partition/Colocation Join/物化视图）
3. 智力题：10 亿个整数，内存只有 2G，怎么找出中位数？
4. Java 基础：HashMap 在 JDK1.8 为什么引入红黑树？ConcurrentHashMap 分段锁和 CAS 的区别？

## 三面（HRBP）

1. 抗压测试：网易加班多，项目上线压力大，你怎么看？
2. 稳定性：你有 5 年经验了，为什么离开上家公司？
3. 薪资：期望 30k+，公积金全额 12%，最低能接受多少？

> 备注：网易云音乐已把 Doris 作为统一引擎，必考分桶倾斜/写放大。
