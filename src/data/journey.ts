export const journey = {
  en: {
    title: 'My engineering journey.',
    introduction: 'Working on AI-assisted code review made reliability practical for me: what was covered, which findings still held after a rerun, and how to make the result useful to a person.',
    themes: [
      ['Engineering AI into real workflows', 'In a real PR workflow, I worked on large-diff chunks, useful context, risk aggregation and feedback. Coverage, explicit exception handling and human review were part of making the workflow dependable.'],
      ['Making agent behavior observable and reliable', 'I pursue those concerns upstream too: review coverage and finding state in PR-Agent, latency metrics in AgentSight, and dependable session exports in Qwen Code.'],
      ['Building evidence-grounded agent systems', 'Alongside those contributions, LinkLoom brings runtime control, evidence and recovery into an agent system I design. Real Raise complements it with product interaction, full-stack delivery and a deployed experience.'],
    ],
  },
  zh: {
    title: '我的工程主线。',
    introduction: 'AI 辅助代码审查让我开始具体处理可靠性问题：究竟覆盖了什么、重跑后哪些发现仍然有效，以及如何让人真正用得上结果。',
    themes: [
      ['把 AI 接入真实工程流程', '在真实 PR 工作流中，我处理大段 Diff 的分块、上下文、风险聚合与反馈回写。覆盖范围、显式异常处理和人工复核，共同决定流程能否稳定交付。'],
      ['让 Agent 行为可观测、可靠', '在上游贡献中，我继续处理相关问题：PR-Agent 的审查覆盖与发现状态、AgentSight 的延迟指标，以及 Qwen Code 的会话导出体验。'],
      ['构建有证据支撑的 Agent 系统', '与开源贡献并行，我通过 LinkLoom 将运行时控制、证据和恢复组织进自己设计的系统。Real Raise 则补充产品交互、前后端实现与可访问部署的交付能力。'],
    ],
  },
} as const;
