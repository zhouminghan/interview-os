---
id: SYS-LLM-AGENT
title: LLM Agent 与 Function Calling
domain: llm
topic: [agent, function-calling, react]
difficulty: 3
---

## 一句话

模型通过 Function Calling 输出结构化工具调用，应用执行工具后把结果回传，循环到生成最终答案。

```diagram
type: flow
title: Agent 闭环
direction: LR
nodes:
  - id: user
    label: 用户
    color: blue
  - id: model
    label: 模型决策
    note: 判断是否调工具
  - id: tool
    label: 执行工具
  - id: ans
    label: 最终回答
    color: green
edges:
  - from: user
    to: model
  - from: model
    to: tool
    label: tool_call
  - from: tool
    to: model
    label: 结果回传
  - from: model
    to: ans
```

## 架构与数据流

```diagram
type: seq
title: Function Calling 循环
actors:
  - id: app
    label: 应用
  - id: model
    label: 模型
  - id: tool
    label: 工具
messages:
  - from: app
    to: model
    label: messages + tools
  - from: model
    to: app
    label: tool_call(name, args)
  - from: app
    to: tool
    label: 执行
  - from: tool
    to: app
    label: 结果
  - from: app
    to: model
    label: 回填 role=tool
  - from: model
    to: app
    label: 最终回答
```

## 运行循环 SOP

ReAct 循环：推理出要做什么 → 调用工具行动 → 观察结果 → 再推理，直到能直接回答。

```diagram
type: flow
title: ReAct 循环
direction: TB
nodes:
  - id: think
    label: Thought 推理
    color: blue
  - id: act
    label: Action 调工具
  - id: obs
    label: Observation 观察结果
    color: green
edges:
  - from: think
    to: act
  - from: act
    to: obs
  - from: obs
    to: think
    label: 未解决
    dashed: true
```

## 回答思路

先讲 Function Calling 是什么（模型输出结构化 tool_call），再讲循环（执行 → 回填 role=tool → 再决策），最后讲 ReAct 范式：推理 + 行动 + 观察。

## 案例

「工具调用失败怎么处理」：把错误作为 tool 结果回传给模型，让它换参数重试或换工具；多轮循环要设上限防止死循环。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: 模型本身不能联网，怎么回答「今天天气」？
    hint: 谁能执行外部动作
    point: 模型输出结构化 tool_call，应用调用天气工具，把结果回传给模型再生成答案。
  - q: 工具结果怎么回到模型？
    hint: 消息角色
    point: 作为 role=tool 的消息追加进 messages，模型据此继续推理。
  - q: 怎么防止模型一直循环调用工具？
    hint: 循环边界
    point: 设最大轮数，超限强制退出或降级回答；每次把结果和错误回传，让模型收敛。
```
