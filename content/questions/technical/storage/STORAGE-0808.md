---
id: STORAGE-0808
type: technical
question: 如何减少 ISR 中的振荡（频繁变更）？
difficulty: 0
topic: []
source_type: knowledge
---

- 优化网络配置，确保稳定的 broker 间连接
- 调整 `replica.lag.time.max.ms` 参数
- 监控并适当扩展 CPU、内存、磁盘 I/O
- 为复制流量使用专用网络
