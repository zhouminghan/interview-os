---
id: SYSTEM-0002
type: technical
question: Python 处理 10G 以上大日志文件怎么不内存溢出
topic: [system, python, big-file]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

用流式/分块迭代读取，别一次 read() 全量进内存。

# 30 秒回答

用生成器逐行迭代、分块读、mmap 内存映射，或用 pandas chunksize、dask/polars 惰性处理，只保留必要列。

# 1 分钟回答

- 流式：逐行 for line in f，生成器
- 分块：read(chunk)、pandas chunksize
- 惰性：dask、polars、vaex
- mmap：内存映射大文件
- 技巧：外部排序、流式计数（Counter）

# 追问

- 分块和逐行有什么区别？
- dask 和 pandas 区别？
