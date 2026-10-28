export const reviewCase = {
  "en": {
    "title": "AI-assisted Code Review",
    "headline": "A review is useful when its coverage and findings are clear.",
    "summary": "An anonymized workplace engineering practice: bring AI review into a real PR workflow while keeping coverage, findings and human decisions visible.",
    "problem": "A long diff does not fit neatly into a single prompt. Independent review passes can repeat the same finding, miss surrounding context, or return suggestions that are hard to validate.",
    "response": "Organize the diff into context-aware review units, aggregate risks and return actionable feedback. Record coverage and exceptions explicitly, with a human reviewer deciding what to verify and change.",
    "decisions": [
      [
        "Keep useful context with the chunk",
        "Split large diffs into manageable review units, retaining the file and change context needed to interpret each finding."
      ],
      [
        "Make coverage and exceptions visible",
        "Record reviewed scope and surface incomplete or failed stages so a person can see what needs another pass."
      ],
      [
        "Reconcile feedback before acting",
        "Aggregate risks, deduplicate findings and return checks to the PR workflow. A person verifies the advice and decides what to change."
      ]
    ],
    "boundary": "An anonymized workplace method. The PR-Agent links below are separate upstream contributions.",
    "publicWork": "Related upstream work",
    "publicText": "My upstream PR-Agent contributions address the same engineering concerns: visible review coverage and consistent finding state across reruns.",
    "next": "Continue to Real Raise"
  },
  "zh": {
    "title": "AI 辅助代码审查",
    "headline": "覆盖范围与发现都清楚，审查才真正有用。",
    "summary": "匿名化的企业工程实践：将 AI 审查接入真实 PR 工作流，清楚呈现覆盖范围、发现与人工判断。",
    "problem": "长 Diff 很难直接放进一次提示。独立的审查轮次可能重复报告同一问题、丢失上下文，或者给出难以落实验证的建议。",
    "response": "将 Diff 组织成带上下文的审查单元，聚合风险并回写可执行的反馈。显式记录覆盖范围和异常情况，由人工决定如何核验与修改。",
    "decisions": [
      [
        "让上下文跟着分块走",
        "将大段 Diff 拆成可处理的单元，保留理解发现所需的文件与变更上下文。"
      ],
      [
        "让覆盖范围与异常可见",
        "记录已审范围，呈现未完成或失败的环节，让人知道哪些内容需要再次检查。"
      ],
      [
        "汇总反馈，再采取行动",
        "聚合风险、合并重复发现，并将检查建议回写 PR 工作流。是否采纳与修改，由人工核验后决定。"
      ]
    ],
    "boundary": "匿名化的企业实践方法。下方 PR-Agent 链接属于独立的公开上游贡献。",
    "publicWork": "相关上游贡献",
    "publicText": "我的 PR-Agent 贡献处理同一类工程问题：让审查覆盖可见，并保持多轮发现状态的一致。",
    "next": "继续查看 Real Raise"
  }
} as const;
