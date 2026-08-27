window.WEM_CONFIG = {
  "meta": {
    "title": "Genesys WEM Navigator",
    "version": "8.4-mvp",
    "methodologyVersion": "Track1-v1.1-score-bands",
    "findingsVersion": "Track2-v1.0",
    "roadmapVersion": "Track3-v1.0",
    "servicesBenefitsVersion": "Track4-5-v1.2",
    "benchmarkVersion": "Track6-v3",
    "uxVersion": "Track7-v1.4-summary-dashboard"
  },
  "stages": [
    {
      "level": 1,
      "name": "Emerging",
      "min": 0,
      "max": 20
    },
    {
      "level": 2,
      "name": "Developing",
      "min": 21,
      "max": 40
    },
    {
      "level": 3,
      "name": "Established",
      "min": 41,
      "max": 60
    },
    {
      "level": 4,
      "name": "Optimized",
      "min": 61,
      "max": 80
    },
    {
      "level": 5,
      "name": "AI-Orchestrated",
      "min": 81,
      "max": 100
    }
  ],
  "aiStages": [
    {
      "level": 1,
      "name": "Detect",
      "min": 0,
      "max": 20
    },
    {
      "level": 2,
      "name": "Assist - Early",
      "min": 21,
      "max": 40
    },
    {
      "level": 3,
      "name": "Assist",
      "min": 41,
      "max": 60
    },
    {
      "level": 4,
      "name": "Validate",
      "min": 61,
      "max": 80
    },
    {
      "level": 5,
      "name": "Automate",
      "min": 81,
      "max": 100
    }
  ],
  "modules": {
    "qm": {
      "name": "Quality Management",
      "short": "QM",
      "icon": "shield",
      "weight": 0.25,
      "dimensions": [
        {
          "id": "evaluation",
          "name": "Evaluation approach",
          "weight": 0.2,
          "question": "How are quality evaluations completed today?",
          "answers": [
            {
              "score": 0,
              "label": "Manual review only",
              "text": "Predominantly manual evaluation and review.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Digital tool, manual process",
              "text": "Digital workflow supports a largely manual evaluation process.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Structured, some automation",
              "text": "Structured evaluation workflow with selective automation or assistance.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "AI-assisted scoring",
              "text": "AI assists scoring, review preparation or prioritisation as part of normal QA.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Continuous AI monitoring",
              "text": "Continuous AI-supported monitoring and prioritisation directs human attention to exceptions and improvement opportunities.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "prioritisation",
          "name": "Coverage & prioritisation",
          "weight": 0.2,
          "question": "How do you decide which interactions receive quality attention?",
          "answers": [
            {
              "score": 0,
              "label": "Small manual sample",
              "text": "A small manually selected sample.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Random / percentage sampling",
              "text": "Defined random or percentage-based sampling.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Criteria-based sampling",
              "text": "Sampling uses defined criteria, customer or performance signals.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "AI-prioritised sampling",
              "text": "AI/analytics helps prioritise higher-risk or higher-value interactions.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Continuous automatic monitoring",
              "text": "Interactions are continuously monitored and exceptions/anomalies automatically direct human attention.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "coaching",
          "name": "Coaching linkage",
          "weight": 0.25,
          "question": "How is coaching linked to quality findings?",
          "answers": [
            {
              "score": 0,
              "label": "Not linked",
              "text": "Coaching is not systematically linked to evaluations.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Occasionally used",
              "text": "Managers occasionally use evaluation results when coaching.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Routine coaching follow-up",
              "text": "Quality findings routinely trigger structured coaching follow-up.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Analytics-prioritised coaching",
              "text": "Analytics and quality trends proactively prioritise coaching.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "AI-identified, outcome-tracked",
              "text": "AI continuously identifies coaching opportunities, recommends actions and measures outcomes under manager oversight.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "governance",
          "name": "Governance & calibration",
          "weight": 0.2,
          "question": "How do you maintain consistency and trust in quality evaluations?",
          "answers": [
            {
              "score": 0,
              "label": "Individual judgement",
              "text": "We rely mainly on individual evaluator judgement.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Occasional score comparison",
              "text": "We occasionally compare scores or discuss differences.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Structured calibration",
              "text": "We run structured calibration sessions with defined standards.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Embedded governance & calibration",
              "text": "Calibration, governance and performance monitoring are embedded in our QA programme.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Continuous AI / human monitoring",
              "text": "We continuously monitor human/AI scoring quality, exceptions, drift and agreement with governed human oversight.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "continuous_improvement",
          "name": "Continuous improvement",
          "weight": 0.15,
          "question": "How is the quality programme improved over time?",
          "answers": [
            {
              "score": 0,
              "label": "Reactive when problems occur",
              "text": "Changes are mainly made when problems occur.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Occasional review",
              "text": "Forms or processes are reviewed occasionally.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Defined review cadence",
              "text": "Forms, criteria and outcomes are reviewed on a defined cadence.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Data-driven optimisation",
              "text": "Quality design is routinely optimised using trends, outcomes and operational feedback.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Continuous closed-loop improvement",
              "text": "Continuous performance signals and governed AI insights drive closed-loop optimisation of quality strategy.",
              "maturity": "level5"
            }
          ]
        }
      ]
    },
    "sta": {
      "name": "Speech & Text Analytics",
      "short": "STA",
      "icon": "wave",
      "weight": 0.25,
      "dimensions": [
        {
          "id": "coverage",
          "name": "Analytics coverage & visibility",
          "weight": 0.15,
          "question": "How does your organisation currently understand what customers are saying across interactions?",
          "answers": [
            {
              "score": 0,
              "label": "Complaints / manual review",
              "text": "Primarily through complaints, manual reviews or anecdotal feedback.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Selected interactions only",
              "text": "We can search or analyse selected interactions/channels.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Main channels covered",
              "text": "Analytics systematically covers our main interaction channels and use cases.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Broad cross-channel coverage",
              "text": "Conversation intelligence is broadly available across channels and teams.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Continuous conversation intelligence",
              "text": "Interactions are continuously analysed and emerging signals are automatically surfaced.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "taxonomy",
          "name": "Topic / taxonomy maturity",
          "weight": 0.2,
          "question": "How do you manage the topics, intents and conversation signals that matter to the business?",
          "answers": [
            {
              "score": 0,
              "label": "No defined approach",
              "text": "We do not have a defined approach.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Default topics / keywords",
              "text": "We mainly use default topics, keywords or ad-hoc searches.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Custom topics for key needs",
              "text": "We maintain custom topics/intents aligned to defined business needs.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Topics routinely optimised",
              "text": "Topics and signals are routinely reviewed, validated and optimised.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "AI discovers emerging themes",
              "text": "AI helps discover emerging themes and refine the intelligence model under human governance.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "kpi_alignment",
          "name": "Business KPI & use-case alignment",
          "weight": 0.2,
          "question": "How closely is conversation analytics connected to business KPIs and priorities?",
          "answers": [
            {
              "score": 0,
              "label": "No KPI connection",
              "text": "There is little or no formal connection.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Ad-hoc investigation",
              "text": "We investigate interesting issues when they arise.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Defined KPI use cases",
              "text": "Defined analytics use cases are linked to KPIs such as quality, compliance, CX or performance.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Cross-KPI insight",
              "text": "Insights are combined across multiple KPIs/functions to identify root causes and opportunities.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Continuous strategic intelligence",
              "text": "Conversation intelligence continuously informs strategic and operational priorities across the organisation.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "insight_action",
          "name": "Insight-to-action operationalisation",
          "weight": 0.3,
          "question": "What typically happens when analytics identifies an important issue or opportunity?",
          "answers": [
            {
              "score": 0,
              "label": "Manual investigation",
              "text": "Nothing systematic - someone may investigate manually.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Insights shared ad-hoc",
              "text": "Analysts or managers share findings on an ad-hoc basis.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Insights feed operational action",
              "text": "Insights routinely feed coaching, QA, compliance or process improvement.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Alerts trigger action",
              "text": "Alerts and workflows proactively direct the right teams toward action.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Governed action + outcome loop",
              "text": "Insights trigger governed actions and outcomes are measured to continuously improve the response.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "ai_governance",
          "name": "AI, automation & governance",
          "weight": 0.15,
          "question": "How is AI used and governed within your conversation intelligence programme?",
          "answers": [
            {
              "score": 0,
              "label": "No AI use",
              "text": "AI is not currently used.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "AI experimentation",
              "text": "We are experimenting with AI-assisted analytics.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Selected AI capabilities",
              "text": "AI supports selected capabilities such as intent, sentiment, summaries or insight discovery.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Governed AI use",
              "text": "AI recommendations and automated analytics are routinely used with defined governance.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Continuously monitored AI",
              "text": "AI continuously detects emerging patterns and recommends or initiates governed actions, with performance and human oversight continuously monitored.",
              "maturity": "level5"
            }
          ]
        }
      ]
    },
    "wfm": {
      "name": "Workforce Management",
      "short": "WFM",
      "icon": "calendar",
      "weight": 0.3,
      "dimensions": [
        {
          "id": "forecasting",
          "name": "Forecasting & demand planning",
          "weight": 0.25,
          "question": "How does your organisation forecast workload and staffing requirements?",
          "answers": [
            {
              "score": 0,
              "label": "Spreadsheets / judgement",
              "text": "Mostly spreadsheets, manual judgement or simple historical averages.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Historical forecasting",
              "text": "Defined historical forecasting is used for core workloads.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Forecast vs actual review",
              "text": "Forecasts are routinely reviewed against actuals and cover major channels/workloads.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Scenario + AI forecasting",
              "text": "Scenario modelling and AI-assisted forecasting help anticipate changing demand.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Continuously adaptive forecasting",
              "text": "Forecasts continuously adapt using AI, operational signals and changing demand patterns.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "scheduling",
          "name": "Scheduling & optimisation",
          "weight": 0.2,
          "question": "How are schedules created and optimised?",
          "answers": [
            {
              "score": 0,
              "label": "Manual / fixed schedules",
              "text": "Mostly manually or using fixed schedules.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Rules / templates",
              "text": "Standard rules/templates support schedule creation.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Optimised by demand & skills",
              "text": "WFM optimisation routinely balances demand, skills, constraints and staffing requirements.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Flexibility-aware scheduling",
              "text": "Scheduling increasingly considers employee preferences, flexibility and changing operational requirements.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Dynamic AI optimisation",
              "text": "Scheduling is dynamically optimised across business demand, employee needs and available resources.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "intraday",
          "name": "Intraday management",
          "weight": 0.25,
          "question": "What happens when actual demand or staffing differs from plan?",
          "answers": [
            {
              "score": 0,
              "label": "React after impact",
              "text": "We usually react after service levels are affected.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Manual monitoring",
              "text": "Planners/supervisors manually monitor conditions and make changes.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Defined intraday controls",
              "text": "Defined intraday processes, alerts and adherence information guide intervention.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Proactive AI recommendations",
              "text": "AI/recommendations proactively identify risks and suggest corrective actions.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Governed automated response",
              "text": "Governed automation continuously identifies and responds to intraday imbalance, escalating exceptions when human judgement is required.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "flexibility",
          "name": "Employee flexibility & self-service",
          "weight": 0.15,
          "question": "How much control do employees have over their schedules and time-off needs?",
          "answers": [
            {
              "score": 0,
              "label": "Supervisor-led requests",
              "text": "Almost everything goes through supervisors/planners.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Basic employee requests",
              "text": "Employees can submit basic requests.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Self-service within rules",
              "text": "Employees use self-service for common schedule/time-off activities within defined rules.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Flexible shifts & preferences",
              "text": "Flexible scheduling, shift changes and preferences are routinely supported within business constraints.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Dynamic preference balancing",
              "text": "Intelligent self-service dynamically balances employee preferences with staffing requirements.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "continuous_optimisation",
          "name": "Capacity, AI & continuous optimisation",
          "weight": 0.15,
          "question": "How do you improve workforce plans over time?",
          "answers": [
            {
              "score": 0,
              "label": "Planner-led improvement",
              "text": "Mainly through planner experience when problems occur.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Periodic metric review",
              "text": "Basic operational metrics are periodically reviewed.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Routine WFM optimisation",
              "text": "Forecast accuracy, staffing, adherence and schedule effectiveness are routinely measured and improved.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Proactive scenario improvement",
              "text": "Capacity scenarios, AI insights and cross-functional data guide proactive improvement.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Continuous AI optimisation",
              "text": "Outcomes continuously feed back into forecasting, scheduling and resource decisions under governed AI orchestration.",
              "maturity": "level5"
            }
          ]
        }
      ]
    },
    "ep": {
      "name": "Employee Performance",
      "short": "EP",
      "icon": "star",
      "weight": 0.2,
      "dimensions": [
        {
          "id": "visibility",
          "name": "Performance visibility & goals",
          "weight": 0.2,
          "question": "How clearly can employees understand their performance and what is expected of them?",
          "answers": [
            {
              "score": 0,
              "label": "Little performance visibility",
              "text": "Limited or no visibility.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Periodic reporting",
              "text": "Periodic or static reporting.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Dashboards + goals",
              "text": "Regular dashboards and defined goals.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Integrated performance views",
              "text": "Integrated performance views connect measures to outcomes.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Personalised live guidance",
              "text": "Employees receive continuously updated, personalised guidance against goals.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "coaching",
          "name": "Coaching discipline",
          "weight": 0.25,
          "question": "How are coaching priorities and conversations managed?",
          "answers": [
            {
              "score": 0,
              "label": "Manager judgement",
              "text": "Mainly manager judgement or when problems occur.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Inconsistent coaching",
              "text": "Coaching occurs periodically but varies by manager.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Structured coaching",
              "text": "Structured coaching happens regularly using defined performance information.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Analytics-prioritised coaching",
              "text": "Analytics proactively helps managers prioritise coaching opportunities.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "AI-personalised coaching",
              "text": "AI continuously identifies coaching needs, recommends actions and tracks outcomes under manager oversight.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "learning",
          "name": "Learning & development linkage",
          "weight": 0.2,
          "question": "How is learning connected to individual performance needs?",
          "answers": [
            {
              "score": 0,
              "label": "Generic / disconnected training",
              "text": "Training is largely generic or disconnected.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Occasional manager referral",
              "text": "Managers occasionally recommend training.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Performance-linked learning",
              "text": "Performance gaps routinely inform learning/development plans.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Targeted learning",
              "text": "Learning is targeted using quality, analytics and performance information.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Continuously personalised learning",
              "text": "Learning is continuously personalised based on performance signals and measured outcomes.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "recognition",
          "name": "Recognition & engagement",
          "weight": 0.15,
          "question": "How are recognition and motivation built into everyday performance management?",
          "answers": [
            {
              "score": 0,
              "label": "Rare / informal",
              "text": "Recognition is rare or informal.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Periodic recognition",
              "text": "Periodic team or manager recognition.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Defined recognition / gamification",
              "text": "Defined recognition or gamification supports performance goals.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Data-driven recognition",
              "text": "Recognition is timely, data-driven and aligned to desired behaviours.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "Adaptive engagement",
              "text": "Recognition and engagement dynamically adapt to individual/team performance while remaining governed and meaningful.",
              "maturity": "level5"
            }
          ]
        },
        {
          "id": "intelligence",
          "name": "Intelligence & personalisation",
          "weight": 0.2,
          "question": "How does your organisation identify who needs support and what will help them improve?",
          "answers": [
            {
              "score": 0,
              "label": "Manager intuition",
              "text": "Manager intuition.",
              "maturity": "level1"
            },
            {
              "score": 25,
              "label": "Basic performance reports",
              "text": "Individual reports or quality scores.",
              "maturity": "level2"
            },
            {
              "score": 50,
              "label": "Consolidated performance view",
              "text": "Multiple performance measures provide a consolidated view.",
              "maturity": "level3"
            },
            {
              "score": 75,
              "label": "Analytics-driven support",
              "text": "Analytics identifies patterns and recommends targeted development.",
              "maturity": "level4"
            },
            {
              "score": 100,
              "label": "AI-prioritised development",
              "text": "AI continuously prioritises opportunities, recommends personalised actions and measures whether interventions worked.",
              "maturity": "level5"
            }
          ]
        }
      ]
    }
  },
  "ai": {
    "name": "AI Readiness",
    "short": "AI",
    "dimensions": [
      {
        "id": "use_case_clarity",
        "name": "Business use-case clarity",
        "weight": 0.2,
        "question": "How clearly has your organisation identified where AI should create value within WEM?",
        "answers": [
          {
            "score": 0,
            "label": "No clear AI use cases",
            "text": "No clearly defined AI use cases or value hypotheses.",
            "maturity": "level1"
          },
          {
            "score": 25,
            "label": "Early AI ideas",
            "text": "A small number of potential use cases are being explored.",
            "maturity": "level2"
          },
          {
            "score": 50,
            "label": "Defined AI use cases",
            "text": "Defined AI use cases exist with expected business outcomes.",
            "maturity": "level3"
          },
          {
            "score": 75,
            "label": "Prioritised AI portfolio",
            "text": "A prioritised portfolio of AI use cases has measurable success criteria and ownership.",
            "maturity": "level4"
          },
          {
            "score": 100,
            "label": "Continuous AI value prioritisation",
            "text": "AI use cases are continuously prioritised based on measured value, risk and operating outcomes.",
            "maturity": "level5"
          }
        ]
      },
      {
        "id": "trust",
        "name": "Trust & adoption",
        "weight": 0.2,
        "question": "How comfortable are managers and employees acting on AI-generated recommendations?",
        "answers": [
          {
            "score": 0,
            "label": "No trust / usage",
            "text": "AI recommendations are not used or are not trusted.",
            "maturity": "level1"
          },
          {
            "score": 25,
            "label": "Experimenting",
            "text": "Users are experimenting, but trust and adoption are inconsistent.",
            "maturity": "level2"
          },
          {
            "score": 50,
            "label": "Used with human judgement",
            "text": "AI recommendations are used in selected workflows with human judgement.",
            "maturity": "level3"
          },
          {
            "score": 75,
            "label": "Routinely trusted",
            "text": "AI recommendations are routinely used and trusted where validation has demonstrated reliability.",
            "maturity": "level4"
          },
          {
            "score": 100,
            "label": "Validated AI execution",
            "text": "Validated recommendations routinely lead to governed execution, with humans focused on exceptions and higher-judgement decisions.",
            "maturity": "level5"
          }
        ]
      },
      {
        "id": "governance",
        "name": "Governance & accountability",
        "weight": 0.25,
        "question": "How is AI governed?",
        "answers": [
          {
            "score": 0,
            "label": "No governance",
            "text": "No formal governance or ownership.",
            "maturity": "level1"
          },
          {
            "score": 25,
            "label": "Early guidance",
            "text": "Informal guidance or early governance is forming.",
            "maturity": "level2"
          },
          {
            "score": 50,
            "label": "Defined controls",
            "text": "Defined ownership, human oversight and controls exist for selected AI use cases.",
            "maturity": "level3"
          },
          {
            "score": 75,
            "label": "Systematic governance",
            "text": "AI performance, risk, accuracy and human approval are systematically governed and reviewed.",
            "maturity": "level4"
          },
          {
            "score": 100,
            "label": "Continuous AI governance",
            "text": "Governance continuously monitors automated execution, exceptions, model behaviour, accountability and business outcomes.",
            "maturity": "level5"
          }
        ]
      },
      {
        "id": "integration",
        "name": "Operational integration",
        "weight": 0.2,
        "question": "How integrated is AI into everyday WEM workflows?",
        "answers": [
          {
            "score": 0,
            "label": "Not in normal workflows",
            "text": "AI is not part of normal WEM workflows.",
            "maturity": "level1"
          },
          {
            "score": 25,
            "label": "Pilot alongside workflows",
            "text": "Experiments or pilots sit alongside normal processes.",
            "maturity": "level2"
          },
          {
            "score": 50,
            "label": "Selected workflow support",
            "text": "AI supports selected quality, analytics, planning or performance workflows.",
            "maturity": "level3"
          },
          {
            "score": 75,
            "label": "Embedded across workflows",
            "text": "AI is embedded across multiple WEM workflows with defined human validation points.",
            "maturity": "level4"
          },
          {
            "score": 100,
            "label": "Routine AI execution",
            "text": "Validated AI-driven workflows execute routinely across WEM with human oversight focused on exceptions and control.",
            "maturity": "level5"
          }
        ]
      },
      {
        "id": "measurement",
        "name": "Measurement & scaling",
        "weight": 0.15,
        "question": "How does your organisation measure and improve AI performance?",
        "answers": [
          {
            "score": 0,
            "label": "No measurement",
            "text": "No formal measurement.",
            "maturity": "level1"
          },
          {
            "score": 25,
            "label": "Basic pilot feedback",
            "text": "Basic usage or pilot feedback is reviewed.",
            "maturity": "level2"
          },
          {
            "score": 50,
            "label": "Usage + outcome measures",
            "text": "Accuracy, adoption and selected outcomes are measured for defined use cases.",
            "maturity": "level3"
          },
          {
            "score": 75,
            "label": "Systematic validation",
            "text": "Performance, exceptions, trust and business outcomes are systematically validated before scaling.",
            "maturity": "level4"
          },
          {
            "score": 100,
            "label": "Continuous AI performance optimisation",
            "text": "AI performance and business outcomes are continuously monitored, with feedback used to improve models, workflows and governance.",
            "maturity": "level5"
          }
        ]
      }
    ]
  },
  "benchmarks": {
    "Financial Services / Banking": {
      "wfm": 60,
      "qm": 69,
      "sta": 61,
      "ep": 50
    },
    "Insurance": {
      "wfm": 58,
      "qm": 70,
      "sta": 57,
      "ep": 49
    },
    "Retail / eCommerce": {
      "wfm": 67,
      "qm": 54,
      "sta": 58,
      "ep": 61
    },
    "Telecommunications": {
      "wfm": 71,
      "qm": 61,
      "sta": 72,
      "ep": 57
    },
    "Healthcare / Pharma": {
      "wfm": 52,
      "qm": 68,
      "sta": 36,
      "ep": 46
    },
    "BPO / Outsourcing": {
      "wfm": 74,
      "qm": 73,
      "sta": 68,
      "ep": 61
    },
    "Travel & Hospitality": {
      "wfm": 61,
      "qm": 51,
      "sta": 55,
      "ep": 53
    },
    "Government / Public Sector": {
      "wfm": 47,
      "qm": 57,
      "sta": 34,
      "ep": 36
    },
    "Utilities / Energy": {
      "wfm": 62,
      "qm": 64,
      "sta": 54,
      "ep": 46
    },
    "Other / Cross-industry": {
      "wfm": 58,
      "qm": 58,
      "sta": 55,
      "ep": 50
    }
  },
  "industryAlias": {
    "Banking": "Financial Services / Banking",
    "Financial Services": "Financial Services / Banking",
    "Retail": "Retail / eCommerce",
    "Telecom": "Telecommunications",
    "Healthcare": "Healthcare / Pharma",
    "BPO": "BPO / Outsourcing",
    "Travel": "Travel & Hospitality",
    "Public Sector": "Government / Public Sector",
    "Utilities": "Utilities / Energy",
    "Other": "Other / Cross-industry"
  },
  "findings": {
    "qm": {
      "evaluation": {
        "low": "Quality evaluation remains heavily manual, limiting scale and time for higher-value improvement.",
        "mid": "A structured evaluation foundation is in place, with selective automation beginning to reduce manual effort.",
        "high": "AI increasingly augments evaluation activity, shifting human attention toward exceptions and improvement.",
        "actions": [
          "Standardise the evaluation workflow and ownership",
          "Expand evaluation automation where the process is stable",
          "Use human review for exceptions and higher-judgement work"
        ]
      },
      "prioritisation": {
        "low": "Quality attention is still driven by small or predetermined samples, creating blind spots.",
        "mid": "Interaction selection is becoming more purposeful using customer, performance or risk criteria.",
        "high": "Analytics increasingly directs attention toward higher-risk or higher-value interactions.",
        "actions": [
          "Define risk/value criteria for interaction selection",
          "Use analytics to prioritise quality attention",
          "Measure whether prioritisation improves issue detection"
        ]
      },
      "coaching": {
        "low": "Quality findings are not consistently translating into coaching and behaviour change.",
        "mid": "Coaching is systematically connected to quality findings, though prioritisation remains mostly structured.",
        "high": "Quality and analytics proactively identify where coaching can have the greatest impact.",
        "actions": [
          "Connect quality findings systematically to coaching",
          "Define a consistent coaching cadence and ownership",
          "Measure whether coaching changes performance outcomes"
        ]
      },
      "governance": {
        "low": "Evaluation consistency depends too heavily on individual judgement, creating trust and fairness risk.",
        "mid": "Structured calibration provides a credible foundation for consistent evaluation.",
        "high": "Calibration and governance are embedded, including oversight of human and AI scoring quality.",
        "actions": [
          "Establish structured calibration and scoring standards",
          "Define governance for human and AI-assisted scoring",
          "Monitor agreement, exceptions and drift"
        ]
      },
      "continuous_improvement": {
        "low": "The quality programme changes mainly in response to issues rather than through a defined improvement cycle.",
        "mid": "Quality design and outcomes are reviewed on a repeatable cadence.",
        "high": "Trends, outcomes and governed intelligence routinely improve the quality programme.",
        "actions": [
          "Create a regular quality-programme review cadence",
          "Use trends and outcomes to refine scorecards and workflows",
          "Build a closed-loop improvement backlog"
        ]
      }
    },
    "sta": {
      "coverage": {
        "low": "Conversation understanding still depends on manual review or limited samples, leaving interaction blind spots.",
        "mid": "Analytics systematically covers important interactions and provides a repeatable source of customer insight.",
        "high": "Conversation intelligence is broad and increasingly continuous across channels and teams.",
        "actions": [
          "Expand analytics coverage across priority channels",
          "Define the interactions and journeys that matter most",
          "Use continuous signals to surface emerging issues"
        ]
      },
      "taxonomy": {
        "low": "Topics and searches are mostly ad hoc or default, which can create noise and weak business relevance.",
        "mid": "A maintained custom taxonomy aligns analytics with defined business needs.",
        "high": "Topics and signals are routinely validated and increasingly refined using AI under human governance.",
        "actions": [
          "Rationalise topics around high-value business questions",
          "Create ownership and review cadence for taxonomy",
          "Validate signal quality and remove noisy topics"
        ]
      },
      "kpi_alignment": {
        "low": "Analytics is weakly connected to business outcomes, making value difficult to prove.",
        "mid": "Defined analytics use cases are tied to quality, compliance, CX or performance KPIs.",
        "high": "Conversation intelligence informs cross-functional operational and strategic priorities.",
        "actions": [
          "Define the KPIs analytics should answer",
          "Map high-value topics to owners and business outcomes",
          "Measure insight value against agreed KPIs"
        ]
      },
      "insight_action": {
        "low": "Insights may be discovered, but there is no consistent mechanism to convert them into action.",
        "mid": "Insights routinely feed coaching, QA, compliance or process improvement.",
        "high": "Alerts and governed workflows proactively direct teams toward action and measure results.",
        "actions": [
          "Assign owners for acting on analytics findings",
          "Connect priority signals to coaching, QA or process workflows",
          "Measure whether actions improve the target KPI"
        ]
      },
      "ai_governance": {
        "low": "AI is absent or experimental, so analytics relies on manual interpretation and narrow use cases.",
        "mid": "AI supports selected analytics capabilities with defined human oversight.",
        "high": "AI continuously helps detect patterns and recommend or initiate governed actions.",
        "actions": [
          "Select low-risk AI-assisted analytics use cases",
          "Define human oversight and governance",
          "Validate AI insight quality before scaling automation"
        ]
      }
    },
    "wfm": {
      "forecasting": {
        "low": "Forecasting relies heavily on manual judgement or simple history, reducing confidence when demand changes.",
        "mid": "Forecasts are routinely produced and reviewed against actual demand across important workloads.",
        "high": "Scenario modelling and AI increasingly anticipate changing demand and refine planning assumptions.",
        "actions": [
          "Establish a forecast-versus-actual review cadence",
          "Expand forecasting across priority workloads/channels",
          "Introduce scenario modelling and AI assistance when foundations are stable"
        ]
      },
      "scheduling": {
        "low": "Schedules are predominantly fixed or manually assembled, limiting fit to demand and employee constraints.",
        "mid": "Scheduling routinely balances demand, skills and constraints using WFM optimisation.",
        "high": "Scheduling increasingly balances changing demand with employee preferences and available resources.",
        "actions": [
          "Standardise scheduling rules and constraints",
          "Use optimisation to balance demand, skills and staffing",
          "Expand preference-aware scheduling where appropriate"
        ]
      },
      "intraday": {
        "low": "The operation reacts after service is affected, so a good plan can lose value during the day.",
        "mid": "Defined intraday processes, adherence and alerts guide intervention.",
        "high": "AI/recommendations proactively identify risk and support governed corrective action.",
        "actions": [
          "Define proactive intraday intervention thresholds",
          "Clarify ownership for real-time decisions",
          "Use alerts/recommendations before service deteriorates"
        ]
      },
      "flexibility": {
        "low": "Schedule and time-off activity depends heavily on supervisors/planners, creating effort and limited flexibility.",
        "mid": "Employees can self-serve common schedule/time-off needs within defined rules.",
        "high": "Intelligent flexibility increasingly balances employee preferences with staffing requirements.",
        "actions": [
          "Expand governed employee self-service",
          "Review shift/time-off rules for flexibility opportunities",
          "Balance employee preferences with staffing constraints"
        ]
      },
      "continuous_optimisation": {
        "low": "Workforce plans improve mainly through planner experience rather than a systematic learning cycle.",
        "mid": "Forecast accuracy, staffing, adherence and schedule effectiveness are routinely measured and improved.",
        "high": "Capacity scenarios, AI insights and outcome feedback continuously refine workforce decisions.",
        "actions": [
          "Measure forecast, staffing and schedule effectiveness consistently",
          "Create a capacity/scenario-planning cadence",
          "Feed outcomes back into future workforce decisions"
        ]
      }
    },
    "ep": {
      "visibility": {
        "low": "Employees have limited or periodic visibility into performance and improvement priorities.",
        "mid": "Regular dashboards and goals give employees a repeatable view of performance.",
        "high": "Integrated and personalised views increasingly connect performance measures to outcomes and next actions.",
        "actions": [
          "Clarify goals and performance measures",
          "Give employees regular visibility into performance",
          "Connect performance measures to business outcomes"
        ]
      },
      "coaching": {
        "low": "Coaching is inconsistent and depends heavily on individual manager judgement.",
        "mid": "Structured coaching happens regularly using defined performance information.",
        "high": "Analytics and AI proactively prioritise coaching opportunities and increasingly measure outcomes.",
        "actions": [
          "Establish a consistent coaching cadence",
          "Use performance signals to prioritise coaching",
          "Measure coaching outcomes rather than activity alone"
        ]
      },
      "learning": {
        "low": "Learning is generic or disconnected from individual performance needs.",
        "mid": "Performance gaps routinely inform development plans.",
        "high": "Learning is targeted and increasingly personalised using quality, analytics and performance signals.",
        "actions": [
          "Link identified performance gaps to learning",
          "Create targeted development pathways",
          "Measure whether learning changes performance"
        ]
      },
      "recognition": {
        "low": "Recognition is rare or inconsistent, limiting reinforcement of desired behaviours.",
        "mid": "Defined recognition or gamification supports performance goals.",
        "high": "Recognition is timely, data-driven and increasingly personalised.",
        "actions": [
          "Define recognition around desired behaviours",
          "Use gamification selectively to reinforce goals",
          "Make recognition timely and data-informed"
        ]
      },
      "intelligence": {
        "low": "Managers rely on intuition or isolated reports to identify who needs support.",
        "mid": "Multiple performance measures provide a consolidated view.",
        "high": "Analytics and AI identify patterns, recommend targeted development and measure intervention effectiveness.",
        "actions": [
          "Consolidate the measures managers use to prioritise support",
          "Use analytics to identify development patterns",
          "Introduce governed AI recommendations after the data foundation is trusted"
        ]
      }
    },
    "ai": {
      "use_case_clarity": {
        "low": "The organisation has not yet defined where AI should create measurable WEM value.",
        "mid": "Defined AI use cases exist with expected business outcomes.",
        "high": "AI opportunities are prioritised using measurable value, risk and operating outcomes.",
        "actions": [
          "Define 2-3 measurable AI use cases",
          "Prioritise use cases by value and risk",
          "Assign an accountable owner to each AI use case"
        ]
      },
      "trust": {
        "low": "AI recommendations are not yet trusted or routinely used.",
        "mid": "AI recommendations support selected workflows with human judgement.",
        "high": "Validated AI recommendations are routinely trusted and can lead to governed execution.",
        "actions": [
          "Start with transparent, low-risk AI assistance",
          "Create user feedback and trust-building loops",
          "Scale only after recommendations are validated"
        ]
      },
      "governance": {
        "low": "AI lacks clear ownership, oversight or controls, increasing adoption and risk concerns.",
        "mid": "Defined ownership, human oversight and controls exist for selected use cases.",
        "high": "AI performance, risk, exceptions and automated execution are systematically governed.",
        "actions": [
          "Define AI ownership and human approval points",
          "Set validation, exception and escalation controls",
          "Monitor AI performance and risk continuously"
        ]
      },
      "integration": {
        "low": "AI sits outside normal work as experiments or isolated tools.",
        "mid": "AI supports selected WEM workflows as part of normal operations.",
        "high": "Validated AI-driven workflows operate across WEM with humans focused on exceptions and control.",
        "actions": [
          "Embed proven AI assistance into a small number of workflows",
          "Define handoffs between AI recommendations and human action",
          "Expand workflow automation only after validation"
        ]
      },
      "measurement": {
        "low": "AI performance and business value are not formally measured.",
        "mid": "Accuracy, adoption and selected outcomes are measured for defined use cases.",
        "high": "AI performance and business outcomes are continuously monitored and used to improve models and workflows.",
        "actions": [
          "Define success measures before scaling AI",
          "Track accuracy, adoption, exceptions and business outcomes",
          "Use measurement to refine models, workflows and governance"
        ]
      }
    }
  },
  "benefits": [
    {
      "id": "CX01",
      "family": "CX Strategy",
      "name": "Reduced Customer Churn",
      "conservative": "1.0%",
      "likely": "2.0%",
      "optimistic": "3.0%",
      "eligibility": "Retention/churn is a stated business issue and customer/revenue inputs are available",
      "guardrail": "Directional only unless customer base, churn and value inputs are supplied",
      "source": "Benefits deck"
    },
    {
      "id": "EX01",
      "family": "Employee Experience",
      "name": "Reduced Agent Turnover",
      "conservative": "10%",
      "likely": "20%",
      "optimistic": "30%",
      "eligibility": "Attrition/engagement pain; agent population and turnover economics available",
      "guardrail": "Use only where turnover is material",
      "source": "Deep Dive evidence"
    },
    {
      "id": "EX02",
      "family": "Employee Experience",
      "name": "Reduced Inbound Agent Turnover",
      "conservative": "0.8%",
      "likely": "1.8%",
      "optimistic": "2.6%",
      "eligibility": "Inbound attrition/engagement pain",
      "guardrail": "Use when inbound agent population is relevant",
      "source": "Benefits deck"
    },
    {
      "id": "EP01",
      "family": "Employee Performance",
      "name": "Improved Agent Adherence with Gamification",
      "conservative": "6.0%",
      "likely": "10.0%",
      "optimistic": "14.0%",
      "eligibility": "EP/gamification opportunity + adherence pain",
      "guardrail": "Do not imply gamification alone guarantees adherence lift",
      "source": "Benefits deck"
    },
    {
      "id": "EP02",
      "family": "Employee Performance",
      "name": "Reduced Training Cost with Gamification",
      "conservative": "15.0%",
      "likely": "25.0%",
      "optimistic": "35.0%",
      "eligibility": "Training cost/engagement use case",
      "guardrail": "Needs training volume/cost context for monetary value",
      "source": "Benefits deck"
    },
    {
      "id": "EP03",
      "family": "Employee Performance",
      "name": "Reduced Employee Performance Administration Effort",
      "conservative": "30.0%",
      "likely": "45.0%",
      "optimistic": "60.0%",
      "eligibility": "Manual performance administration / coaching overhead",
      "guardrail": "Good directional card for EP admin-effort finding",
      "source": "Benefits deck"
    },
    {
      "id": "EP04",
      "family": "Employee Performance",
      "name": "Improved Agent Productivity",
      "conservative": "8%",
      "likely": "13%",
      "optimistic": "18%",
      "eligibility": "Performance/engagement use case with productivity pain",
      "guardrail": "Selected-customer/internal evidence; do not imply universal result",
      "source": "Deep Dive evidence"
    },
    {
      "id": "EP05",
      "family": "Employee Performance",
      "name": "Improved First Contact Resolution through Performance & Engagement",
      "conservative": "8%",
      "likely": "13%",
      "optimistic": "18%",
      "eligibility": "Performance/coaching use case tied to repeat contacts/FCR",
      "guardrail": "Selected-customer/internal evidence; use only when FCR is relevant",
      "source": "Deep Dive evidence"
    },
    {
      "id": "EP06",
      "family": "Employee Performance",
      "name": "Improved NPS through Performance & Engagement",
      "conservative": "45%",
      "likely": "55%",
      "optimistic": "65%",
      "eligibility": "Performance/engagement use case with explicit CX/NPS objective",
      "guardrail": "High-variance selected-customer/internal evidence; use sparingly",
      "source": "Deep Dive evidence"
    },
    {
      "id": "WFM01",
      "family": "WFM",
      "name": "Improved Agent Adherence",
      "conservative": "5.0%",
      "likely": "10.0%",
      "optimistic": "15.0%",
      "eligibility": "Adherence/scheduling discipline gap",
      "guardrail": "Relevant to WFM planning/adherence actions",
      "source": "Benefits deck"
    },
    {
      "id": "WFM02",
      "family": "WFM",
      "name": "Improved Inbound Agent Occupancy",
      "conservative": "8.5%",
      "likely": "10.0%",
      "optimistic": "11.5%",
      "eligibility": "Occupancy/staffing efficiency pain",
      "guardrail": "Use carefully; occupancy should not be optimised in isolation",
      "source": "Benefits deck"
    },
    {
      "id": "WFM03",
      "family": "WFM",
      "name": "Reduced Inbound Agent Overstaffing",
      "conservative": "10.0%",
      "likely": "15.0%",
      "optimistic": "20.0%",
      "eligibility": "Overstaffing/capacity planning issue",
      "guardrail": "Requires staffing/volume economics for dollars",
      "source": "Benefits deck"
    },
    {
      "id": "WFM04",
      "family": "WFM",
      "name": "Improved Intra-Day Management Time",
      "conservative": "12.0%",
      "likely": "15.0%",
      "optimistic": "18.0%",
      "eligibility": "Intraday firefighting/manual management is evidenced",
      "guardrail": "Strong fit for reactive intraday finding",
      "source": "Benefits deck"
    },
    {
      "id": "WFM05",
      "family": "WFM",
      "name": "Reduced Overtime Costs",
      "conservative": "30.0%",
      "likely": "40.0%",
      "optimistic": "50.0%",
      "eligibility": "Overtime is material and linked to planning/coverage gaps",
      "guardrail": "Use only when existing assessment context supports it",
      "source": "Benefits deck"
    },
    {
      "id": "WFM06",
      "family": "WFM",
      "name": "Reduced Supervisor Administration Cost",
      "conservative": "39.7%",
      "likely": "46.7%",
      "optimistic": "53.7%",
      "eligibility": "Manual WFM/supervisor administration burden",
      "guardrail": "Use when admin effort is evidenced",
      "source": "Benefits deck"
    },
    {
      "id": "WFM07",
      "family": "WFM",
      "name": "Improved Service Levels",
      "conservative": "80%",
      "likely": "88%",
      "optimistic": "96%",
      "eligibility": "WFM planning/scheduling/service-level pain",
      "guardrail": "Selected-customer/internal evidence; not a generic expected outcome",
      "source": "Deep Dive evidence"
    },
    {
      "id": "WFM08",
      "family": "WFM",
      "name": "Reduced Handle Time through Workforce Optimization",
      "conservative": "4%",
      "likely": "5%",
      "optimistic": "6%",
      "eligibility": "WFM/work allocation finding with handling-efficiency relevance",
      "guardrail": "Selected-customer/internal evidence; do not imply WFM universally reduces AHT",
      "source": "Deep Dive evidence"
    },
    {
      "id": "QM01",
      "family": "Quality Management",
      "name": "Improved First Contact Resolution",
      "conservative": "4.0%",
      "likely": "6.0%",
      "optimistic": "8.0%",
      "eligibility": "Quality findings/coaching can plausibly affect repeat contacts/FCR",
      "guardrail": "Do not show solely because QM maturity is low",
      "source": "Benefits deck"
    },
    {
      "id": "QM02",
      "family": "Quality Management",
      "name": "Reduced Quality Evaluation Time",
      "conservative": "22.0%",
      "likely": "35.0%",
      "optimistic": "48.0%",
      "eligibility": "Manual evaluation/coverage constraint; AI-assisted evaluation is relevant",
      "guardrail": "Strong candidate for mature traditional QA / limited scale; corroborated by Deep Dive",
      "source": "Benefits + Deep Dive"
    },
    {
      "id": "QM03",
      "family": "Quality Management",
      "name": "Improved Coaching Quality Evaluation Time",
      "conservative": "15.0%",
      "likely": "20.0%",
      "optimistic": "25.0%",
      "eligibility": "Coaching/evaluation workflow efficiency is a stated issue",
      "guardrail": "Use when coaching linkage is part of finding",
      "source": "Benefits deck"
    },
    {
      "id": "QM04",
      "family": "Quality Management",
      "name": "Reduced Quality Management Administration Effort",
      "conservative": "35.0%",
      "likely": "47.0%",
      "optimistic": "62.0%",
      "eligibility": "Manual QM administration burden",
      "guardrail": "Use when admin/manual effort is evidenced",
      "source": "Benefits deck"
    },
    {
      "id": "QM05",
      "family": "Quality Management",
      "name": "Improved CSAT",
      "conservative": "15%",
      "likely": "20%",
      "optimistic": "25%",
      "eligibility": "Quality program finding with explicit CSAT/CX objective",
      "guardrail": "Selected-customer/internal evidence; avoid stacking with other generic CX claims",
      "source": "Deep Dive evidence"
    },
    {
      "id": "QM06",
      "family": "Quality Management",
      "name": "Reduced Critical Failures",
      "conservative": "55%",
      "likely": "69%",
      "optimistic": "80%",
      "eligibility": "Compliance/critical-error finding",
      "guardrail": "Selected-customer/internal evidence; only where critical-failure metric is relevant",
      "source": "Deep Dive evidence"
    },
    {
      "id": "STA01",
      "family": "Speech & Text Analytics",
      "name": "Reduced Handle Time with Analytics",
      "conservative": "6.7%",
      "likely": "9.2%",
      "optimistic": "10.5%",
      "eligibility": "Analytics can identify causes/behaviours affecting AHT",
      "guardrail": "Use when AHT/efficiency is relevant",
      "source": "Benefits deck"
    },
    {
      "id": "STA02",
      "family": "Speech & Text Analytics",
      "name": "Improved First Contact Resolution",
      "conservative": "4.0%",
      "likely": "6.0%",
      "optimistic": "8.0%",
      "eligibility": "Repeat contact/root-cause use case",
      "guardrail": "Requires FCR/repeat-contact relevance",
      "source": "Benefits deck"
    },
    {
      "id": "STA03",
      "family": "Speech & Text Analytics",
      "name": "Reduced Interaction Volume",
      "conservative": "3.0%",
      "likely": "5.0%",
      "optimistic": "7.0%",
      "eligibility": "Analytics/root cause can reduce avoidable contacts",
      "guardrail": "Use where avoidable/repeat volume is a stated pain",
      "source": "Benefits deck"
    },
    {
      "id": "STA04",
      "family": "Speech & Text Analytics",
      "name": "Improved Conversion Rates",
      "conservative": "2.0%",
      "likely": "4.0%",
      "optimistic": "6.0%",
      "eligibility": "Sales/conversion use case for inbound interactions",
      "guardrail": "Only for sales-oriented operations",
      "source": "Benefits deck"
    },
    {
      "id": "STA05",
      "family": "Speech & Text Analytics",
      "name": "Improved Outbound Conversion Rates",
      "conservative": "2.0%",
      "likely": "4.0%",
      "optimistic": "6.0%",
      "eligibility": "Outbound sales/conversion use case",
      "guardrail": "Only for outbound sales operations",
      "source": "Benefits deck"
    },
    {
      "id": "STA06",
      "family": "Speech & Text Analytics",
      "name": "Reduced Outbound Average Handle Time",
      "conservative": "4.0%",
      "likely": "8.0%",
      "optimistic": "12.0%",
      "eligibility": "Outbound efficiency/AHT use case",
      "guardrail": "Only where outbound handling time matters",
      "source": "Benefits deck"
    },
    {
      "id": "STA07",
      "family": "Speech & Text Analytics",
      "name": "Improved Quality Scores",
      "conservative": "8%",
      "likely": "12%",
      "optimistic": "16%",
      "eligibility": "STA insight-to-action use case tied to quality",
      "guardrail": "Selected-customer/internal evidence; avoid stacking with overlapping QM quality benefit",
      "source": "Deep Dive evidence"
    },
    {
      "id": "STA08",
      "family": "Speech & Text Analytics",
      "name": "Reduced Critical Failures",
      "conservative": "55%",
      "likely": "69%",
      "optimistic": "80%",
      "eligibility": "STA/compliance/risk detection use case",
      "guardrail": "Only when critical failures/compliance are relevant",
      "source": "Deep Dive evidence"
    },
    {
      "id": "STA09",
      "family": "Speech & Text Analytics",
      "name": "Improved Service Level / Quality",
      "conservative": "3%",
      "likely": "5%",
      "optimistic": "7%",
      "eligibility": "STA insight-to-action use case tied to operational performance",
      "guardrail": "Selected-customer/internal evidence; avoid duplicate quality claims",
      "source": "Deep Dive evidence"
    },
    {
      "id": "VS01",
      "family": "Virtual Supervisor",
      "name": "Reduced Supervisor Evaluation Effort with AI-Translate",
      "conservative": "17.0%",
      "likely": "20.0%",
      "optimistic": "25.0%",
      "eligibility": "Multilingual evaluation / translation effort",
      "guardrail": "Only if multilingual evaluation is relevant",
      "source": "Benefits deck"
    },
    {
      "id": "VS02",
      "family": "Virtual Supervisor",
      "name": "Reduced Administration Costs with Virtual Supervisor",
      "conservative": "32.7%",
      "likely": "37.7%",
      "optimistic": "42.5%",
      "eligibility": "Supervisor/admin burden + Virtual Supervisor use case",
      "guardrail": "Requires suitable AI readiness",
      "source": "Benefits deck"
    },
    {
      "id": "VS03",
      "family": "Virtual Supervisor",
      "name": "Reduced Administration Costs with Supervisor Copilot",
      "conservative": "32.7%",
      "likely": "37.7%",
      "optimistic": "42.5%",
      "eligibility": "Supervisor/admin burden + Copilot use case",
      "guardrail": "Requires suitable AI readiness and product use case",
      "source": "Benefits deck"
    },
    {
      "id": "VS04",
      "family": "Virtual Supervisor / AI Scoring",
      "name": "Reduced Interaction Review Time with AI Scoring",
      "conservative": "30%",
      "likely": "40%",
      "optimistic": "50%",
      "eligibility": "AI summary/insight/review workflow is relevant",
      "guardrail": "Selected-customer/internal evidence; distinct from evaluation-time model",
      "source": "Deep Dive evidence"
    },
    {
      "id": "REC01",
      "family": "Recording",
      "name": "Reduced Recording Administration Cost",
      "conservative": "40%",
      "likely": "47%",
      "optimistic": "55%",
      "eligibility": "Recording lifecycle, retention, export or administration burden",
      "guardrail": "Selected-customer/internal evidence; use only when recording admin burden is evidenced",
      "source": "Deep Dive evidence"
    },
    {
      "id": "REC02",
      "family": "Recording",
      "name": "Reduced Handle Time Associated with Recording",
      "conservative": "9%",
      "likely": "11%",
      "optimistic": "13%",
      "eligibility": "Recording/process review use case with handling inefficiency",
      "guardrail": "Selected-customer/internal evidence; causal pathway must fit finding",
      "source": "Deep Dive evidence"
    },
    {
      "id": "RTS01",
      "family": "Real-time Supervision",
      "name": "Supervisor Productivity Time Savings",
      "conservative": "10%",
      "likely": "15%",
      "optimistic": "20%",
      "eligibility": "Live monitoring/coaching/barge-in and supervisor workload pain",
      "guardrail": "Selected-customer/internal evidence; not guaranteed productivity improvement",
      "source": "Deep Dive evidence"
    },
    {
      "id": "RTS02",
      "family": "Real-time Supervision",
      "name": "Improved Service Level / Quality through Live Supervision",
      "conservative": "3%",
      "likely": "5%",
      "optimistic": "7%",
      "eligibility": "Real-time intervention is relevant to service or quality pain",
      "guardrail": "Selected-customer/internal evidence; avoid stacking with other service-level claims",
      "source": "Deep Dive evidence"
    },
    {
      "id": "TEMPO01",
      "family": "WFM / Tempo",
      "name": "Reduced PTO Administration Effort",
      "conservative": "320 hours",
      "likely": "400 hours",
      "optimistic": "480 hours",
      "eligibility": "Self-service PTO/request approval administration burden",
      "guardrail": "Selected-customer/internal evidence; show as an example, not a guaranteed savings",
      "source": "Deep Dive evidence"
    }
  ],
  "benefitMap": {
    "qm": {
      "evaluation": [
        "QM02",
        "QM04"
      ],
      "prioritisation": [
        "QM02"
      ],
      "coaching": [
        "QM03",
        "QM01"
      ],
      "governance": [
        "QM06"
      ],
      "continuous_improvement": [
        "QM05"
      ]
    },
    "sta": {
      "coverage": [
        "STA03"
      ],
      "taxonomy": [
        "STA01"
      ],
      "kpi_alignment": [
        "STA02"
      ],
      "insight_action": [
        "STA01",
        "STA02",
        "STA03"
      ],
      "ai_governance": [
        "STA07",
        "STA09"
      ]
    },
    "wfm": {
      "forecasting": [
        "WFM03",
        "WFM07"
      ],
      "scheduling": [
        "WFM01",
        "WFM02"
      ],
      "intraday": [
        "WFM04",
        "WFM05"
      ],
      "flexibility": [
        "WFM01",
        "TEMPO01"
      ],
      "continuous_optimisation": [
        "WFM06",
        "WFM07"
      ]
    },
    "ep": {
      "visibility": [
        "EP03"
      ],
      "coaching": [
        "EP03"
      ],
      "learning": [
        "EP02"
      ],
      "recognition": [
        "EP01",
        "EX01"
      ],
      "intelligence": [
        "EP04",
        "EP05"
      ]
    },
    "ai": {
      "use_case_clarity": [
        "VS03"
      ],
      "trust": [
        "VS03"
      ],
      "governance": [
        "VS02"
      ],
      "integration": [
        "RTS01"
      ],
      "measurement": [
        "VS03"
      ]
    }
  },
  "services": [
    {
      "id": "WTRC",
      "service": "WEM Transformation Readiness Consulting",
      "discipline": "All WEM",
      "type": "Advisory / transformation readiness",
      "trigger": "New logo, migration or expansion; OR cross-discipline maturity gaps, unclear KPI/process ownership, weak readiness, conflicting priorities, repeated high-severity pain points, or unclear sequencing/value pathway.",
      "exclude": "Customer has a clearly scoped single use case, sufficient readiness and no material operating-model/value-pathway ambiguity.",
      "journey": "Planning / exploring / pre-deployment; also live/expanding where cross-WEM consultation is needed.",
      "scope": "150h standard engagement"
    },
    {
      "id": "EWT",
      "service": "Enterprise WEM Transformation",
      "discipline": "All WEM",
      "type": "Enterprise transformation",
      "trigger": "Large enterprise migration to Genesys Cloud WEM; multiple LOBs/regions; future-state operating model + migration + adoption",
      "exclude": "Small/simple deployment; isolated optimisation issue",
      "journey": "Planning / implementing / migration",
      "scope": "Custom quote"
    },
    {
      "id": "WFM_OPT",
      "service": "WFM Optimization Review",
      "discipline": "WFM",
      "type": "Review / value recovery",
      "trigger": "Live Genesys WFM; low adoption; manual workarounds; forecasting/scheduling/coverage pain; AI-readiness pressure",
      "exclude": "Customer needs initial deployment or managed administration",
      "journey": "Live / early adoption; optimising",
      "scope": "60h"
    },
    {
      "id": "WFM_MENTOR",
      "service": "WFM Mentoring Engagement",
      "discipline": "WFM",
      "type": "Mentoring / continuous improvement",
      "trigger": "Live WFM; under-realised value; adoption, automation, capacity planning, forecasting/scheduling maturity gaps",
      "exclude": "Customer needs deployment/configuration build-out only",
      "journey": "Live / optimising",
      "scope": "120h / up to 6 months"
    },
    {
      "id": "QMSTA_OPT",
      "service": "QM/STA Optimization Review",
      "discipline": "QM + STA",
      "type": "Review / value recovery",
      "trigger": "Live QM/STA; quality, calibration, insight, coaching or adoption gaps; need prioritised action plan",
      "exclude": "Customer needs new deployment or managed analytics",
      "journey": "Live / early adoption; optimising",
      "scope": "80h"
    },
    {
      "id": "QMSTA_MENTOR",
      "service": "QM/STA Mentoring Engagement",
      "discipline": "QM + STA",
      "type": "Mentoring / continuous improvement",
      "trigger": "Live QM/STA; repeatable insight-to-action gaps; AI-quality readiness; coaching linkage; ongoing SME support",
      "exclude": "Customer only needs one-off assessment or initial deployment",
      "journey": "Live / optimising",
      "scope": "130h / up to 6 months"
    },
    {
      "id": "ROUTING",
      "service": "WEM Routing Review",
      "discipline": "Primarily WFM",
      "type": "Advisory review",
      "trigger": "Routing/queue/flow design affecting WFM fit, forecasting or operational performance",
      "exclude": "No routing/queue issue evidenced",
      "journey": "Planning or live",
      "scope": "120h"
    },
    {
      "id": "WE01_QM",
      "service": "WE01 – Quality Management",
      "discipline": "QM",
      "type": "Guided configuration / deployment",
      "trigger": "Customer is deploying Genesys Recording + QM and needs guided configuration",
      "exclude": "Live Genesys QM with optimisation-only need",
      "journey": "Planning / implementing",
      "scope": "40–68h seat-size dependent"
    },
    {
      "id": "WE01_SURVEY",
      "service": "WE01 – Survey (Web or Voice)",
      "discipline": "Survey / CX",
      "type": "Guided configuration / deployment",
      "trigger": "Customer needs Genesys post-interaction survey capability",
      "exclude": "No survey use case identified",
      "journey": "Planning / implementing",
      "scope": "Web 24h; Voice 56h"
    },
    {
      "id": "WE01_STA",
      "service": "WE01 – Speech & Text Analytics",
      "discipline": "STA",
      "type": "Guided configuration / deployment",
      "trigger": "Customer is deploying STA and needs KPI-led configuration, topics/phrases and insight adoption",
      "exclude": "Live STA with optimisation-only need",
      "journey": "Planning / implementing",
      "scope": "80h"
    },
    {
      "id": "WE01_SUPAI",
      "service": "WE01 – Supervisor AI",
      "discipline": "STA + AI",
      "type": "Guided configuration / deployment",
      "trigger": "Customer is deploying STA + Supervisor AI and needs KPI-led configuration and supervisor readiness",
      "exclude": "AI governance/foundations too weak; no Supervisor AI use case",
      "journey": "Planning / implementing",
      "scope": "150h"
    },
    {
      "id": "WE02_WFM",
      "service": "WE02 – Workforce Management",
      "discipline": "WFM",
      "type": "Guided configuration / deployment",
      "trigger": "Customer is deploying Genesys WFM; needs outcome-led forecasting, scheduling and go-live readiness",
      "exclude": "Live WFM with value/adoption issue only",
      "journey": "Planning / implementing",
      "scope": "55–250h seat-size dependent"
    },
    {
      "id": "WE03_EP",
      "service": "WE03 – Employee Performance",
      "discipline": "Employee Performance",
      "type": "Guided configuration / deployment",
      "trigger": "Customer is deploying gamification, coaching and learning / employee performance capabilities",
      "exclude": "No EP use case; live capability only needs optimisation",
      "journey": "Planning / implementing",
      "scope": "24–32h seat-size dependent"
    },
    {
      "id": "HRIS",
      "service": "HRIS Integration",
      "discipline": "WFM",
      "type": "Specialist integration",
      "trigger": "Need WFM/HR system integration such as time-off/balance workflow",
      "exclude": "No HRIS integration requirement",
      "journey": "Implementing / live",
      "scope": "Custom quote"
    },
    {
      "id": "WF_QM",
      "service": "Customised Workflows – QM",
      "discipline": "QM",
      "type": "Specialist workflow",
      "trigger": "Defined QM/QAC workflow automation need beyond standard guided configuration",
      "exclude": "No specific workflow need",
      "journey": "Implementing / live",
      "scope": "Custom quote"
    },
    {
      "id": "WF_WFM",
      "service": "Customised Workflows – WFM",
      "discipline": "WFM",
      "type": "Specialist workflow",
      "trigger": "Defined WFM workflow automation need beyond standard guided configuration",
      "exclude": "No specific workflow need",
      "journey": "Implementing / live",
      "scope": "Custom quote"
    },
    {
      "id": "AI_QM_120",
      "service": "AI-Enabled Quality Management Readiness & Validation",
      "discipline": "QM + AI",
      "type": "Advisory / validation",
      "trigger": "QM + STA enabled; customer needs AI quality operating model, human/AI calibration, controlled validation and rollout roadmap",
      "exclude": "QM/STA not enabled; customer needs enterprise-wide deployment rather than controlled validation",
      "journey": "Live / optimising / AI expansion",
      "scope": "120h"
    },
    {
      "id": "AI_QM_PILOT",
      "service": "AI-Enabled Quality Management Pilot",
      "discipline": "QM + AI",
      "type": "Pilot / validation",
      "trigger": "Customer wants a focused low-risk AI scoring pilot with design, configuration, human-vs-AI validation and rollout recommendations",
      "exclude": "Governance/foundation absent or no AI quality ambition",
      "journey": "Live / optimising / AI expansion",
      "scope": "Focused pilot; scope-dependent"
    }
  ],
  "serviceRules": {
    "planning": {
      "qm": [
        "WE01_QM",
        "WTRC"
      ],
      "sta": [
        "WE01_STA",
        "WTRC"
      ],
      "wfm": [
        "WE02_WFM",
        "WTRC"
      ],
      "ep": [
        "WE03_EP",
        "WTRC"
      ]
    },
    "implementing": {
      "qm": [
        "WE01_QM",
        "WTRC"
      ],
      "sta": [
        "WE01_STA",
        "WE01_SUPAI"
      ],
      "wfm": [
        "WE02_WFM",
        "WTRC"
      ],
      "ep": [
        "WE03_EP",
        "WTRC"
      ]
    },
    "live": {
      "qm": [
        "QMSTA_OPT",
        "QMSTA_MENTOR"
      ],
      "sta": [
        "QMSTA_OPT",
        "QMSTA_MENTOR"
      ],
      "wfm": [
        "WFM_OPT",
        "WFM_MENTOR"
      ],
      "ep": [
        "WEM_MENTOR",
        "WTRC"
      ]
    },
    "optimising": {
      "qm": [
        "QMSTA_MENTOR",
        "AI_QM_120"
      ],
      "sta": [
        "QMSTA_MENTOR",
        "WE01_SUPAI"
      ],
      "wfm": [
        "WFM_MENTOR",
        "WFM_OPT"
      ],
      "ep": [
        "WEM_MENTOR",
        "WTRC"
      ]
    },
    "ai": {
      "qm": [
        "AI_QM_120",
        "AI_QM_PILOT"
      ],
      "sta": [
        "WE01_SUPAI",
        "QMSTA_MENTOR"
      ],
      "wfm": [
        "WFM_MENTOR",
        "WTRC"
      ],
      "ep": [
        "WEM_MENTOR",
        "WTRC"
      ]
    },
    "not_genesys": {
      "qm": [
        "WTRC",
        "WE01_QM"
      ],
      "sta": [
        "WTRC",
        "WE01_STA"
      ],
      "wfm": [
        "WTRC",
        "WE02_WFM"
      ],
      "ep": [
        "WTRC",
        "WE03_EP"
      ]
    }
  },
  "industries": [
    "Financial Services / Banking",
    "Insurance",
    "Retail / eCommerce",
    "Telecommunications",
    "Healthcare / Pharma",
    "BPO / Outsourcing",
    "Travel & Hospitality",
    "Government / Public Sector",
    "Utilities / Energy",
    "Other / Cross-industry"
  ],
  "sizes": [
    "0 - 499",
    "500 - 999",
    "1000 - 1999",
    "2000 - 5000",
    "5000+"
  ],
  "leadEndpoint": "https://wem-navigator-api.kieron-wrigley.workers.dev/api/assessment",
  "journeys": [
    {
      "id": "planning",
      "label": "Exploring / planning Genesys WEM"
    },
    {
      "id": "implementing",
      "label": "Implementing Genesys WEM"
    },
    {
      "id": "live",
      "label": "Recently live / early adoption"
    },
    {
      "id": "optimising",
      "label": "Established Genesys customer - optimising"
    },
    {
      "id": "ai",
      "label": "Expanding AI / advanced WEM"
    },
    {
      "id": "not_genesys",
      "label": "Not currently using Genesys"
    }
  ],
  "pains": [
    {
      "id": "manual_effort",
      "label": "Too many manual tasks / dashboards to check"
    },
    {
      "id": "coaching",
      "label": "Coaching takes too long or is inconsistent"
    },
    {
      "id": "qa_coverage",
      "label": "QA backlog / limited quality coverage"
    },
    {
      "id": "analytics_action",
      "label": "Hard to spot trends before they become problems"
    },
    {
      "id": "staffing",
      "label": "Forecasts and schedules aren't accurate enough"
    },
    {
      "id": "intraday",
      "label": "Managers react too late / intraday firefighting"
    },
    {
      "id": "engagement",
      "label": "Hard to identify who needs support quickly"
    },
    {
      "id": "disconnected",
      "label": "Too many disconnected tools / data"
    },
    {
      "id": "ai_governance",
      "label": "Unsure where AI should help / governance"
    },
    {
      "id": "visibility",
      "label": "Poor visibility into what's really happening"
    }
  ],
  "funFacts": [
    "More evaluation coverage is not automatically more mature - the differentiator is whether findings consistently change coaching and performance.",
    "Mature WFM is moving from build-the-schedule to continuously balancing demand, employee flexibility and business outcomes.",
    "More automation is not always the next step. Governance and trust can be the real maturity constraint.",
    "Conversation analytics creates the most value when insight has a clear owner, action and outcome measure.",
    "AI readiness is assessed separately from WEM maturity: a strong process can be mature before AI is widely adopted."
  ]
  ,"aiBenchmarks": {
    "Financial Services / Banking": 58,
    "Insurance": 55,
    "Retail / eCommerce": 48,
    "Telecommunications": 62,
    "Healthcare / Pharma": 45,
    "BPO / Outsourcing": 60,
    "Travel & Hospitality": 45,
    "Government / Public Sector": 40,
    "Utilities / Energy": 50,
    "Other / Cross-industry": 50
  }
};
// Track 8 v1.2: non-scored future priorities used only to sharpen prioritisation.
window.WEM_CONFIG.futurePriorities = [
  {id:'cx',label:'Improve customer experience'},
  {id:'employee',label:'Improve employee engagement'},
  {id:'efficiency',label:'Reduce cost / effort'},
  {id:'productivity',label:'Increase productivity'},
  {id:'quality',label:'Improve quality & compliance'},
  {id:'attrition',label:'Reduce attrition'},
  {id:'workforce',label:'Improve workforce planning'},
  {id:'visibility',label:'Improve management visibility'},
  {id:'ai',label:'Adopt AI effectively'}
];
