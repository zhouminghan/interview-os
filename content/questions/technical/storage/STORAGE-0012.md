---
id: STORAGE-0012
type: technical
question: MPP 架构是什么，和 MapReduce 的区别
topic: [storage, mpp]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2025-03-24-jd-data-dev
    company: 京东
    position: 数据开发
    date: 2025-03-24
---

# 一句话

MPP 是常驻进程 + 数据本地化并行查询，低延迟；MapReduce 每次启动容器 + 磁盘 shuffle，适合离线批处理。

# 30 秒回答

MPP（Doris/ClickHouse/Greenplum）把数据分散到多节点，各节点独立计算再汇总，常驻进程、低延迟，适合交互式分析；MapReduce 每次启动、磁盘 shuffle、吞吐高但延迟高，适合离线 ETL。

# 1 分钟回答

- MPP：常驻、本地化、低延迟、桶效应（单节点慢拖整体）
- MapReduce：启动容器、磁盘 shuffle、吞吐高、延迟高
- 场景：MPP 做 Serving/交互查询，Spark 做大规模 ETL

# 追问

- MPP 的桶效应是什么？
- 为什么 MPP 不适合大规模 ETL？
