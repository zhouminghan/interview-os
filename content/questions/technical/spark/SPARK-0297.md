---
id: SPARK-0297
type: technical
question: Spark 应用是否需要安装在 YARN 所有节点？为什么？
difficulty: 0
topic: []
source_type: knowledge
---

# 回答思路

1. 开口先把「安装 Spark 服务」和「让容器拿到 Spark 依赖」分开：YARN 负责调度容器，Spark 是按应用提交的。
2. 接着讲提交链路：ResourceManager 为应用启动 ApplicationMaster，再由分配到的 NodeManager 启动 executor。
3. 然后补依赖分发：Spark jars 和业务依赖可以放在 HDFS 上，或通过提交参数交给 YARN 本地化。
4. 最后说清边界：提交机需要 Spark 客户端和 YARN 配置，集群节点需要 NodeManager 和 Java 运行环境。

# 一句话

YARN 模式下不需要把 Spark 装到所有节点，只需让提交机能够提交应用，并让 YARN 容器获得 Spark 与应用依赖。

# 30 秒回答

我会先说不需要把 Spark 当成集群服务逐台安装。YARN 已经负责资源调度，提交应用后只有拿到容器的节点才会运行 executor。真正要解决的是依赖分发，所以通常把 Spark jars 放到 HDFS，或者在提交时随应用上传，NodeManager 启动容器时再本地化这些文件。

# 1 分钟回答

第一，讲清楚职责：YARN 的 ResourceManager 和 NodeManager 管理容器，Spark 的 Driver 负责解析作业和调度 task，executor 只运行在被分配到的容器中。第二，讲一次提交过程：client 模式下 Driver 在提交机，cluster 模式下 Driver 在 ApplicationMaster 里；无论哪种模式，Spark 运行时都是由容器按需加载，而不是要求每个节点预装。第三，补落地条件和边界：提交机要有 Spark 与 YARN 配置，集群节点要有 NodeManager 和兼容的 Java；生产里常用 `spark.yarn.archive` 指向 HDFS 归档，再用 `--jars` 分发业务依赖，配置缺失时仍会报类找不到。

# 追问

- 哪些节点会真正运行 Spark？回答要点：executor 只在 YARN 分配的 NodeManager 容器中运行；Driver 位于提交机或 ApplicationMaster，取决于部署模式，并非所有节点都启动进程。
- 既然不逐台安装，jar 从哪里来？回答要点：Spark jars 可由 HDFS 归档或提交目录提供，业务依赖用 `--jars`、`--files` 等参数分发，NodeManager 会在容器启动前本地化。
- 集群节点仍需预置什么？回答要点：NodeManager、兼容的 Java 和基础 Hadoop 运行环境；Spark 版本可作为应用依赖分发，不需要作为常驻服务安装。
