# Inspiration review — pidoxy.com redesign

Reviewed 2026-10-24 in a live browser (scrolled through each page, read computed fonts/colours). Purpose: pull out what to borrow before designing in Figma.

## Baseline: pidoxy.com today

- White, ink, one gold accent (`#826622`). Fraunces + Inter. 8px grid. Multi-page: About, Research, Engineering, Talks, Press, Awards, Moments, CV, Speaking.
- Home: eyebrow → serif name (italic "Idoko") → keyword line → paragraph → 2 CTAs → icon row → 5-up proof strip → 3 featured cards → "Currently" row → contact CTA.
- **What works:** clean, credible, content is strong and well-sourced.
- **What's weak:**
  - Reads like a well-made template. Nothing on it is specific to *you*: no signature idea, no motion, no imagery above the fold.
  - The hero says three job titles and five domains. That's a list, not a position. Compare naved: one sentence that says what he does and why it matters.
  - The featured cards have **empty grey thumbnail boxes**. That's the most visible flaw on the site.
  - The proof strip (MICCAI & ICPR · ACVSS · AidCare · HabariPay · NHEF) is dense equal-weight text, so nothing stands out.
  - No face, no work visuals, no sense of the person on the home page.
  - Nine nav items. That's a lot of choice before anyone knows who you are.

---

## 1. oyin.design — brand designer (Rufai Oyinkansola)

**Concept:** the whole site is a theatre production. Hero = a fabric curtain on oxblood; sections are "( PROLOGUE )", "( THE PROGRAMME )", "ACT II — THE PROCESS", footer is "( CURTAIN CALL )" with the curtain fringe coming back down.

| | |
|---|---|
| Type | Faculty Glyphic (display serif, ~47px, tight -0.7px tracking) · Inter body · Simplon Mono for labels in parentheses, uppercase, +0.35px |
| Colour | Warm paper `#F2EEE6`, near-black brown `#1D1715`, oxblood/maroon for hero + footer, cream text on dark |
| Layout | Narrow reading column; mono label hangs in the left gutter, prose to the right. Faint vertical grid lines visible in the background |
| Nav | Floating black pill: mail icon · monogram · menu. Minimal, centred, sticky |

**Signature moves**
- **Inline hover previews.** In "The Programme" paragraph, underlined words (identities, brand, visual system, details) carry a tiny thumbnail inline, and hovering shows the work. The *sentence* is the portfolio index.
- **Scroll-scattered polaroids.** Project shots fly in as tilted polaroids labelled "NO. 01…09" around a central line ("Brands and identities, for people who are full of ideas").
- **Process list that lights up on scroll.** 01 Listen → 05 Launch; the current step is dark, the rest fade.
- **Live local time** in the hero and footer ("LAGOS 22:12"). Small, human, makes it feel alive.
- "TAKE YOUR SEAT ↓" as the scroll cue keeps the metaphor going.

**Borrow:** one committed metaphor carried through the labels; mono parenthetical section labels in a left gutter; inline hover-preview prose; warm paper background instead of pure white; live clock; a footer that closes the story.
**Avoid:** the theatre theme itself (it's hers); heavy scroll-jacked sections that show blank space until the animation catches up (I saw empty viewports mid-scroll).

---

## 2. bumie-e.github.io — AI researcher (Bunmi Akinremi) — closest peer to you

**Concept:** "a route through unknown terrain", which ties to her research (agents navigating with missing information). A dotted path with a map pin travels down the page as you scroll, and each section is a "stop".

| | |
|---|---|
| Type | Inter only. H1 66px/800, H2 47px/800. Uppercase small eyebrows ("WHAT I STUDY", "ALONG THE WAY", "OUT LOUD", "KIND WORDS", "DISPATCHES", "NEXT STOP") |
| Colour | Navy ink `#0E2233`, lavender `#D9CCFF`, mint `#BDF0E6`, teal section bands, dark navy for news |
| Style | Neo-brutalist: thick dark borders, hard offset shadows, slightly rotated cards, dotted-grid background, wavy section dividers |
| Nav | Pill nav with **scroll-spy** (active section highlighted in lavender) + dark "Contact" pill |

**Signature moves**
- **Hero tagline with a swapping word:** "I teach machines to navigate… with *missing* information", where the highlighted word cycles (unknown / incomplete / missing). One line states the research question.
- **Two dual CTAs, aimed at two audiences:** "Read my research" / "Invite me to speak".
- **"Now" sticky notes** beside the hero (current hackathon, latest manuscript status).
- **Credibility marquee** of venues (AMLD Africa, TEDx, Interspeech, ELLIS…).
- **Research as status-tagged stops:** IN PROGRESS / MANUSCRIPT COMPLETE / UNDER REVIEW / PUBLISHED. Honest pipeline, same idea as your Submitted/Accepted/Published.
- **Recognition as big animated numbers:** "Top 400 of 6,000+", "£70,000", "Top 10 of 3,000+". The selectivity ratio does the talking.
- **Talks as passport stamps:** circular badges with venue / city / country / date.
- **Press as a carousel** of quote cards ("Kind words"); **News** as a dated, typed log with "Show older".
- Closing CTA "Next stop: Hiring, supervising or inviting me to speak", which names exactly who should get in touch.

**Borrow:** the research question as the hero line; the status-pill pipeline; ratio-led recognition numbers (your ACVSS "1 of 31 from 312" is perfect for this); talk "stamps"; a dated news/"dispatches" log on the home page; scroll-spy nav; audience-specific CTAs.
**Avoid:** the cartoonish brutalist look and pastel palette (too playful for clinical AI); reveal animations that leave blank space when you scroll fast; a single page that's 6,700px long.

---

## 3. naved.xyz — design engineer (Naved Alam)

**Concept:** restraint. The whole home page is ~1,300px tall: hero → horizontal work strip → logos → footer.

| | |
|---|---|
| Type | Noto Serif for the headline (~26px, regular, grey `#575757`); Geist Sans 15px body. Name in the nav at 15px, so the H1 is *not* the name |
| Colour | Pure white, greys only, black button. No accent colour at all |
| Layout | Narrow left-aligned column (~520px) inside a wide page |

**Signature moves**
- **"Now · My new product, Illos, is live ↗"** status pill with a green dot above the headline.
- **Headline = positioning statement**, not a name: "Design engineer. I build the systems that keep a team on-brand without a designer in the loop."
- Short intro paragraph with **inline links** to the products/companies, plus one human line ("I studied anthropology before design…").
- CTAs: "Say hello" (mailto) + **"Copy email"** (you already have a CopyButton).
- **Infinite horizontal strip of project cards** (screenshot + name + year), with a "Worked with" logo marquee.
- Footer in three columns: Contact / Location / Media.
- **Case-study template** (/work/createos): positioning headline → one-line outcome ("Product of the Day, 15K+ users") → CTAs → Details (Role, Timeline) → Overview / What it is / The problem / The work / Built with / Outcome → quote → Prev/Next, with a **sticky "Contents" TOC**.
- About opens with "I got here sideways." Short, confident, then a portrait.

**Borrow:** the Now pill; positioning-sentence hero; Copy email; the case-study template wholesale for AidCare, Amala Atlas, PheraCam and each paper (Problem → Method → Result → Links); sticky TOC on long pages; a lot more white space.
**Avoid:** going this sparse on the home page. You have far more proof (papers, wins, talks, press) than he shows, and hiding it would cost you.

---

## 4. cencori.com/developers — AI infra product page

**Concept:** a premium dark product page in the Vercel/Linear style.

| | |
|---|---|
| Type | Manrope 600, H1 60px with -1.5px tracking, H2 36px; Inter + JetBrains Mono as secondary |
| Colour | Pure black, `#F2F2F2` text, white at 52% for secondary text, purple radial glow behind the hero and footer |
| Layout | Centred hero → bento grid of product cards → horizontal "What can you build" slider with progress ticks (01/15) → News cards → FAQ accordion → giant wordmark footer |

**Signature moves**
- **Announcement pill** above the hero ("Claude Fable 5.1 is on Cencori ›").
- **Bento grid** where each tile *shows* the product (live-looking chat, revenue chart, a server rack, a desktop app over a landscape) instead of describing it.
- **Rotating word in the H1** ("Everything your ___ needs to run").
- **Mega footer** with a huge faded wordmark and a glow behind it.
- Mono uppercase column headings in the footer.

**Borrow:** a bento grid for the "work" section where each tile is a real artefact (an X-ray before/after for SharpXR, an AidCare triage UI, the Amala Atlas map, a talk photo); the announcement pill; tight negative tracking on big type; a giant-wordmark footer ("IDOKO" or "PIDOXY").
**Avoid:** full dark-mode SaaS styling as the default. It reads as a product, not a person. Use it as the dark theme, not the identity.

---

## Cross-site patterns (what all the good ones share)

1. **One idea, carried everywhere.** Oyin = theatre, Bunmi = a route through unknown terrain, Naved = restraint, Cencori = product glow. Your site doesn't have one yet.
2. **The hero states a position, not a list.** One sentence, ideally your research question.
3. **A live "now" signal.** A status pill, sticky notes, a clock, a news log.
4. **Show, don't describe.** Thumbnails, bento artefacts, polaroids. Every site uses real imagery; yours has grey placeholders.
5. **Mono micro-labels** for structure (oyin, cencori footer, bumie eyebrows).
6. **Selectivity as numbers.** "1 of 31 from 312" beats "ACVSS 2026".
7. **A designed footer/CTA that closes the page**, aimed at specific audiences.

## Proposed direction for Figma (for discussion)

**Concept candidate: "Signal from noise."** Your work is denoising X-rays (SharpXR), catching retrieval-induced hallucination, and triage under uncertainty (AidCare). Visual language: a grain/noise texture that resolves into sharp type and imagery on scroll or hover, plus scan/radiograph-style image treatments. It's specific to your research, the way Bunmi's route is specific to hers. Alternatives worth sketching: "Case files / clinical chart" (mono labels like a patient chart: STATUS, VENUE, ROLE) or naved-style pure restraint with one gold accent.

**System**
- Type: keep a serif for display (Fraunces, or try Instrument Serif / Newsreader), Inter or Geist for body, **add a mono** (JetBrains Mono / Geist Mono) for labels, statuses and dates.
- Colour: warm off-white paper (around `#F6F4EF`) + ink + your gold, kept as the single accent. A proper dark theme (Cencori-style black with a subtle gold glow, not purple).
- Components: Now pill · status pills (Submitted / Accepted / Published / Live) · stat tile with a ratio · bento work tile · talk stamp · press quote card · dated dispatch row · case-study template with sticky TOC · Copy email button · local-time chip.

**Home page outline**
1. Nav: name left; Research · Work · Talks · About; Contact pill. Fold Press/Awards/Moments into About/Talks or a "More" menu. Scroll-spy on long pages.
2. Now pill: e.g. "Now · When Retrieval Hurts submitted to Africa in AI @ NeurIPS 2026".
3. Hero: positioning sentence (research question) + short intro with inline links + portrait or one strong artefact image + CTAs aimed at audiences ("Read the research" / "Work with me" / "Invite me to speak").
4. Proof marquee: MIRASOL@MICCAI · ICPR · ACVSS · GDG Lagos · NHEF · ML Collective.
5. Selected work bento: SharpXR, VAMAE, When Retrieval Hurts, AidCare, Amala Atlas, PheraCam, each tile with a real visual and status pill → case-study pages.
6. Recognition numbers: 1 of 31 / 312 (ACVSS) · ₦2M winner-takes-all · 1st runner-up HackLab · scholarships.
7. On stage: talk stamps + latest recording.
8. Dispatches: dated news log (from data files).
9. Closing CTA + footer: audience-specific invite, Copy email, socials, local time, big wordmark.

## Decision (2026-10-24): "Signal from noise", light-first with a dark theme

### Idea
Every visual starts as noise and resolves into signal, which mirrors the work: denoising X-rays (SharpXR), vessel-aware reconstruction (VAMAE), separating retrieval noise from truth (When Retrieval Hurts), triage under uncertainty (AidCare). The noise is texture and transition only. Resting states are always sharp and legible.

### Tokens (draft, to be set up as Figma variables)
| Token | Light | Dark |
|---|---|---|
| `bg` | `#F6F4EF` warm film-paper | `#0B0B0C` |
| `surface` | `#FFFFFF` | `#141416` |
| `ink` | `#0E0D12` | `#EDEBE6` |
| `secondary` | `#5E606B` | `rgba(237,235,230,.58)` |
| `rule` | `rgba(14,13,18,.10)` | `rgba(237,235,230,.10)` |
| `accent` (gold) | `#826622` (keep, AA on paper) | `#C9A55A` |
| `accent-glow` | n/a | radial `#C9A55A` at 12%, behind the hero and footer only |
| status colours | Published = ink, Accepted = gold, Submitted/In progress = outlined, Live = green dot `#2F9E6B` | same hues lifted for dark |

Type: Fraunces as display (60–72px hero, tracking about -1.5%) · Inter for body, 16/1.7 · **JetBrains Mono** (new) for labels, statuses, dates, figures (11–12px uppercase, +4% tracking). Spacing stays on the 8px grid already in `globals.css`.

### Signature elements
1. **Noise → sharp image treatment.** Project and paper visuals show grain/blur at rest in the grid and resolve to sharp on hover or when they scroll into view. The figures come from your papers: noisy vs denoised CXR (SharpXR), OCTA vessel maps (VAMAE). One shared component, used everywhere.
2. **Film-grain texture** at 3–4% opacity on `bg`, plus faint scanline/grid rules like a radiograph light box.
3. **Hero:** Now pill ("Now · When Retrieval Hurts accepted at Africa at NeurIPS 2026"), then a one-sentence position in Fraunces (draft: "I build AI that holds up when the input is noisy and the stakes are clinical."), a short intro with inline links, a portrait treated as a radiograph-style duotone that sharpens on load, and audience CTAs: Read the research / Work with me / Invite me to speak.
4. **Chart-style labels:** mono key–value rows on case pages (STATUS · VENUE · ROLE · YEAR), the case-files idea used as a detail rather than a theme.
5. **Signal readouts:** recognition as numbers with ratios ("1 / 31 of 312", "₦2,000,000", "1st runner-up").
6. **Footer:** large faded "IDOKO" wordmark, Lagos local-time chip, Copy email, socials. In dark mode the gold glow sits behind it.

### Motion rules
Resolve once per element (≈600ms ease-out). No scroll-jacking and no content hidden until animation, so nothing is blank when someone scrolls fast. `prefers-reduced-motion` turns the noise off and shows everything sharp. Theme toggle in the nav; the default follows the system setting.

### Figma file
https://www.figma.com/design/mym2RO4o301paMYkpCHiev — pages: Foundations, Components, Home (desktop 1440 + mobile 390, light + dark), Research (+ When Retrieval Hurts paper page), Work (+ AidCare case study), Talks & Speaking (archive + speaker kit), About (bio, experience, honours, press, moments), CV / 404 / mobile menu, Assets. Inner pages are light only; dark is a variable-mode switch. Colour variables have Light/Dark modes, so switching a frame's mode re-themes it.

Image sources used: Cloudinary `portfolio` tag (event photos), `public/speaker` headshot, figures cropped from the SharpXR (arXiv 2508.08518) and VAMAE (arXiv 2604.06583) papers, captures of aidcare.pidoxy.com and the VF Intelligence Platform. The When Retrieval Hurts tile is an illustrative mock report (labelled ILLUSTRATIVE), not a figure from the paper. Amala Atlas still needs a screenshot.

### Figma file structure
1. **Foundations:** colour variables (light/dark modes), type styles, spacing, grain and noise assets.
2. **Components:** nav (+ scroll-spy state), Now pill, status pill, button set, Copy email, resolve-image tile, bento tile, stat readout, talk stamp, press quote card, dispatch row, chart key–value row, case-study TOC, footer.
3. **Pages (desktop 1440 + mobile 390, light + dark):** Home · Research (+ paper detail) · Work (+ case study: AidCare) · Talks/Speaking · About.

### Asset gaps
`public/` only has headshots and icons; there are **no project or paper visuals yet**. Needed:
- SharpXR: noisy/denoised CXR figure (paper / GitHub repo)
- VAMAE: OCTA vessel figure (arXiv 2604.06583)
- When Retrieval Hurts: a pipeline or result figure (arXiv 2609.31733)
- AidCare, Amala Atlas, PheraCAM, Virtue Foundation, Flood SR: screenshots or demo frames
- Talks: stage photos (some may already be in the Cloudinary Moments library)

## Open questions before Figma
- Which images exist for each project (X-ray figures, AidCare screenshots, Amala Atlas map, talk photos)? The bento depends on them.
- Primary audience to optimise for: PhD/research admissions, engineering hiring, or speaking?
- Figma access: do you have a Figma file/team to work in, and is a Figma MCP/connector available in this session? None is connected right now.
