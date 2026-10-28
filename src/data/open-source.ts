export const openSourceTopics = [
  {
    "id": "pr-agent",
    "name": "PR-Agent",
    "area": {
      "en": "Review reliability",
      "zh": "审查可靠性"
    },
    "en": {
      "headline": "Know what was reviewed.\nRemember what was found.",
      "problem": "A review can omit files when its context budget runs out. A later rerun can also miss a finding that still matters.",
      "design": "I added visible coverage gaps, then a persistent finding lifecycle across review runs. State is resolved only after a complete review of a changed revision; incremental and same-commit reruns preserve active findings.",
      "result": "Verified comment authorship and a standalone fallback keep the review usable when trusted lifecycle persistence is unavailable."
    },
    "zh": {
      "headline": "知道审查过什么，\n也记得发现过什么。",
      "problem": "上下文预算耗尽时，审查可能遗漏文件；再次运行时，也可能漏报仍然存在的问题。",
      "design": "我补充了覆盖缺口的明确展示，并实现跨轮次持久化的发现生命周期。完成新提交的完整审查后才允许判定问题已解决；增量审查与同一提交重跑保留有效发现。",
      "result": "核验评论作者身份，并提供独立审查回退，让可信状态暂不可用时仍能交付可读结果。"
    },
    "prs": [
      {
        "number": 2589,
        "url": "https://github.com/The-PR-Agent/pr-agent/pull/2589",
        "author": "yefuyou",
        "status": "Merged",
        "mergedAt": "2026-08-06T19:36:15Z",
        "en": "Review coverage",
        "zh": "审查覆盖"
      },
      {
        "number": 2722,
        "url": "https://github.com/The-PR-Agent/pr-agent/pull/2722",
        "author": "yefuyou",
        "status": "Merged",
        "mergedAt": "2026-09-05T07:31:40Z",
        "en": "Finding lifecycle",
        "zh": "发现生命周期"
      }
    ]
  },
  {
    "id": "agentsight",
    "name": "AgentSight / ANOLISA",
    "area": {
      "en": "Agent observability",
      "zh": "Agent 可观测性"
    },
    "en": {
      "headline": "Follow latency from the wire to the dashboard.",
      "problem": "Latency becomes useful when collection, storage and the interface agree on what was actually observed.",
      "design": "I built the latency path from meaningful HTTP / SSE output through SQLite and an aggregation API into the existing Agent Health page, including HTTP/2 SSE timing.",
      "result": "The page exposes p50 / p95 / p99. Unobservable first-output metrics display as — rather than zero; range changes preserve the current table and guard against stale responses."
    },
    "zh": {
      "headline": "从网络事件，追到仪表盘上的延迟。",
      "problem": "采集、存储与界面一致地解释实际观测到的事件，延迟指标才真正有用。",
      "design": "我将有意义的 HTTP / SSE 输出时间连接到 SQLite、聚合 API 与既有 Agent Health 页面，同时处理 HTTP/2 SSE 的观测语义。",
      "result": "页面展示 p50 / p95 / p99。无法观测首次输出时显示 —，而非零；时间范围切换保留当前表格，并防止旧请求覆盖新结果。"
    },
    "chain": {
      "en": [
        "HTTP / SSE",
        "SQLite",
        "Metrics API",
        "Agent Health"
      ],
      "zh": [
        "HTTP / SSE",
        "SQLite",
        "指标 API",
        "Agent Health"
      ]
    },
    "metrics": [
      {
        "name": "TTFT",
        "en": "Time to first observable output",
        "zh": "首次可观测输出的等待时间"
      },
      {
        "name": "TPS / TPOT",
        "en": "Output throughput / time per output token",
        "zh": "输出吞吐 / 每个输出 Token 的耗时"
      },
      {
        "name": "E2E",
        "en": "Full call latency",
        "zh": "完整调用耗时"
      }
    ],
    "prs": [
      {
        "number": 2578,
        "url": "https://github.com/agentic-os-org/ANOLISA/pull/2578",
        "author": "yefuyou",
        "status": "Merged",
        "mergedAt": "2026-08-15T06:46:10Z",
        "en": "Timing, storage + API",
        "zh": "采集、存储与 API"
      },
      {
        "number": 2586,
        "url": "https://github.com/agentic-os-org/ANOLISA/pull/2586",
        "author": "yefuyou",
        "status": "Merged",
        "mergedAt": "2026-08-19T01:19:33Z",
        "en": "Agent Health metrics",
        "zh": "Agent Health 指标"
      },
      {
        "number": 2583,
        "url": "https://github.com/agentic-os-org/ANOLISA/pull/2583",
        "author": "yefuyou",
        "status": "Merged",
        "mergedAt": "2026-08-17T07:49:33Z",
        "en": "Metric conventions + CI follow-up",
        "zh": "指标约定与 CI 跟进"
      },
      {
        "number": 2590,
        "url": "https://github.com/agentic-os-org/ANOLISA/pull/2590",
        "author": "yefuyou",
        "status": "Merged",
        "mergedAt": "2026-08-17T08:28:39Z",
        "en": "Agent identity matching",
        "zh": "Agent 身份匹配"
      }
    ]
  },
  {
    "id": "qwen",
    "name": "Qwen Code",
    "area": {
      "en": "Developer experience",
      "zh": "开发者体验"
    },
    "en": {
      "headline": "Make the export link finish the workflow.",
      "problem": "On Windows, an exported session could land in a browser error instead of opening the file in VS Code.",
      "design": "I preserved drive-letter paths through export and Markdown rendering, with local-file handling, regression coverage and before / after recordings.",
      "result": "A click opens the exported file in the editor, completing the user’s export path."
    },
    "zh": {
      "headline": "让导出链接，真正完成最后一步。",
      "problem": "在 Windows 上，导出的会话链接曾跳转到浏览器错误页，而不是在 VS Code 打开文件。",
      "design": "我在导出与 Markdown 渲染之间保留盘符路径，接入本地文件处理，并补充回归与前后录屏。",
      "result": "点击链接即可在编辑器打开导出文件，完成用户的导出流程。"
    },
    "prs": [
      {
        "number": 8953,
        "url": "https://github.com/QwenLM/qwen-code/pull/8953",
        "author": "yefuyou",
        "status": "Merged",
        "mergedAt": "2026-08-24T01:59:49Z",
        "en": "Windows session export",
        "zh": "Windows 会话导出"
      }
    ]
  }
] as const;
