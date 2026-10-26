// Long-form case studies under /engineering/[slug].
// Welfare CRM evidence and claim boundaries: design/welfare-crm-case-study-sources.md.
// GTCO Portal evidence and attribution: design/gtco-summer-portal-case-study-sources.md.
// Legacy Archive evidence: design/legacy-archive-case-study-sources.md.
export const caseStudies = {
  aidcare: {
    title: "AidCare",
    productUrl: "https://aidcare.pidoxy.com",
    headline: "Know how urgent it is, and where to go.",
    lede: "A clinical AI platform for Nigerian frontline care: safer triage, clearer referrals and clinician review for community health workers, with public triage and training for everyone else.",
    status: "Live",
    kicker: "AidCare · Clinical decision support",
    ctas: [
      { label: "Visit aidcare.pidoxy.com", href: "https://aidcare.pidoxy.com", variant: "primary" },
      { label: "Try public triage", href: "https://aidcare.pidoxy.com/triage", variant: "secondary" },
    ],
    details: [
      { k: "Role", v: "Founder & AI/ML Engineer" },
      { k: "Timeline", v: "May 2025 – present" },
      { k: "Live at", v: "aidcare.pidoxy.com" },
      { k: "Languages", v: "English · Hausa · Yoruba · Igbo · Pidgin" },
      { k: "Stack", v: "Next.js · FastAPI · Voice · RBAC" },
    ],
    hero: { src: "/images/work/aidcare.jpg", alt: "AidCare landing page beside the community health worker home screen", caption: "aidcare.pidoxy.com: landing and the community health worker home screen." },
    readouts: [
      { label: "Clinical modes", value: "2", caption: "CHW triage and clinical support" },
      { label: "Languages", value: "5", caption: "English, Hausa, Yoruba, Igbo, Pidgin" },
      { label: "Workflow", value: "NSO", caption: "grounded workflow (as described on the AidCare site)" },
      { label: "Diagnosis claims", value: "0", caption: "decision support, not diagnosis" },
    ],
    sections: [
      { id: "problem", label: "The problem", body: ["Frontline care in Nigeria runs on community health workers and primary health centres, where specialist knowledge is scarce and infrastructure is unreliable. Patients also need to know how urgent a symptom is before they know where to go."] },
      {
        id: "what",
        label: "What it does",
        rows: [
          { t: "CHW triage mode", d: "Guided consultations for community health workers, with cases routed to clinician review." },
          { t: "Clinical support mode", d: "Grounded clinical guidance alongside the clinician workflow." },
          { t: "Public triage + training", d: "Language-aware public triage and a Community Health Challenge for practice." },
        ],
      },
      { id: "decisions", label: "Engineering decisions", body: ["Public triage and clinician workflows sit beside grounded clinical guidance. Language-aware interaction, including voice, changes the product surface. Offline-friendly safety flows shape the interface, and privacy, access control and auditability decide what can safely ship."] },
      { id: "safety", label: "Safety stance", quote: { text: "“It is decision support, not diagnosis.”", source: "From the AidCare product copy" } },
      {
        id: "along",
        label: "Along the way",
        timeline: [
          {
            when: "Jun 2025",
            title: "AFRETEC-UNILAG Innovation-in-Health Challenge 2025",
            detail: "AidCare was presented among the health-innovation projects at the challenge, alongside teams from LAUTECH, UNIBEN, UNIJOS, the University of Ibadan and McPherson University.",
            links: [{ label: "UNILAG News", href: "https://unilag.edu.ng/team-pharmacode-clinches-first-place-at-the-afretec-unilag-innovation-in-health-challenge-2025/" }],
          },
        ],
      },
      { id: "try", label: "Try it", tryIt: { text: "AidCare is live. The public triage flow needs no account.", href: "https://aidcare.pidoxy.com", label: "Open aidcare.pidoxy.com" } },
    ],
    related: { label: "Related talk", title: "Clinical AI That Survives Production", href: "/speaking" },
    next: { title: "Virtue Foundation Intelligence Platform", href: "/engineering#virtue-foundation-intelligence-platform" },
    prev: { title: "Amala Atlas", href: "/engineering#amala-atlas" },
  },
  "gtco-summer-portal": {
    title: "GTCO Summer Program Portal",
    headline: "From assigned work to reviewed progress.",
    lede: "A multi-role portal for GTCO's summer internship program, connecting curriculum, tasks, submissions, mentorship and scoring. I built the backend, integrated the team's frontend with live APIs, and maintained the system as program requirements evolved.",
    status: "Production",
    kicker: "GTCO · Internship program operations",
    ctas: [
      { label: "Explore the workflow", href: "#workflow", variant: "primary" },
    ],
    details: [
      { k: "Role", v: "Backend engineer & frontend integration" },
      { k: "Context", v: "HabariPay · GTCO Summer Program" },
      { k: "Year", v: "2026" },
      { k: "Stack", v: "NestJS · Next.js · Prisma · PostgreSQL" },
    ],
    hero: {
      src: "/images/work/gtco-summer-portal.svg",
      alt: "Program workflow: administrators publish tasks, interns submit work and attachments, reviewers give feedback, and progress is recorded. A request for changes returns work to the intern for resubmission. Curriculum, mentorship and schedules support the workflow.",
      caption: "Workflow illustration based on the portal. No intern records or internal screens are shown.",
    },
    readouts: [
      { label: "Backend", value: "Built", caption: "domain model, APIs and application logic" },
      { label: "Frontend", value: "Integrated", caption: "team-built screens connected to live APIs" },
      { label: "Review loop", value: "Reopen", caption: "request changes, revise and resubmit" },
      { label: "Delivery", value: "Iterated", caption: "stakeholder feedback throughout the 2026 rollout" },
    ],
    sections: [
      {
        id: "problem",
        label: "The problem",
        body: [
          "Running an internship program means keeping several kinds of work aligned: a shared curriculum, team assignments, mentor check-ins, submissions, reviews and progress reports. Interns need to know what to do next, while managers and administrators need to see what has been completed and what still needs attention.",
          "The portal brings those activities into connected workspaces. An administrator configures the program, an intern works through published tasks, and reviewers give feedback that can lead to another submission. The system had to keep evolving as the program moved from stakeholder testing into use.",
        ],
      },
      {
        id: "contribution",
        label: "My contribution",
        body: [
          "I designed and built the NestJS backend, including the PostgreSQL data model, authentication, program modules and APIs. I then connected the team's Next.js frontend to those APIs, replacing mock authentication and browser-local data with shared application records.",
          "I continued with frontend features and maintenance across tasks, submissions, scoring, schedules, capstone groups and notifications. That work included translating stakeholder requests into schema changes, API behaviour and controls people could use in their own workspace.",
          "This was a team delivery. A colleague built the original admin and intern interface; another engineer set up the deployment and security-scanning pipeline. My ownership centred on the backend, frontend integration, subsequent feature development and application maintenance.",
        ],
      },
      {
        id: "workflow",
        label: "The program workflow",
        rows: [
          { t: "Configure the cohort", d: "Set the program timeline, curriculum, team placements, mentors and scoring rules. Administrators can manage the cohort as requirements change." },
          { t: "Publish the work", d: "Create tasks with release dates, deadlines and configurable submission fields, so interns see the work relevant to their stage of the program." },
          { t: "Submit evidence", d: "Interns complete the task and attach their work. The submission connects the answers, uploaded files and review state to the same task." },
          { t: "Review and revise", d: "A reviewer records feedback and can request changes. Interns see the reason, revise their work and resubmit it for another review." },
          { t: "Follow progress", d: "Learning journeys, scores, reflections and mentor check-ins give participants and program staff context for the next conversation." },
        ],
      },
      {
        id: "architecture",
        label: "Connecting the system",
        body: [
          "The Next.js application talks to a modular NestJS REST API backed by Prisma and PostgreSQL. Cohorts, tasks, submissions, reviews, mentorship and scoring are separate parts of the domain, connected through explicit relationships. That made a change such as adding a scoring rule or a review state traceable across storage, API and interface.",
          "The frontend's shared API client handles authentication and a refresh-and-retry path for expired access tokens. File uploads follow a multipart path, with attachment records persisted alongside the submission. This keeps a task's supporting evidence available when a reviewer opens the work later.",
        ],
      },
      {
        id: "decisions",
        label: "Engineering decisions",
        rows: [
          { t: "Review is a loop", d: "A completed review sometimes needs another revision. A formal request-changes state reopens the work and carries the reason back to the intern, including work submitted before the change was introduced." },
          { t: "Feedback must arrive", d: "Saving a reviewer comment was only part of the job. The intern-facing API and screen also had to return and display the feedback and the reason for a requested change." },
          { t: "Attachments are records", d: "The submission flow needed to upload the actual file and persist its attachment record. The shared client also had to let the browser set the multipart boundary instead of forcing a JSON content type." },
          { t: "Time needs one interpretation", d: "Shared timezone helpers convert entered schedule times to an absolute instant and format them in the user's chosen zone. Admin and intern screens use the same formatting path." },
          { t: "Preserve live configuration", d: "Routine deployment seeds must preserve administrator edits. Schedule seeding skips an existing cohort schedule by default, with a deliberate reset kept as a separate operation." },
        ],
      },
      {
        id: "rollout",
        label: "From testing to program use",
        timeline: [
          { when: "May 2026", title: "Backend and live integration", detail: "Built the backend modules and connected the original frontend to real authentication and application APIs." },
          { when: "Jun 2026", title: "Stakeholder testing", detail: "The portal became available for stakeholder testing. Feedback shaped onboarding approval, skills self-rating, curriculum and line-manager task workflows." },
          { when: "Jul 2026", title: "Program launch and iteration", detail: "The summer program began on 13 July. Subsequent work addressed review visibility, resubmissions, schedule time zones, capstone editing and notifications." },
          { when: "Aug 2026", title: "Protect the work already saved", detail: "Improved attachment persistence and review previews, and changed deployment seeds to preserve live schedule and scoring configuration." },
        ],
      },
      {
        id: "result",
        label: "What the work demonstrates",
        body: [
          "The result was a shared program workflow connecting assigned tasks to submissions, reviewer feedback and progress records. Program staff could adjust curriculum and schedules, while interns could see their work and respond to review requests in the same system.",
          "The most useful lessons came from maintaining those connections during real program use. A review only helps when its reason reaches the intern; an attachment only exists when its content is stored; a deployment is only safe for the program when it preserves the changes administrators have already made.",
        ],
      },
    ],
    prev: { title: "AidCare", href: "/engineering/aidcare" },
    next: { title: "AFM Legacy Archive", href: "/engineering/legacy-archive" },
  },
  "legacy-archive": {
    title: "AFM Legacy Archive",
    headline: "Give historical documents a searchable future.",
    lede: "A digitisation workspace for the Apostolic Faith Church Legacy Department, connecting mobile document capture, OCR-assisted transcription, editorial review and archive search. I worked across the FastAPI backend and Next.js frontend to carry a scan through to a reviewed record.",
    status: "Built",
    kicker: "AFM · Historical document preservation",
    ctas: [
      { label: "Explore the archive workflow", href: "#workflow", variant: "primary" },
    ],
    details: [
      { k: "Role", v: "Full-stack engineer" },
      { k: "Context", v: "Legacy Department · Document digitisation" },
      { k: "Year", v: "2026" },
      { k: "Stack", v: "Next.js · FastAPI · PostgreSQL · SQLAlchemy" },
    ],
    hero: {
      src: "/images/work/legacy-archive.svg",
      alt: "Archive workflow: capture and order document pages, extract a draft transcription and metadata, review against the scan, then approve for archive search and export. Processing failures can be retried or re-uploaded.",
      caption: "Workflow illustration based on the archive. Document shapes are illustrative; no archival material is reproduced.",
    },
    readouts: [
      { label: "Capture", value: "Mobile", caption: "scan pages and continue a grouped document" },
      { label: "Review", value: "Human", caption: "check the transcription and metadata" },
      { label: "Search", value: "Approved", caption: "review status controls archive discovery" },
      { label: "Export formats", value: "3", caption: "TXT, DOCX and PDF transcripts" },
    ],
    sections: [
      {
        id: "problem",
        label: "The problem",
        body: [
          "A collection of photographed pages is difficult to search, organise and reuse. Historical letters, periodicals and manuscripts also have structure: page order, columns, headings and handwritten or uncertain details. Losing that structure during transcription makes the resulting text less useful.",
          "The archive connects the physical document to a digital record. Capture needs to work from a phone; reviewers need to compare the extracted text with the source; and approved material needs to be discoverable and exportable. Each step carries information that the next step depends on.",
        ],
      },
      {
        id: "contribution",
        label: "My contribution",
        body: [
          "I worked across the FastAPI backend and Next.js frontend on document capture, processing, review and archive access. The implementation connects grouped page records, transcription and metadata extraction, review decisions, search and transcript exports.",
          "Much of the practical work was in the transitions: resuming a partially scanned document at the right page, preserving reading order in a two-page spread, keeping long transcriptions usable on a phone, and making authenticated downloads work across the interface and API.",
        ],
      },
      {
        id: "workflow",
        label: "The archive workflow",
        rows: [
          { t: "Capture and organise", d: "Photograph a document from a phone or upload a scan. Group related pages into a work, retain their order, and resume capture with the next page number." },
          { t: "Extract a draft", d: "Process the image into a transcription and suggested metadata such as document type, author, date and summary. Processing state remains visible while the job runs." },
          { t: "Review the source", d: "Inspect the scan alongside its transcription, correct the record and approve or reject it. Suggested metadata remains something an archivist can check." },
          { t: "Find approved material", d: "Search approved records using PostgreSQL full-text search, relevance ranking and archive filters. Search access is restricted to authorised archive users." },
          { t: "Export the transcript", d: "Download reviewed text as TXT, DOCX or PDF. The transcript export keeps the text separate from the source images." },
        ],
      },
      {
        id: "decisions",
        label: "Engineering decisions",
        rows: [
          { t: "Keep page structure", d: "A grouped work retains page sequence and document-level context. Normalised page labels and the next-page position make interrupted capture sessions easier to continue." },
          { t: "Respect reading order", d: "Image-processing heuristics identify likely two-page spreads using shape and the centre gutter. Transcription instructions preserve column order, headings and paragraph breaks." },
          { t: "Separate text and interpretation", d: "Verbatim transcription and metadata extraction use separate prompts. A suggested date or summary is kept distinct from the document's own words, and review precedes approval." },
          { t: "Make failures recoverable", d: "Processing jobs expose status and recovery guidance. Transient connection failures are retried; missing images can require a new upload. The interface can distinguish those recovery paths." },
        ],
      },
      {
        id: "architecture",
        label: "Connecting the system",
        body: [
          "The Next.js application provides mobile capture and review screens alongside desktop document workspaces. FastAPI coordinates document records, image processing, model calls and exports, with SQLAlchemy and PostgreSQL storing the archive's relationships and review state.",
          "A document can retain references to its original and processed images, its extracted text, metadata and approval history. Approval decisions create audit records, while the search endpoint selects approved documents. This makes the editorial decision part of the data model and the discovery workflow.",
        ],
      },
      {
        id: "delivery",
        label: "Delivery and limits",
        body: [
          "The June 2026 baseline records grouped mobile capture, review workspaces, page ordering and TXT, DOCX and PDF exports. Its fixes include long-transcription scrolling, resuming at the next page number, authenticated downloads and preserving layout cues during transcription. Later maintenance addressed packaging, deployment and account access.",
          "The implementation demonstrates a connected digitisation workflow. OCR quality still depends on the scan and the material, and inferred metadata needs checking. No measured transcription-accuracy score, collection-wide usage total or processing-time improvement is claimed here.",
        ],
      },
      {
        id: "result",
        label: "What the work demonstrates",
        body: [
          "An archivist can move from a captured page to a reviewed, searchable record while keeping the source available for comparison. Multi-page material stays organised as a work, and its transcript can be taken into other tools for reading or further editing.",
          "The engineering lesson was to carry context through the whole pipeline. Page order, reading structure, review status and the original scan all matter to whether extracted text becomes a useful archive record.",
        ],
      },
    ],
    prev: { title: "GTCO Summer Program Portal", href: "/engineering/gtco-summer-portal" },
    next: { title: "AFM WECA Welfare CRM", href: "/engineering/welfare-crm" },
  },
  "welfare-crm": {
    title: "AFM WECA Welfare CRM",
    headline: "Make the next follow-up someone's responsibility.",
    lede: "A branch-aware care platform that connects newcomer registration, caller assignments, contact outcomes and membership review, giving welfare teams and church leaders a shared view of what needs attention.",
    status: "Production",
    kicker: "AFM WECA · Welfare operations",
    ctas: [
      { label: "Explore the workflow", href: "#workflow", variant: "primary" },
    ],
    details: [
      { k: "Role", v: "Full-stack engineer" },
      { k: "Context", v: "Church welfare operations" },
      { k: "Work", v: "Backend, frontend integration & maintenance" },
      { k: "Stack", v: "NestJS · Next.js · PostgreSQL · Redis" },
    ],
    hero: {
      src: "/images/work/welfare-crm.svg",
      alt: "Care workflow: register a newcomer, assign a caller, record the contact outcome, and review membership readiness. Unsuccessful contact returns to the retry queue. Branch permissions and an audit trail support the process.",
      caption: "Workflow illustration based on the CRM. No personal records are shown.",
    },
    readouts: [
      { label: "Work ownership", value: "Assigned", caption: "a named caller for the next follow-up" },
      { label: "Access", value: "Scoped", caption: "by permissions, branch and assignment" },
      { label: "Contact outcomes", value: "Recorded", caption: "successful contact and retries stay distinct" },
      { label: "Oversight", value: "Shared", caption: "care history, reports and a weekly brief" },
    ],
    sections: [
      {
        id: "problem",
        label: "The problem",
        body: [
          "Registering a newcomer is only the beginning. Someone needs to make contact, record what happened, arrange another attempt when necessary, and keep the branch informed. When those steps are scattered across spreadsheets and individual conversations, it becomes difficult to tell who owns the next action.",
          "The CRM brings that work into one care history. Welfare teams need tools to act, pastors need a view of the branch, and callers need a focused list of the people assigned to them. Those are different responsibilities, so the platform has to reflect them in both its interface and its API.",
        ],
      },
      {
        id: "contribution",
        label: "My contribution",
        body: [
          "I worked across the NestJS backend and Next.js frontend, building and maintaining the member, assignment and follow-up workflows and connecting them to permission-aware workspaces. The work also included branch and team administration, reporting, and fixes to authentication, data loading and record counts.",
          "A recurring part of the engineering was making the screen agree with the underlying rules: which records a person can see, who can receive an assignment, and what a saved contact outcome actually means.",
        ],
      },
      {
        id: "workflow",
        label: "The care workflow",
        rows: [
          { t: "Register", d: "Capture the newcomer in the correct branch, with the details needed for follow-up. Existing spreadsheet records can also be imported." },
          { t: "Assign", d: "Give an eligible, activated team member responsibility for contact. Reassignment lets the welfare lead move work when circumstances change." },
          { t: "Contact", d: "Work through To call, Retry and Reached views. Save the outcome and notes so the next person can see what has happened." },
          { t: "Review", d: "Bring attendance, care history and readiness into a membership review. An authorised user confirms conversion and group placement." },
          { t: "Oversee", d: "Use branch reports and the Weekly Brief to discuss unassigned work, outstanding follow-ups and the next actions." },
        ],
      },
      {
        id: "access",
        label: "Access follows responsibility",
        body: [
          "Hiding a button is not an access boundary. Backend queries resolve the churches a user is allowed to see and reject requests outside that scope. Assignment-limited users receive only their assigned records, with the response filtered for that role.",
          "The frontend uses permissions to shape navigation and actions around the same responsibilities. A pastor's workspace supports read-only oversight; a caller gets a focused call list; authorised welfare staff manage the operational steps. Platform administration adds cross-branch oversight without making every branch action relevant to every user.",
        ],
      },
      {
        id: "decisions",
        label: "Engineering decisions",
        rows: [
          { t: "Activation before assignment", d: "An invitation does not mean someone can sign in and work. New assignments require an activated account, avoiding work being handed to a person who cannot access it." },
          { t: "An attempt is not contact", d: "No answer, voicemail and text outcomes remain in Retry. Successful contact moves to Reached. A callback request preserves the pending work and records a note." },
          { t: "People and attempts differ", d: "Outreach totals count unique people; assignment views use the latest outreach record per person. This keeps repeated attempts from inflating the apparent number of people being cared for." },
          { t: "Failures need an ending", d: "Lists settle into data, an empty state or a visible error with Retry. Optional directory enrichment does not prevent the branch list from loading." },
        ],
      },
      {
        id: "validation",
        label: "Validation and maintenance",
        body: [
          "The recorded August 2026 QA pass covered authentication, branch and assignment scope, route access, loading states, search and pagination. It documented fixes for a cross-origin authentication mismatch, inconsistent create permissions, and disagreements between person totals and outreach-record totals.",
          "That pass used a dataset containing 213 people, 212 newcomer records and 24 branch-team records. These describe the test snapshot, rather than current adoption or improved care outcomes. The historical QA report also records a successful 21-route frontend build; it is evidence for that release, not a claim about every later deployment.",
          "Later maintenance tightened assignment eligibility and account activation. An October user manual documents the operational workflow, role-specific quick starts, phone use and troubleshooting, so the handover includes how to use the system as well as the implementation.",
        ],
      },
      {
        id: "result",
        label: "What the system makes possible",
        body: [
          "A welfare lead can see who needs attention, assign the work and inspect the saved outcome. A caller can pick up the next follow-up without searching through a branch-wide register. Leadership can review the same care history and reporting context when agreeing next steps.",
          "The central lesson was that reliable coordination depends on precise states and responsibilities. Registration, assignment, an attempted call and successful contact each mean something different. Keeping those distinctions intact makes the next action easier to see.",
        ],
      },
    ],
    prev: { title: "AFM Legacy Archive", href: "/engineering/legacy-archive" },
    next: { title: "AFCF Portal & E-Library", href: "/engineering#afcf-portal-e-library" },
  },
};
