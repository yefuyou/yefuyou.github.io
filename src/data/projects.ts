import type { Locale } from "./site";

export const linkloomRef = "f9e8f73caa97c7aac0fc091cac8fa1f08c83d8ba";
export const realRaiseRef = "d25bb6b49e0827c5b72f13b3bfd400b228847778";
export const sourceUrl = (repo: string, ref: string, path: string) =>
  `https://github.com/yefuyou/${repo}/blob/${ref}/${path}`;

export const projects = [
  {
    "slug": "linkloom",
    "name": "LinkLoom",
    "number": "01",
    "category": "AGENT SYSTEM / LOCAL-FIRST",
    "github": "https://github.com/yefuyou/linkloom",
    "ref": "f9e8f73caa97c7aac0fc091cac8fa1f08c83d8ba",
    "image": "assets/linkloom-as-of.png",
    "imageWidth": 1485,
    "imageHeight": 1109,
    "secondaryImage": "assets/linkloom-decisions.png",
    "video": "https://github.com/yefuyou/linkloom/blob/f9e8f73caa97c7aac0fc091cac8fa1f08c83d8ba/docs/launch/assets/linkloom-walkthrough.mp4",
    "demo": null,
    "stack": [
      "Python",
      "Agent Runtime",
      "Context Engineering",
      "Evaluation"
    ],
    "en": {
      "headline": "Decisions change.\nYour team's answers should keep up.",
      "summary": "Track decisions across evolving meeting notes, with the current answer connected to its original evidence, effective date and review history.",
      "caption": "Demo shown with sample data.",
      "alt": "LinkLoom historical lookup showing Birchline valid on 7 October 2026, its effective dates and the exact supporting source passage."
    },
    "zh": {
      "headline": "决策在变，\n团队的答案也要跟得上。",
      "summary": "沿着不断更新的会议记录追踪决策，把当前答案与原始证据、生效日期和审查历史连接起来。",
      "caption": "演示使用示例数据。",
      "alt": "LinkLoom 历史查询：2026 年 10 月 7 日有效的 Birchline 决策、生效日期和支持结论的原文片段。"
    }
  },
  {
    "slug": "real-raise",
    "name": "Real Raise",
    "number": "02",
    "category": "AI PRODUCT / DETERMINISTIC CORE",
    "github": "https://github.com/yefuyou/real-raise",
    "ref": "d25bb6b49e0827c5b72f13b3bfd400b228847778",
    "image": "assets/real-raise.png",
    "imageWidth": 1213,
    "imageHeight": 989,
    "secondaryImage": null,
    "video": null,
    "demo": "https://plain-wind-ae46.yefuyou2333.workers.dev/",
    "stack": [
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "Replay"
    ],
    "en": {
      "headline": "A bigger salary.\nBut what actually stays?",
      "summary": "An income and living-cost tool for people working in China. Deterministic calculations find what a raise really leaves; AI explains the result without changing the numbers.",
      "focus": "Deterministic core · Source-aware data · Replay & graceful fallback",
      "caption": "Actual product capture · repository example salary inputs",
      "alt": "Real Raise salary comparison interface with itemized deductions and a sample monthly remainder change.",
      "status": "Independent project · public demo",
      "problem": "A salary increase can disappear into deductions, housing, and everyday costs. People need a clear comparison of what is left each month, not a macroeconomic dashboard or an AI-generated number.",
      "solution": "Compare two income and spending scenarios with local deterministic formulas, label public benchmarks and user inputs, and offer optional AI interpretation over the computed result and its sources.",
      "contributions": [
        [
          "A deterministic domain core",
          "TypeScript functions own salary deductions, living costs, remainder changes, and break-even income. AI interpretation has no authority to change core amounts."
        ],
        [
          "Data with explicit semantics",
          "Verified, derived, user-input, and forecast values are distinct. Missing city data falls back explicitly; housing uses the user’s actual expense."
        ],
        [
          "Delivery & runtime boundaries",
          "React UI and same-origin Cloudflare Worker with request validation, server-side secret isolation, rate and quota protections. Mock and stored replay paths keep the product explorable."
        ]
      ],
      "architecture": [
        "Income + expense inputs",
        "Local TypeScript calculations",
        "Result + labeled data sources",
        "Optional Worker / AI interpretation",
        "Mock / stored replay / live report",
        "Readable report + fallback"
      ],
      "decisions": [
        [
          "Let formulas own the money",
          "The calculator works without an AI provider. Interpretation receives calculation results and source information, rather than producing financial amounts."
        ],
        [
          "Treat missing data honestly",
          "No invented city values or interpolated facts. National fallbacks and observation periods remain explicit."
        ],
        [
          "Separate product states",
          "Environment, authentication, and report freshness are separate concerns. A provider failure should not take away the local calculation."
        ]
      ],
      "limits": "The public demo entry returned HTTP 200 on 27 Oct 2026. This does not verify every live AI or authentication path. Live personalized interpretation requires platform login and is subject to availability and quota. Repository documentation notes legacy backend configuration awaiting migration; this portfolio makes no production-hardening claim.",
      "evidence": [
        [
          "Product README",
          "README.md"
        ],
        [
          "Living-cost domain functions",
          "src/domain/livingCost.ts"
        ],
        [
          "Salary-slip domain functions",
          "src/domain/salarySlip.ts"
        ],
        [
          "Worker request boundary",
          "worker/core.mjs"
        ],
        [
          "Data dictionary",
          "docs/data/DATA_DICTIONARY.md"
        ],
        [
          "Product state machines",
          "docs/product/STATE_MACHINES.md"
        ]
      ]
    },
    "zh": {
      "headline": "涨薪之后，\n真正留下多少？",
      "summary": "面向中国职场人的收入与生活成本工具。用确定性公式计算涨薪真正带来的结余，AI 只解释结果，不改动数字。",
      "focus": "确定性计算 · 数据来源 · 回放与可读降级",
      "caption": "真实产品截图 · 仓库公开工资示例输入",
      "alt": "Real Raise 工资条对比界面，包含逐项扣缴和示例月结余变化。",
      "status": "独立项目 · 公开演示",
      "problem": "税前涨薪可能被扣缴、住房和日常支出消化。用户需要的是每月实际结余的清晰对比，而不是宏观大屏或由 AI 编造的金额。",
      "solution": "用本地确定性公式比较两期收入与支出，区分公开基准和个人输入，再让可选 AI 解释读取计算结果与来源。",
      "contributions": [
        [
          "确定性的领域核心",
          "用 TypeScript 函数负责工资扣缴、生活成本、结余变化和收支平衡收入。AI 解释无权修改核心金额。"
        ],
        [
          "明确的数据语义",
          "区分已核验、派生、用户输入与预测数据。城市数据缺失时显式回退，住房以用户实际支出为准。"
        ],
        [
          "产品交付与运行边界",
          "React 界面与同源 Cloudflare Worker，包含请求校验、服务端 Secret 隔离、限流与额度保护。Mock 与存档回放提供可探索路径。"
        ]
      ],
      "architecture": [
        "收入与支出输入",
        "本地 TypeScript 计算",
        "结果 + 已标记来源",
        "可选 Worker / AI 解释",
        "Mock / 存档回放 / 实时报告",
        "可读报告与降级"
      ],
      "decisions": [
        [
          "金额交给公式",
          "计算器无需 AI Provider 即可工作。解释层读取计算结果和来源，不负责生成核心金额。"
        ],
        [
          "如实呈现数据缺失",
          "不虚构城市值，不插值补齐事实。明确全国回退和数据观察期间。"
        ],
        [
          "分开管理产品状态",
          "环境、认证与报告新鲜度各有边界。Provider 失败不应阻断本地计算。"
        ]
      ],
      "limits": "公开演示入口于 2026-10-27 返回 HTTP 200，不代表已验证全部实时 AI 和认证链路。个性化 AI 解释需要平台登录，并受服务可用性和额度影响。仓库文档仍记有待迁移的历史后端配置，本页不声称已完成生产加固。",
      "evidence": [
        [
          "项目 README",
          "README.md"
        ],
        [
          "生活成本领域函数",
          "src/domain/livingCost.ts"
        ],
        [
          "工资条领域函数",
          "src/domain/salarySlip.ts"
        ],
        [
          "Worker 请求边界",
          "worker/core.mjs"
        ],
        [
          "数据字典",
          "docs/data/DATA_DICTIONARY.md"
        ],
        [
          "产品状态机",
          "docs/product/STATE_MACHINES.md"
        ]
      ]
    }
  }
] as const;

export type Project = (typeof projects)[number];
export const projectContent = (project: Project, locale: Locale) => project[locale];

export const validationByProject = {
  "real-raise": {
    "en": [
      {
        "title": "Calculation regressions",
        "text": "Domain tests check living-cost changes and the amount left over. Core money values are calculated before the optional explanation layer runs.",
        "path": "src/domain/livingCost.test.ts"
      },
      {
        "title": "Product and Worker checks",
        "text": "The project documents separate checks for calculation, replay, Worker boundaries, and deployment configuration. These remain project evidence rather than tests rerun by this portfolio.",
        "path": "README.md"
      }
    ],
    "zh": [
      {
        "title": "计算回归",
        "text": "领域测试检查生活成本变化和最终结余。核心金额在可选解释层运行之前就已计算完成。",
        "path": "src/domain/livingCost.test.ts"
      },
      {
        "title": "产品与 Worker 检查",
        "text": "项目分别记录计算、回放、Worker 边界及部署配置的检查命令。这些是项目证据，本次主页精修没有重新运行上游测试。",
        "path": "README.md"
      }
    ]
  }
} as const;
