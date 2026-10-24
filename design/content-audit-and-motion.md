# Content audit + motion spec

Researched 2026-10-24. Sources: the site's `data/*.js`, a web search, GitHub (`gh api`), Devpost, Google Scholar, Hugging Face, YouTube, and X and LinkedIn (read in Emmanuel's signed-in Chrome; nothing was posted or changed).

## 1. What the web knows that the site doesn't

The open web has very little about Emmanuel beyond his own pages. Searches return pidoxy.com, the SharpXR paper (arXiv, Springer), one third-party SharpXR review (pith.science), and LinkedIn. **His own profiles hold the missing material.**

### High value: add to the site

| Item | Source | Where it goes |
|---|---|---|
| **Instructor, AI for Software Engineering — The AI Colony** (Contract, Jul 2026 – present; "Teaching AI for SWE with @AIColonyAcademy"; repo `ai-for-se-starter`, "Colony Orders", Cohort One) | LinkedIn, X bio, GitHub | Experience, Talks/teaching, Home "Where I'm spending my time". This is current teaching and the site has none of it. |
| **Lead Software Developer — Zuri Chat** (Contract, Jul – Nov 2021; ran the deployment pipeline with GitHub Actions; React, WebRTC) | LinkedIn | Experience. It's his earliest lead role. |
| **Cloud Engineer apprenticeship — NexaScale** (Feb – May 2023; certificate) | LinkedIn | Experience (the site only lists "Cloud Engineering Mentor") |
| **Wolfstation DSA apprenticeship** (May – Aug 2024; hosted a problem-solving session; Top 3) | LinkedIn | Experience (the site only lists the award) |
| **Wema Bank detail:** "Wema Wiki" AI chatbot inside Microsoft Teams; an OpenAI product-recommendation model; SQL data requests; Play Store review research | LinkedIn | Engineering → "In production" card, CV |
| **ML Collective focus:** "computer vision with a focus on few-shot sampling" | LinkedIn | Research (note: the user previously set the wording to "medical imaging and computer vision"; ask before changing) |
| **RadWatch** — progression-aware chest X-ray triage: is the patient improved, stable or worse, from prior + current scans (ACVSS 2026 hackathon) | GitHub, `pidoxy` README | Research (in progress) or Engineering. It's distinct from the Flood SR project. |
| **KRONOS** — AI study planner with voice input, built at USAIHACKS (live: usaihacks.vercel.app) | GitHub, Devpost | Engineering → hackathon builds |
| **Blind Spots of Frontier Models** (Hugging Face dataset) + **cloud-notebook-runtime-blind-spots** | Hugging Face | Research → "Reliable AI" thread. It fits "where intelligent systems break". |
| **Afretec Inclusion Challenge: he mentored a student team** ("one of the most meaningful projects I have worked on", May 2026). The site currently lists it as an award ("Second place, AccessLearn"). | X | About → teaching & mentoring. Confirm whether he competed or mentored. |
| **Spitchathon — African Folktale Storyteller** (voice AI, Sep 2025) | X | Engineering → hackathon builds |
| **Devpost record: 23 hackathons, 13 projects, 10 achievements.** Wins: Coffee_Break (HackZurich), Foodify (HackOR). Also HTFGame (HackThisFall S2), Coeus, InSight, PositiviTea | Devpost | Talks/About ("23 hackathons" is a stronger, verifiable number than "20+") and Engineering → hackathon archive |
| **Third-party YouTube explainer of SharpXR** (he shared it in Oct 2025) and the **pith.science review of SharpXR** | X, web | Press → "Mentions". Get the exact video link from Emmanuel. |
| **Sustainability Volunteer — Prof. Ayodele Awojobi Design Competition** (May 2024 – Jan 2025) | LinkedIn | About → community |
| **Leak Desk** — live demo for the SysConf talk (leak-desk.vercel.app) | GitHub | Talks → SysConf row ("Try the demo") |
| **Google Scholar:** SharpXR has its first citation; interests include "Low-Resource AI" | Scholar | Research header and interests ("Low-resource AI" is a good umbrella that fits his work) |


### Second sweep (2026-10-25): sections the first pass skipped
I checked LinkedIn's About, featured, projects, certifications and education; X posts from 2021–2024; Devpost hackathons and achievements; and Kaggle, Zindi, Hashnode and Linktree.
- **Amebo** (from Emmanuel): an accessibility layer over the Lagos map. 3rd of 9 teams at the AFRETEC Network assistive-tech challenge at UNILAG; ₦1M from a ₦4.5M Theseabilities Foundation pool.
- **Afretec Inclusion Challenge:** he mentored the winning student team. It is not his own award.
- **MIT Hack-Nation × Databricks, 2nd place** (LinkedIn certificate). "MIT" was missing from the site.
- **HNG i8 finalist** (Oct 2021, X), which led to the Zuri Chat lead developer role.
- **Squad "Take On Squad" hackathon,** 5th place (Jan 2024); **GitHub Campus Expert DevSprint UNILAG,** top ten (Nov 2023); **Microsoft Learn AI Skills Challenge** (Jul 2023); **Microsoft ADC "Game of Learners" AI/ML clinics.**
- **ACVSS 2026:** presented the SharpXR poster there (LinkedIn education entry).
- **USAII Global AI Hackathon 2026** (6,063 participants) is where KRONOS was built.
- **Devpost:** first in-person hackathon and a "Dual Boot Winner" (prizes at both an in-person and an online hackathon) in Sep 2021.
- **Empty or inactive:** Kaggle, Zindi, Hashnode (no posts). Linktree doesn't exist. Medium blocked the check.
- **Conflicts to settle:** LinkedIn shows a grade of 4.86/5, but the résumés say 4.68 (the site omits CGPA, so nothing shows publicly). LinkedIn About still uses an old "student" framing.

### Breadth worth one line (the "not boxed in" story)
- 2022 **web3 phase:** a decentralised voting system, a token, NFTs, Blockgames.
- **Zuri/HNG 2022** tasks.
- **PhishPaddy** (phishing-site detection).
- **Bias in Facial Recognition** (Streamlit).
- Flutter and Visual Basic coursework.

These fit an "Archive" or "Earlier experiments" list on Engineering. They show range without diluting the headline.

### Inconsistencies to fix at build time
- **GitHub bio:** says "VAMAE (ICPR '26)" (fine). The `pidoxy` profile README still says When Retrieval Hurts is "(submitted)"; it is now accepted.
- **LinkedIn headline:** still "Sofware Engineer - Data Analytics - Wema Bank Plc." (typo, and an old role) in search results. Worth updating.
- **Scholar:** a duplicate partial SharpXR entry ("for Pediatric Chest X-Rays") should be merged.
- **AidCare:** "AidCare Copilot" on Devpost is a hackathon prototype, not the AidCare product demo. Keep the product linked to aidcare.pidoxy.com.

## 2. Motion spec

The principle: **motion carries the concept.** Things resolve from noise to signal once, quickly, and then stay out of the way. Nothing is scroll-jacked, no content is hidden until an animation fires, and everything respects `prefers-reduced-motion`.

### Tokens
| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | hovers, button states |
| `--dur-base` | 320ms | menus, toggles, toasts |
| `--dur-resolve` | 600ms | noise → signal reveals |
| `--ease-out` | cubic-bezier(.2,.7,.2,1) | entrances |
| `--ease-inout` | cubic-bezier(.65,0,.35,1) | theme / page transitions |
| stagger | 60ms per item, max 6 | grids, lists |

### Signature motions (ours)
1. **Resolve on enter.** Images and figures start blurred (8px), with grain at 60% and slight desaturation, and settle sharp over 600ms when 15% visible (IntersectionObserver, once only). Text fades up 8px. Content is visible by default with JS off, so the effect is never a gate.
2. **The portrait seam.** On Home, the noise | signal split is draggable (pointer and keyboard arrows). On load the seam drifts from 30% to 43%, so it's obvious you can move it.
3. **Hover = denoise.** On work tiles, the grain overlay lifts, the image scales to 1.02, and the arrow nudges 2px over 160ms. Video tiles show the "Watch demo" badge.
4. **Readouts count up.** Recognition numbers tick to their value once (₦2M, 1 / 31, 95%) over 900ms with tabular numerals. Ratios show the denominator first, then the numerator ("/ 312 → 31").
5. **Static 404.** The noise tile flickers (an animated SVG `feTurbulence` seed) and "404" sharpens and blurs in a slow 4s loop. Reduced motion shows it static.
6. **Page transitions.** A View Transitions API crossfade with a 200ms grain flash: the page briefly "loses signal" and comes back. It degrades to an instant navigation where unsupported.

### Borrowed from the references
| From | Motion | Our version |
|---|---|---|
| Oyin | Inline hover previews in prose | In the Home intro and the About bio, underlined names (SharpXR, AidCare, HabariPay, ACVSS) show a small floating thumbnail on hover or focus |
| Oyin | Process list where the current step is highlighted on scroll | Paper "Method" pipeline and case-study sections: the active step is ink, the others secondary. The contents list follows along |
| Oyin | Live local clock | "Lagos 22:12" in the nav and footer, ticking each minute |
| Oyin | "Curtain call" footer | The large IDOKO wordmark rises 24px and goes from 4% to 7% opacity as the footer enters |
| Bunmi | Scroll-spy nav | Long pages (Research, speaker kit, case studies): the contents list highlights the current section with a gold bar sliding between items |
| Bunmi | Credentials marquee | The Home credentials strip scrolls slowly (40s loop) and pauses on hover; reduced motion shows a static wrapped list |
| Bunmi | A route pin tracking scroll | A thin gold progress line in the left gutter of long reads (papers, case studies) |
| Bunmi | Passport stamps | Stamps rotate in by ±4° with a soft "stamp" scale from 1.08 to 1, staggered |
| Naved | Now label | The live dot pulses gently (2s); the label slides in first on load |
| Naved | Copy email | Click → "Copied ✓" toast for 2s, plus a check icon morph |
| Naved | Horizontal work strip | Engineering "hackathon archive": a drag- and wheel-scrollable strip with snap points |
| Cencori | Cursor-following glow (dark mode) | In dark mode only, the gold radial glow behind the hero and footer eases toward the cursor (lerp 0.08) |
| Cencori | Topic slider with progress ticks | Speaker kit "Topics I can give" on mobile: a swipeable carousel with 01 / 07 ticks |

### Explicitly not doing
Scroll-jacked sections (Oyin's polaroid scatter, Bunmi's route sections), parallax on text, autoplaying video, and cursor replacement.

### Build notes
- CSS transitions + IntersectionObserver for most of it, with no animation library. The seam drag and count-up are small hooks.
- Grain uses one shared SVG `feTurbulence` filter or a 512px PNG tile. Animate opacity and transform only.
- Under `prefers-reduced-motion: reduce`, all motion durations become 0 and loops stop. The clock still ticks, since it's information, not decoration.
- Budget: no layout shift from motion, nothing over 600ms on the critical path, and the hero is interactive before any reveal finishes.

## 3. UNILAG news mentions (scanned 2026-10-25)

I searched unilag.edu.ng posts, pages and events through the WordPress REST API with 30 terms (name, handle, every project and paper, event names), then checked each candidate's full text for an exact match.

| Date | Post | What it says |
|---|---|---|
| 2026-05-01 | [Driving Inclusion Through Innovation: UNILAG Hosts Pan-African Assistive Technology Workshop](https://unilag.edu.ng/driving-inclusion-through-innovation-unilag-hosts-pan-african-assistive-technology-workshop/) | "Team Amebo secured third place with a N1m award." |
| 2025-06-27 | [Team Pharmacode Clinches First Place at the AFRETEC-UNILAG Innovation-in-Health Challenge 2025](https://unilag.edu.ng/team-pharmacode-clinches-first-place-at-the-afretec-unilag-innovation-in-health-challenge-2025/) | Lists **AidCare (UNILAG)** among the participating teams that "presented impressive projects". |

False positives ruled out: "DLI Rolls Out Red Carpet for 13 Retirees" (Mr. Idoko Cyprian, a different person) and an article on irregular warfare ("aguileri" matched "ileri").
Checked with no mention found: "When Inclusion Became Innovation: Team Omega Triumphs at AFRETEC-UNILAG Challenge 3.0" (Aug 2026) and "From Compassion to Code" (May 2026, AI UniPod).
No UNILAG post mentions SharpXR, VAMAE, When Retrieval Hurts, Amala Atlas, PheraCAM, AccessLearn, ACVSS selection, HackLab or Hack-Nation by name. The scan covers text only: images, PDFs and photo captions rendered as images aren't searchable.
