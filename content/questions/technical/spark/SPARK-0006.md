---
id: SPARK-0006
type: technical
question: 什么是 spark-submit
topic: [spark, submit]
difficulty: 1
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-09-bytedance-data-dev
    company: 字节跳动
    position: 数据开发（秋招）
    date: 2026-09-09
---

# 一句话

spark-submit 是提交 Spark 应用到集群的命令行脚本，负责上传依赖、指定资源和参数、启动 driver。

# 30 秒回答

通过 spark-submit 指定主类、master、运行模式、executor 资源等，把 jar 和依赖提交到集群，启动 driver 后申请 executor 执行任务。

# 1 分钟回答

- 常用参数：--class 主类、--master 集群地址、--deploy-mode 部署模式、--executor-memory、--num-executors、--conf
- 作用：打包提交应用、传递参数、管理资源申请
- 与 spark-shell 区别：spark-shell 是交互式，spark-submit 提交编译好的应用

# 追问

- client 模式和 cluster 模式区别？
- --conf 都能配哪些参数？
