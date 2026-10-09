---
id: STORAGE-0324
type: technical
question: HBase的异步操作实现原理是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

异步 API 回调不阻塞线程。

# 参考回答

异步操作用异步 API，提交请求后返回 Future，不阻塞线程，结果回调处理。适合批量高并发，提高吞吐。AsyncHBase 客户端支持。

# 追问

- 异步有什么好处？
