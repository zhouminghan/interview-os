---
id: STORAGE-0296
type: technical
question: HBase的协处理器加载过程是怎样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

协处理器 jar 上传后按表加载。

# 参考回答

协处理器把 jar 上传到 HDFS，配置到表或全局，RegionServer 加载到类加载器。加载失败会影响表，所以要测试好再上。卸载要重启或动态配置。

# 追问

- 协处理器加载失败会怎样？
