export const linkloomCase = {
  "en": {
    "exampleTitle": "Same question. Different date.",
    "dateLegend": "Inspect decision state",
    "moments": [
      {
        "label": "7 Oct",
        "state": "Historical decision",
        "value": "Birchline",
        "detail": "Valid from 6 Oct until 8 Oct. Wrenwell has not yet taken effect; Kestrel Ledger is still only a proposal.",
        "source": "6 Oct · approved decision",
        "quote": "The team decided that the vendor for the 2026 launch is Birchline, effective October 6, 2026."
      },
      {
        "label": "9 Oct",
        "state": "Current decision",
        "value": "Wrenwell",
        "detail": "Effective from 8 Oct, replacing Birchline. Both decisions retain their own validity interval and supporting passage.",
        "source": "8 Oct · approved replacement",
        "quote": "The team decided to replace Birchline with Wrenwell as the vendor for the 2026 launch, effective October 8, 2026."
      },
      {
        "label": "Source updated",
        "state": "Source changed",
        "value": "Review required",
        "detail": "Updated evidence prompts a fresh review. Inspect the new candidate and record a separate approval.",
        "source": "Evidence reconciliation",
        "quote": "A replacement decision receives its own approval, linked to the updated evidence."
      }
    ],
    "timelineEvents": [
      [
        "6 Oct",
        "Birchline approved"
      ],
      [
        "7 Oct",
        "Kestrel proposed"
      ],
      [
        "8 Oct",
        "Wrenwell replaces Birchline"
      ]
    ],
    "howTitle": "How it works.",
    "next": "AI-assisted Code Review",
    "headline": "Decisions change.\nYour team's answers should keep up.",
    "summary": "LinkLoom helps teams track decisions across evolving meeting notes. It connects the current answer to its original evidence, effective date, and review history.",
    "capabilities": [
      [
        "Follow changing decisions",
        "Keep current decisions and their history connected across meetings."
      ],
      [
        "Trace every answer to its source",
        "Open the original passage behind an answer, with its date and supporting evidence."
      ],
      [
        "Investigate with a controlled agent",
        "Explore source relationships and task changes in a bounded, read-only investigation."
      ]
    ],
    "problemTitle": "One decision, across many meetings.",
    "problem": "One meeting chooses Birchline. A later one replaces it with Wrenwell. Another note proposes Kestrel Ledger. The useful answer depends on which decision was approved, when it took effect, and what the source actually says.",
    "response": "LinkLoom keeps candidates, approvals and effective dates connected. You can follow the current decision back through its history, inspect the original passage, and review the decision again when its evidence changes.",
    "exampleNote": "An interactive reading of the example decision trail.",
    "fixtureLink": "Read the example notes",
    "deepTitle": "Three engineering decisions.",
    "deepDives": [
      {
        "title": "Time and authority are data.",
        "question": "A restored document shouldn't revive an old approval.",
        "implementation": "LinkLoom stores effective dates, supersession and source evidence alongside separate approval receipts. Reconciliation checks saved references and hashes against the current source inventory; completed revalidation targets stay retired, and replacement candidates receive their own approval.",
        "judgment": "A replacement earns its own approval.",
        "links": [
          [
            "Source reconciliation",
            "src/linkloom/decision_memory/reconciliation.py"
          ],
          [
            "Decision materialization",
            "src/linkloom/semantic_ingestion/materialization.py"
          ]
        ]
      },
      {
        "title": "The model proposes. The runtime decides.",
        "question": "An LLM can suggest a tool call. It doesn't get to bypass execution rules.",
        "implementation": "Before a tool runs, Python validates arguments, workspace scope, permissions and budgets. Pending calls and terminal results are checkpointed under stable identities, so runtime recovery can continue from a proven durable prefix and route unknown outcomes to verification.",
        "judgment": "Resume from recorded outcomes; verify uncertain work before retrying.",
        "links": [
          [
            "Tool runtime",
            "src/linkloom/tools/runtime.py"
          ],
          [
            "Resume policy",
            "src/linkloom/runtime/recovery.py"
          ]
        ]
      },
      {
        "title": "More context isn't always better.",
        "question": "Useful evidence matters more than simply filling the context window.",
        "implementation": "Context assembly selects evidence within item, character and estimated-token budgets, filtering scope, duplicate identities and stale provenance. Distinct passages from the same file remain available, and the final answer is checked against sources the agent actually read.",
        "incomplete": "When evidence is incomplete, LinkLoom keeps supported findings and makes the unanswered questions visible.",
        "judgment": "Carry forward the evidence that can support a claim.",
        "links": [
          [
            "Context assembly",
            "src/linkloom/context/assembler.py"
          ],
          [
            "Claim grounding",
            "src/linkloom/agents/claim_grounding.py"
          ]
        ]
      }
    ],
    "demoTitle": "Watch LinkLoom at work.",
    "demoNote": "Follow a decision from the original meeting note to its reviewed history and answer.",
    "demoCaption": "Demo shown with sample data.",
    "historicalCaption": "Historical lookup with effective dates and the original source passage.",
    "revalidationCaption": "A separate decision-revalidation example, with the earlier approval, replacement and source evidence.",
    "docsTitle": "Explore the implementation.",
    "documents": [
      [
        "Product architecture",
        "docs/architecture/PRODUCT_ARCHITECTURE.md"
      ],
      [
        "Runtime architecture",
        "docs/architecture/RUNTIME_ARCHITECTURE.md"
      ]
    ]
  },
  "zh": {
    "exampleTitle": "同一个问题，不同的查询日期。",
    "dateLegend": "查看决策状态",
    "moments": [
      {
        "label": "10 月 7 日",
        "state": "历史决策",
        "value": "Birchline",
        "detail": "10 月 6 日起、8 日前有效。Wrenwell 尚未生效；Kestrel Ledger 仍只是提议。",
        "source": "10 月 6 日 · 已批准决策",
        "quote": "The team decided that the vendor for the 2026 launch is Birchline, effective October 6, 2026."
      },
      {
        "label": "10 月 9 日",
        "state": "当前决策",
        "value": "Wrenwell",
        "detail": "10 月 8 日起生效，替代 Birchline。两条决策保留各自的有效区间与原文证据。",
        "source": "10 月 8 日 · 已批准替代项",
        "quote": "The team decided to replace Birchline with Wrenwell as the vendor for the 2026 launch, effective October 8, 2026."
      },
      {
        "label": "来源更新后",
        "state": "来源已更新",
        "value": "需要重新审查",
        "detail": "更新后的证据触发重新审查。检查新候选，再记录独立批准。",
        "source": "来源证据核对",
        "quote": "替代决策获得独立批准，并与更新后的证据关联。"
      }
    ],
    "timelineEvents": [
      [
        "10 月 6 日",
        "批准 Birchline"
      ],
      [
        "10 月 7 日",
        "提议 Kestrel"
      ],
      [
        "10 月 8 日",
        "Wrenwell 替代 Birchline"
      ]
    ],
    "howTitle": "系统如何工作。",
    "next": "AI 辅助代码审查",
    "headline": "决策在变，\n团队的答案也要跟得上。",
    "summary": "LinkLoom 帮助团队沿着不断更新的会议记录追踪决策，把当前答案与原始证据、生效日期和审查历史连接起来。",
    "capabilities": [
      [
        "跟随决策变化",
        "跨会议保留决策的演变，清楚区分当前决定与历史版本。"
      ],
      [
        "从答案追溯到原文",
        "查看支持答案的原始记录、日期与证据片段。"
      ],
      [
        "通过受控 Agent 调查",
        "围绕复杂的来源关系与任务变化，进行有边界、只读的调查。"
      ]
    ],
    "problemTitle": "同一项决策，散落在多次会议里。",
    "problem": "一次会议选择 Birchline，后一次改用 Wrenwell，另一份记录提出 Kestrel Ledger。真正有用的答案，要结合哪项决策获批、何时生效，以及原文究竟说了什么。",
    "response": "LinkLoom 将候选、批准与生效日期连接起来。你可以沿着当前决定回看历史、检查原文，并在证据变化后重新审查决策。",
    "exampleNote": "交互式示例：沿日期查看同一条决策记录。",
    "fixtureLink": "查看示例记录",
    "deepTitle": "三个重要的工程判断。",
    "deepDives": [
      {
        "title": "时间与批准权，都写进数据。",
        "question": "恢复旧文档，不该让旧批准复活。",
        "implementation": "LinkLoom 分别保存生效时间、替代关系、来源证据与独立的批准凭据。来源核对会检查当前证据目录中的引用和哈希；已完成重新审查的旧目标保持退役，替代候选单独获得批准。",
        "judgment": "新的替代项，需要自己的批准。",
        "links": [
          [
            "来源核对",
            "src/linkloom/decision_memory/reconciliation.py"
          ],
          [
            "决策物化",
            "src/linkloom/semantic_ingestion/materialization.py"
          ]
        ]
      },
      {
        "title": "模型提出建议，运行时决定执行。",
        "question": "LLM 可以建议调用工具，但不能绕过执行规则。",
        "implementation": "工具执行前，Python 检查参数、工作区范围、权限与预算。待执行调用和最终结果以稳定身份记录检查点，让运行时从已证明完成的前缀继续，并将未知结果交给核验流程。",
        "judgment": "依据已记录的结果恢复，重试前先核验不确定的工作。",
        "links": [
          [
            "工具运行时",
            "src/linkloom/tools/runtime.py"
          ],
          [
            "恢复策略",
            "src/linkloom/runtime/recovery.py"
          ]
        ]
      },
      {
        "title": "上下文更多，不一定更好。",
        "question": "有用的证据，比填满上下文窗口更重要。",
        "implementation": "上下文组装在条目、字符和估算 Token 预算内选择证据，检查范围、重复身份和失效出处。同一文件的不同片段仍可保留，最终答案再与 Agent 实际读取的来源核对。",
        "incomplete": "证据不完整时，LinkLoom 保留有依据的发现，并让未回答的问题清楚可见。",
        "judgment": "让能够支撑主张的证据继续向前。",
        "links": [
          [
            "上下文组装",
            "src/linkloom/context/assembler.py"
          ],
          [
            "主张与证据核对",
            "src/linkloom/agents/claim_grounding.py"
          ]
        ]
      }
    ],
    "demoTitle": "看看 LinkLoom 如何工作。",
    "demoNote": "从原始会议记录出发，跟随一项决策走到已审历史与答案。",
    "demoCaption": "演示使用示例数据。",
    "historicalCaption": "历史查询画面：生效日期与支持答案的原文。",
    "revalidationCaption": "另一组决策重新审查示例：原批准、替代项与各自来源证据。",
    "docsTitle": "继续阅读实现。",
    "documents": [
      [
        "产品架构",
        "docs/architecture/PRODUCT_ARCHITECTURE.md"
      ],
      [
        "Runtime 架构",
        "docs/architecture/RUNTIME_ARCHITECTURE.md"
      ]
    ]
  }
} as const;
