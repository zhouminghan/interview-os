---
id: SPARK-0007
type: technical
question: 怎么提交 Spark 任务
topic: [spark, submit, workflow]
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

用 spark-submit 把编译好的 jar 连同资源和参数提交到集群，由 driver 申请 executor 执行。

# 30 秒回答

打包应用 -> spark-submit 指定主类、master、资源 -> driver 启动 -> 申请 executor -> 执行 action 触发 Job -> 完成后释放资源。

# 1 分钟回答

```text
spark-submit \
  --class com.example.Main \
  --master yarn \
  --deploy-mode cluster \
  --executor-memory 4g \
  --num-executors 10 \
  app.jar arg1 arg2
```

- 本地开发可用 spark-shell 交互式运行
- 生产常配合 Airflow / 调度平台 / 数据平台一键提交

# 追问

- master 可以填哪些值（local、yarn、k8s）？
- cluster 模式下 driver 跑在哪？
