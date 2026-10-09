---
id: FLINK-0436
type: technical
question: 什么是Kafka的拦截器机制？请详细说明如何实现和使用生产者拦截器和消费者拦截器。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

拦截器在收发消息前后做处理。

# 参考回答

Kafka 拦截器在消息发送前或消费前做拦截，比如加埋点、过滤、统计。实现 ProducerInterceptor 或 ConsumerInterceptor，配置到客户端。

# 追问

- 拦截器适合做什么？
