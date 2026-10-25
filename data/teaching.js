// "AI education and programme leadership" on /talks: the two programmes I
// lead or teach, in detail. Facts come from the user's own write-ups, the
// course-content source pack and The AI Colony Academy course page.
export const teachingIntro = [
  "I design and facilitate learning experiences that help people apply AI with sound judgement. My work spans the business decisions behind AI adoption and the engineering practices needed to build reliable software with AI.",
  "At the Consulting Club of Lagos, I lead the AI/ML Track, helping emerging consultants connect AI capabilities to organisational needs, measurable value and responsible implementation. At The AI Colony Academy, I teach AI for Software Engineering, helping learners direct AI tools, evaluate their outputs and stay responsible for the systems they build.",
];

export const programmes = [
  {
    id: "ccl-ai-ml-track",
    org: "Consulting Club of Lagos",
    role: "Head of the AI/ML Track",
    period: "Mar 2026 – present",
    summary:
      "I lead the development and delivery of the club's AI/ML learning experience: curriculum planning, teaching, practical assignment design, speaker preparation, and guidance on turning what members learn into consulting recommendations.",
    quoteLabel: "The question behind the track",
    quote: "What does an organisation need to understand before investing in AI?",
    lede: "I help members move from understanding AI concepts to evaluating business problems, assessing organisational readiness, comparing opportunities and communicating recommendations to decision-makers.",
    doLabel: "What I do",
    does: [
      { label: "Shape the programme", text: "Connect AI strategy, data, machine learning, product thinking, governance, architecture and financial value into one coherent learning journey." },
      { label: "Teach and facilitate", text: "Explain technical and strategic concepts through business examples, guided exercises, discussion and executive-style questioning." },
      { label: "Build the materials", text: "Prepare teaching decks, facilitator notes, worksheets, case briefs, assignments and assessment criteria." },
      { label: "Guide consulting practice", text: "Help members frame problems, separate evidence from assumptions, prioritise opportunities and defend their recommendations." },
      { label: "Prepare practitioners", text: "Brief each guest speaker on session objectives and connect their expertise to the programme's learning goals and assignments." },
      { label: "Develop executive communication", text: "Push for clear recommendations that state the proposed action, expected value, constraints, risks and the evidence still needed." },
    ],
    cycles: [
      {
        name: "Fall 2026",
        current: true,
        title: "One AI transformation engagement, end to end",
        body: [
          "This cycle runs as a single consulting engagement over eleven weeks, from strategy and problem framing through machine learning options, data readiness, generative AI products, use-case prioritisation, responsible AI, solution architecture and implementation planning to executive communication. Each weekly assignment adds to one final recommendation.",
          "It culminates in an executive presentation and consulting report, backed by a readiness assessment, prioritised opportunities, a business case, a risk register and an implementation roadmap, with a Demo Day on 14 January 2027.",
          "I facilitated the kickoff and first session on 22 October, introducing AI strategy, competitive advantage and the consultant mindset, with members working through client understanding and hypothesis development for a fictional retailer. The emphasis is decision-level technical understanding: enough to challenge assumptions, work with specialists and judge feasibility. Hands-on model building is outside this cycle's assessed scope.",
        ],
      },
      {
        name: "Summer 2026",
        title: "Foundations and consulting judgement",
        body: [
          "The summer cycle covered AI and data fundamentals, machine learning workflows, AI product thinking, generative AI, responsible AI, strategy and infrastructure, with practical exercises tying each subject to organisational problems.",
          "I facilitated AI Strategy and Organisational Readiness, where members used the 6P framework (Problem, People, Process, Platform, Protection, Performance) to assess realistic scenarios and defend whether an initiative should proceed, be piloted, delayed, redesigned or rejected. I also ran AI Use Case Discovery and Prioritisation, an industry challenge sprint across banking, healthcare, education and retail that ended in a simulated executive discussion.",
          "Both sessions trained a better question than “Can we use AI?”: “Where should we use it, under what conditions, and why?”",
        ],
      },
    ],
  },
  {
    id: "ai-for-software-engineering",
    org: "The AI Colony Academy",
    role: "Instructor, AI for Software Engineering",
    period: "Jul 2026 – present",
    href: "https://www.theaicolonyacademy.com/courses/ai-for-swe",
    summary:
      "I built and teach an eight-week course on using AI within a disciplined software engineering process: understanding the problem, defining clear requirements, controlling what an agent can do and checking its work against evidence.",
    quoteLabel: "My teaching principle",
    quote: "AI can propose and implement; the engineer remains responsible for the requirements, decisions and evidence of correctness.",
    lede: "The first cohort follows an eight-week path through foundations, prompting, in-editor tools, agentic workflows, context, specifications, quality, shipping and team practice, with weekly checkpoints and a capstone. I recorded the course myself and teach two live sessions a week: Tuesday on directing AI tools and agents, Saturday on the engineering principles behind good software.",
    doLabel: "My teaching focus",
    does: [
      { label: "AI systems and their limits", text: "Models, context windows, non-determinism and agent loops through accessible examples, and how missing context, unreliable retrieval, compounding errors and over-trust affect software work." },
      { label: "Directing agents", text: "Choosing a focused toolset, separating read operations from write operations, deciding which actions need approval, and reading tool-call traces. An agent's claim that something works must be backed by an appropriate check." },
      { label: "Engineering fundamentals", text: "Abstraction, interface contracts, naming, data modelling, state transitions, database constraints and error handling: what belongs in the database, what belongs in application logic, and what each component promises its callers." },
      { label: "Requirements to implementation", text: "A continuing room-reservation project, built together across sessions, for working through booking rules, overlapping requests, cancellation, access permissions, API behaviour and interface design, tracing requirements into contracts, constraints, tests and screens." },
      { label: "Independent judgement", text: "Questions, practicals and checkpoint work that ask learners to explain their decisions, spot unchecked claims and name what is still unverified." },
    ],
  },
];
