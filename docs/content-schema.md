# 内容 Schema

三类内容分开建模，不要都叫 QA。

## Technical QA

```yaml
id: FLINK-0001
type: technical
question: Flink Checkpoint 是什么？
topic: [flink, checkpoint, fault-tolerance]
difficulty: 3
frequency: high

answer:
  short: ""
  thirty_seconds: ""
  one_minute: ""
  deep_dive: ""

knowledge:
  definition: ""
  principle: ""
  implementation: ""
  common_mistakes: ""

follow_ups:
  - Checkpoint 和 Savepoint 有什么区别？
  - Barrier 是什么？
  - Exactly Once 如何实现？

project:
  applicable: true
  example: ""

sources:
  - interview_id: ""
    company: ""
    date: ""

mastery:
  knowledge: 0
  expression: 0
  project: 0
  follow_up: 0

review:
  last_reviewed: ""
  wrong_count: 0
```

## Behavioral / HR

```yaml
id: HR-0001
type: behavioral
question: 为什么考虑离职？
category: career

intent: [motivation, stability, career_development]
answer_goal: []

personal_facts: []

answer:
  structure: ""
  version_30s: ""
  version_60s: ""

risks: []
follow_ups: []

expression:
  strengths: []
  weaknesses: []

sources:
  - interview_id: ""

practice:
  content_score: 0
  expression_score: 0
  structure_score: 0
  risk_score: 0
```

## Negotiation

```yaml
id: NEG-0001
type: negotiation
scenario: salary_expectation
question: 你的期望薪资是多少？

objective: [preserve_negotiation_space, avoid_revealing_floor]

personal_facts:
  current_salary: ""
  expected_salary: ""
  minimum_acceptable: ""
  other_processes: ""
  offers: ""

leverage: [experience, technical_skills, project_experience, market_information]

constraints: []
responses:
  first_response: ""
  counter_response: ""
  final_response: ""
possible_hr_responses: []
risks: []
```

## Source Type

```
interview_record   面经原话
ai_generated       AI 生成 / 补充
ai_supplement      AI 追加
user_note          用户笔记
knowledge          系统知识
```

## Question ID

前缀 + 4 位序号，稳定不重排：`FLINK-0001`、`SPARK-0001`、`HR-0001`、`NEG-0001`。
