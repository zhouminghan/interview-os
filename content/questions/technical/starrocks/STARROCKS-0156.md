---
id: STARROCKS-0156
type: technical
question: 如何进行 StarRocks 的性能测试？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用基准工具模拟真实负载，测 QPS、延迟、吞吐。

# 参考回答

性能测试用 TPC-H、TPC-DS 这类基准，或自己构造真实业务负载，测查询 QPS、延迟、导入吞吐。关键是负载要接近真实，不然测出来没参考意义。

# 追问

- 为什么不能用纯基准代替真实压测？
