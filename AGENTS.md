# AGENTS.md — Interview OS 操作手册

给 Codex / 其他 AI 助手接手本项目时使用。整体介绍见 README.md，内容模型见 docs/content-schema.md。

## 1. 项目是什么

Interview OS 是「个人面试知识库 + 训练系统」：

- 输入：真实面经、HR 问题、面试复盘、自己补充的问题
- 沉淀：结构化 Technical QA / Behavioral 场景 / Negotiation 场景 + 系统知识
- 训练：随机测试、表达训练、错题与掌握度（浏览器 LocalStorage）
- 目标：把「收集过的问题」转成「能稳定讲出来的能力」

## 2. 硬约束

- 零构建：不引入打包器 / npm 依赖；浏览器直接跑源码
- 完全本地化：不引外部 CDN / webfont / 远程资源，可离线打开
- 内容与展示分离：content/ 只写正文，页面外壳与渲染由 web/ 负责
- 原始面经与二次加工内容分离；任何内容都必须带 source type
- 禁止替用户虚构经历、虚构面经、把 AI 追问或 AI 回答当「面试官原话」
- 生成产物不要手改：web/assets/js/data.js 由脚本生成；要改内容改 content/

## 3. 目录结构

```
content/
  interviews/              原始面经（历史事实，只读）
    2026/company-*/interview-*.md
  questions/               标准化问题（二次加工）
    technical/             16 个技术域：spark | flink | warehouse | storage | starrocks | llm | sql | lakehouse | hdfs | platform | system | network | algorithm | statistics | ml
    behavioral/            project（项目深挖 / HR 软素质 / 面试宝典）
  knowledge/               系统知识（二次加工）

web/                       静态站点（本地可打开，GitHub Pages 可直接发布）
  index.html               总览
  questions.html           问题库
  interviews.html          面经
  practice.html            随机训练
  profile.html             能力画像
  assets/css/style.css     设计系统
  assets/js/app.js         页面外壳与交互（手改）
  assets/js/data.js        生成产物：content/ -> 前端数据（勿手改）

scripts/build.py           内容生成器：content/ -> web/assets/js/data.js
docs/                      架构、schema、agent 工作流
```

## 4. 网页与生成器

- 页面是稳定模板（手改），数据由 `scripts/build.py` 从 content/ 解析生成到 `web/assets/js/data.js`。
- 领域取「问题文件所在目录名」：`technical/warehouse/*.md -> warehouse`，`technical/sql/*.md -> sql`，`behavioral/project/*.md -> project`。
- 领域元数据（中文名、类型）在 `build.py` 的 `DOMAIN_META` 里维护；新增领域要同时改 `DOMAIN_META`。
- 训练状态（练习记录、掌握度、错题）只存浏览器 LocalStorage，不进 Git。
- 改完 content/ 必须重跑 `python3 scripts/build.py`，并把生成的 data.js 一并提交。

## 5. 三类内容（互不混用）

- Technical QA：知识正确性 + 表达 + 追问 + 项目结合
- Behavioral / HR：考察意图 + 回答目标 + 表达策略 + 风险点 + 个人事实
- Negotiation：筹码 + 谈判空间 + 可能回应

Schema 见 docs/content-schema.md。不要把 HR 开放题按「Q + 标准答案」处理，也不要把谈薪并入 HR 场景。

## 6. 原始面经与知识 QA 分离

- interviews/ 只放历史事实：Q、当时给的 A（可为空）、公司 / 岗位 / 日期 / 轮次
- questions/、knowledge/ 放二次加工内容
- 原始面经的提问要保留原文，不要缩写或改写（二次加工才另存到 questions/）
- 绝不用 AI 生成的内容覆盖或删除原始记录

## 7. Source Type（每条都要标）

```
knowledge          系统知识（八股 / 技术手册 / 题库）
ai_generated       AI 生成 / 补充的回答
```

## 8. Question ID

前缀 + 4 位序号，稳定、不重排、不重复使用：

```
FLINK-0001  SPARK-0001  SQL-0001  STORAGE-0001
STARROCKS-0001  WAREHOUSE-0001  LLM-0001  LAKEHOUSE-0001
ALGORITHM-0001  ML-0001  NETWORK-0001  PLATFORM-0001
SYSTEM-0001  HDFS-0001  STATISTICS-0001  PROJECT-0001
```

## 9. Agent 工作流（新增 / 更新面经时）

```
parse      解析原始面经（公司 / 岗位 / 日期 / 轮次 / Q / A）
extract    提取所有问题
classify   判断类型：technical | behavioral | negotiation | project
match      搜索已有问题：新问题 | 已存在 | 相似
generate   技术题生成标准 QA；行为题生成表达框架；谈判题提取筹码
validate   校验 schema、id、source type、去重
report     输出变更摘要
```

完成后输出：

```
本次新增 / 更新
新增：Flink 6, Spark 4, Hive 2, SQL 3, HR 5
更新已有：12
发现重复：4
文件修改：+23 ~17
校验：schema / id / source type / duplicate 全过
```

## 10. 可信度边界

允许：整理、解释、补充、纠错、生成标准回答、生成追问、建立关联。
禁止：伪造面经、伪造用户经历、把 AI 追问当真实追问、把 AI 回答当面试官原话、删除原始记录。

行为题尤其注意：只能「基于真实经历重新组织表达」，不能替用户编造经历。需要个人信息的题标 `needs_personal_input: true`，只搭框架，不填虚构内容。

## 11. 掌握度

统一 0–5：`0 不会 / 1 看过 / 2 能理解 / 3 能回答 / 4 表达流畅 / 5 能经受追问`。

技术题再分维度：knowledge / expression / project / follow_up。
行为题：content / expression / structure / risk。
谈判题：information / expression / leverage / negotiation。

## 12. 本地训练状态

训练记录、掌握度、错题、复习历史放浏览器 LocalStorage，不进 Git。仓库只放「知识」，浏览器只放「训练状态」。

## 13. 提交前检查

- Schema 合法，字段齐全
- Question ID 唯一且符合规范
- source type 齐全，无混用
- 无伪造经历、无覆盖原始面经
- `python3 scripts/build.py` 已重跑，data.js 与 content 一致并已提交
- 页面本地可打开，无控制台报错，无横向溢出

## 14. 八股 / 知识入库规则

- 非面经来源的标准面试题（八股），进 `content/questions/<domain>/`，`source_type: knowledge`，**不写 `sources` 字段**（不与具体面经绑定）。
- 文章 / 帖子的独立知识点，进 `content/knowledge/`（非 Q&A，轻量 Schema，另行维护）。
- 只有题面、没有答案的题库，先不入库，或标「待补答案」，避免污染训练题库。
- 入库前先查重：与已有题目语义重复的，只补充缺失维度，不重复建卡。
- 答案用「一句话 / 30 秒 / 1 分钟 / 追问」结构，聚焦面试表达，不是写长篇教程。
