export type Locale = "en" | "zh";

export const profile = {
  name: "yefuyou",
  github: "https://github.com/yefuyou",
  // Public job-search address explicitly provided by the user on 2026-10-28.
  email: "yefuyou2333@gmail.com" as string | null,
  linkedin: null as string | null,
  resume: null as string | null,
  fullName: null as string | null,
  evidenceDate: "2026-10-28",
};
export const publicName = profile.fullName || profile.name;

export const asset = (path: string) =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
export const route = (lang: Locale, path = "") =>
  asset((lang === "zh" ? "zh/" : "") + path);
export const localize = (lang: Locale, en: string, zh: string) =>
  lang === "en" ? en : zh;

export const copy = {
  "en": {
    "nav": ["Work", "Journey", "Open source", "Approach", "About"],
    "available": "Open to Agent Engineering & FDE opportunities",
    "position": "Agent Engineering / AI FDE",
    "heroLines": [
      "Software engineer.",
      "Focused on agents."
    ],
    "intro": "I build agent workflows and developer tools that can be inspected, tested, and improved.",
    "viewWork": "Explore LinkLoom",
    "workTitle": "Selected work.",
    "caseStudy": "Read case study",
    "source": "Source code",
    "linkloomSummary": "Extract topics, decisions and action items from meeting notes. Track changes across meetings, with source evidence for each conclusion and human confirmation before it takes effect.",
    "highlights": [
      [
        "Follow the same work.",
        "Connect related topics, decisions and action items across meetings as they change."
      ],
      [
        "Every conclusion has a source.",
        "Open the meeting note, date and passage behind each conclusion."
      ],
      [
        "Confirm before it takes effect.",
        "Review extracted items against their sources before confirming them as active records."
      ]
    ],
    "reviewTitle": "AI-assisted Code Review",
    "reviewHeadline": "From an AI response to a repeatable review.",
    "reviewSummary": "Bring AI review into a real PR workflow: split large diffs, retain context, aggregate risk and return feedback for human review.",
    "reviewSteps": [
      "PR diff",
      "Chunked review",
      "Risk identification",
      "Aggregation",
      "Human review"
    ],
    "reviewNotes": [
      "Files + changed lines",
      "Bounded context",
      "Severity + test advice",
      "Reconcile duplicates",
      "Verify before accepting"
    ],
    "reviewCaption": "Anonymized workflow illustration",
    "realSummary": "Compare take-home income and living costs with deterministic calculations. The optional AI layer explains the result without changing core amounts.",
    "realCaption": "Salary, deductions, and what is left each month. Example inputs.",
    "publicDemo": "Try the demo",
    "approachTitle": "Make the invisible",
    "approachItalic": "inspectable.",
    "failureTitle": "Restoring a file must not restore an old approval.",
    "failureBody": "After a decision was reviewed against new evidence, returning the old source text could make its earlier approval look active again.",
    "failureFix": "I kept completed revalidation targets stale and tied the replacement to a separate approval receipt. A rollback-and-restart regression checks that the old decision stays retired.",
    "failureLink": "See the fix & regression",
    "traceSteps": [
      "Source restored",
      "Reconcile history",
      "Check approval link",
      "Keep old decision stale",
      "Review current evidence"
    ],
    "traceCaption": "LinkLoom revalidation path, simplified",
    "ossTitle": "Open source, in practice.",
    "verified": "Verified 28 Oct 2026",
    "allPRs": "More on GitHub",
    "aboutTitle": "Product-minded.",
    "aboutItalic": "Systems-oriented.",
    "aboutText": "I’m a software engineer working across product needs, interfaces and the systems behind them.",
    "aboutMethod": "I use AI-assisted development to explore and implement ideas, then inspect the code and verify behavior through review and tests.",
    "rolesText": "I’m looking for Agent Engineering and FDE roles, with a focus on runtimes, evaluation, and developer tooling.",
    "contactTitle": "Let’s work on your next AI workflow.",
    "contact": "Email me",
    "contactPending": "Public email not configured",
    "backTop": "Back to top",
    "skip": "Skip to content",
    "menu": "Toggle navigation"
  },
  "zh": {
    "nav": ["代表作品", "工程主线", "开源贡献", "工程方法", "关于我"],
    "available": "寻求 Agent Engineering 与 FDE 机会",
    "position": "Agent Engineering / AI FDE",
    "heroLines": [
      "软件工程师，",
      "专注 Agent 系统。"
    ],
    "intro": "我构建可检查、可测试，并能持续改进的 Agent 工作流与开发者工具。",
    "viewWork": "查看 LinkLoom",
    "workTitle": "代表作品。",
    "caseStudy": "阅读项目案例",
    "source": "查看源码",
    "linkloomSummary": "从会议记录里提取议题、决定和待办，跨会议追踪同一件事的变化。每条结论附原文证据，人工确认后才生效。",
    "highlights": [
      [
        "跟进同一件事。",
        "跨会议连接相关议题、决定与待办，保留每次变化。"
      ],
      [
        "每条结论，都有原文。",
        "查看结论对应的会议记录、日期与证据片段。"
      ],
      [
        "人工确认，再生效。",
        "核对抽取结果与原文，确认后才作为有效记录。"
      ]
    ],
    "reviewTitle": "AI 辅助代码审查",
    "reviewHeadline": "把一次 AI 回答，变成可重复的审查流程。",
    "reviewSummary": "将 AI 审查接入真实 PR 工作流：拆分大段 Diff、保留上下文、聚合风险并回写反馈，交由人工复核。",
    "reviewSteps": [
      "PR Diff",
      "分块审查",
      "风险识别",
      "结果聚合",
      "人工复核"
    ],
    "reviewNotes": [
      "文件与变更行",
      "约束上下文范围",
      "风险等级与测试建议",
      "合并重复发现",
      "核验后决定是否采纳"
    ],
    "reviewCaption": "匿名化流程示意",
    "realSummary": "用确定性计算比较到手收入与生活成本。可选 AI 解释读取结果，不改动核心金额。",
    "realCaption": "对比工资、扣缴与月度结余，使用公开示例输入。",
    "publicDemo": "体验产品",
    "approachTitle": "让看不见的执行，",
    "approachItalic": "变得可检查。",
    "failureTitle": "恢复旧文件，不该恢复旧批准。",
    "failureBody": "决策依据新证据完成重新审查后，旧来源文本再次出现，曾可能让原来的批准重新生效。",
    "failureFix": "我让已完成重新审查的旧决策保持失效，并为替代决策保留独立批准凭据。回滚与重启回归检查旧决策不会复活。",
    "failureLink": "查看修复与回归测试",
    "traceSteps": [
      "旧来源恢复",
      "核对决策历史",
      "检查重新批准关系",
      "旧决策保持失效",
      "审查当前证据"
    ],
    "traceCaption": "LinkLoom 重新审查路径，已简化",
    "ossTitle": "开源里的工程实践。",
    "verified": "核验于 2026-10-28",
    "allPRs": "更多 GitHub 贡献",
    "aboutTitle": "理解产品，",
    "aboutItalic": "也关心系统。",
    "aboutText": "我是一名软件工程师，在产品需求、界面与背后系统的实现之间协作。",
    "aboutMethod": "AI 辅助开发是我的工作方式之一：用它探索与实现思路，再通过代码审查和测试检查实际行为。",
    "rolesText": "目标方向是 Agent Engineering 与 FDE，重点关注运行时、评测和开发者工具。",
    "contactTitle": "一起推进下一个 AI 工作流。",
    "contact": "邮件联系",
    "contactPending": "公开邮箱待配置",
    "backTop": "回到顶部",
    "skip": "跳转到正文",
    "menu": "展开或收起导航"
  }
} as const;

