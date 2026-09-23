---
interview_id: INTERVIEW-2026-09-09-bytedance-data-dev
company: 字节跳动
business: 数据开发
position: 数据开发（秋招）
date: 2026-09-09
round: 复活赛
---

# 面经记录（原始）

> 热乎的复活赛凉经，核心是四个问题 + 一个手撕链表。

## 原文

- Spark 怎么执行任务
- HDFS 读写原理
- TCP 和 UDP 的区别
- LLM 怎么调用工具
- 手撕链表（追问细，没答上来）

## 面试题

### 自我介绍 / 实习经历

1. 请介绍你的实习与项目经历
2. 介绍部门，实习近况

### Spark

3. Application、Job、Stage 的区别
4. 什么是 spark-submit？
5. 怎么提交 Spark 任务？
6. spark-submit 提交任务，什么情况会分成多个 Job？
7. 什么情况不会拆分成多个 Job？

### HDFS

8. 介绍 HDFS 客户端读写服务的执行流程

### 存储引擎

9. 对存储引擎了解哪些？（MySQL / OLAP / ClickHouse / Doris）
10. InnoDB 怎么存储数据？

### TCP / UDP

11. TCP 和 UDP 的区别
12. TCP 拥塞控制了解吗？
13. 哪些协议基于 TCP？
14. UDP 属于哪一层？

### 手撕算法

15. 构建链表，并完成链表排序

### LLM / Agent / Tool Calling

16. 介绍大模型怎么调用工具（LLM Agent）
17. 云端接口 messages、tools 参数，框架如何控制工具调用？
18. 工具描述是框架封装，大模型本身如何识别、触发工具调用？

### 反问

19. 你有什么想问我的吗？

> 备注：秋招复活赛，字节数据开发。
