# Website reference review and Figma brief

Reviewed 24 October 2026. Audience priority confirmed by Emmanuel: a balanced view of research and engineering.

## Scope and evidence

Reviewed the four live reference homepages through browser screenshots and accessibility trees, including sections below the fold. Explored Oyin's menu and work gallery, Naved's CreateOS case study, and Cencori's carousel. Inspected the reference homepages at a 390 × 844 browser viewport, plus Pidoxy's homepage and mobile menu. Also inspected Pidoxy's live research page and the local homepage, navigation, project, publication, profile, and thumbnail sources.

This is a qualitative design review. It does not establish conversion rates, measured performance, full accessibility compliance, or physical-device behavior. Loading and reveal animations were visible during inspection; screenshots taken mid-transition are not evidence of permanent low contrast or missing content. Oyin's case-study button did not expose a case study during the tested interaction, so its case-study contents are not assessed here.

## 1. Oyin: identity through art direction

[Homepage](https://www.oyin.design/) · [Work gallery](https://www.oyin.design/work)

**Observed:** The opening type specimen gives way to a burgundy stage with a textured curtain, a serif name, compact monospaced labels, and a black floating navigation bar. Theatre language connects the introduction, work, process, and contact. Inline image treatments and a spatial work gallery carry that identity beyond the hero. The menu uses oversized numbered links.

**Why it works:** A repeated metaphor makes the site feel authored. Large shifts in scale and background create a deliberate sequence. The work imagery demonstrates taste before lengthy explanation is needed.

**Tradeoff:** The introductory sequence delays the proposition. Spatial browsing requires more exploration than a conventional project list; a hidden desktop menu also adds a step. On mobile, the curtain remains prominent and the copy occupies a narrow visual area.

**Application:** Give Emmanuel a recognizable visual language across headings, research figures, project covers, and transitions. Keep essential work available through direct links. A restrained image reveal or carefully composed portrait would provide personality without making navigation depend on an effect.

## 2. Bunmi: technical work made personal

[Homepage](https://bumie-e.github.io/)

**Observed:** Bold sans-serif type, lavender and teal, dotted backgrounds, offset shadows, and an arched portrait create an approachable identity. The homepage connects research, recognition, speaking, features, news, and contact. Status labels distinguish work stages; dated entries convey activity. A floating navigation bar stays visible. At mobile width, the portrait moves ahead of the introduction and primary action.

**Why it works:** Research becomes a human story with visible momentum. Plain-language descriptions make specialist interests approachable, while recognition supplies context for credibility.

**Tradeoff:** Numerous navigation choices and decorative treatments compete for attention. Animated reveals and counters take time to settle. The mobile portrait pushes the research action lower.

**Application:** Bring current research, dated updates, a portrait, and speaking evidence into Emmanuel's story. Preserve precise publication states. Use a smaller set of decorative gestures and place the balanced research/engineering proposition before a large mobile image. The most useful lesson is how content builds trust over a sequence.

## 3. Naved: focus and evidence

[Homepage](https://naved.xyz/) · [CreateOS case study](https://naved.xyz/work/createos)

**Observed:** A white canvas, restrained serif introduction, compact sans-serif supporting copy, and sparse navigation establish a quiet tone. A current-work note precedes the proposition. Project previews form a horizontal strip. CreateOS expands into a case study with role, timeline, product imagery, problem, contribution, outcome, and a contents rail.

**Why it works:** The proposition is specific, and the work supports it. The case study makes individual contribution easier to assess. Captioned screenshots give readers something concrete to inspect.

**Tradeoff:** Subtle secondary text needs care. Horizontal previews make some projects less immediately visible. Sparse navigation fits a short portfolio more easily than a site with substantial research and public activity.

**Application:** Use this as the strongest reference for reading rhythm and project detail. Give AidCare and selected engineering work their own pages, with readable visuals, personal contribution, decisions, constraints, and outcomes. Keep research equally accessible through explicit navigation.

## 4. Cencori: technical products given visual substance

[Developer page, including the supplied v=2 parameter](https://cencori.com/developers?v=2)

**Observed:** A black canvas, violet atmospheric light, centered sans-serif headline, and paired actions establish the opening. A grid mixes product imagery, interface demonstrations, and different card spans. An expanding gallery has previous/next controls and an index; advancing it changes the active example and supporting description. News and FAQs lead to repeated conversion actions and a large footer. Mobile presents a compact menu and swipe-oriented gallery.

**Why it works:** Distinct visuals make a broad technical offering more tangible. Large cards establish priority. Primary and secondary actions remain easy to distinguish.

**Tradeoff:** The rotating headline changes while reading. Some supporting text is visually subdued. Fifteen gallery categories and an extensive footer suit a company more than an individual portfolio.

**Application:** Borrow the visual demonstration and card hierarchy for engineering. Use legible product screens and architecture explanations. A contained dark project feature could add contrast to a light site. Keep foundational research and project access outside carousels.

## What the references collectively teach

| Design decision | Useful reference | Translation for Emmanuel |
| --- | --- | --- |
| Consistent identity across sections | Oyin | Repeated type, image, caption, and motion rules |
| Personal context and current activity | Bunmi | Portrait, dated milestones, selected speaking evidence |
| Readable detail and contribution | Naved | Case studies with role, decisions, evidence, and outcomes |
| Technical work shown visually | Cencori | Product screens, research figures, architecture views |
| Immediate route to relevant work | Synthesis | Research and Engineering receive equal prominence |

The design should feel like one coherent site. Choose a common grid, type hierarchy, palette, and interaction vocabulary before adapting individual patterns.

## Pidoxy: the current opportunity

[Current homepage](https://www.pidoxy.com/) · [Research](https://www.pidoxy.com/research)

### What already works

The serif/sans-serif pairing is a credible foundation. The navigation is explicit, the content is substantial, and research entries preserve authors, venue, status, and direct paper links. The mobile menu is legible and opened successfully during inspection. Structured local content makes it practical to retain the factual record while changing presentation.

### Highest-value improvements

1. **Replace repeated taxonomy with a clear proposition.** The hero currently names roles, then lists fields, then repeats many fields in a longer sentence. Keep the role concise and explain the connection between experimentation and useful systems. Let project and paper descriptions carry the specialist detail.
2. **Balance the two paths explicitly.** “See my work” currently leads only to Engineering. Pair “Explore research” and “Explore engineering” on the first screen. Keep contact available in navigation and the closing section.
3. **Improve the visual evidence.** The featured publication has a generic code placeholder. Product cards use YouTube thumbnails; the visible frames do little to explain the systems. Introduce intentional covers and genuine product screenshots, with consistent crops and descriptive captions.
4. **Distinguish research, products, and recognition.** Three equally sized cards currently represent a paper, a product, and a competition win. Give research and engineering their own meaningful formats. Attach an award to the work that earned it, with a separate recognition summary farther down.
5. **Correct the featured-content label.** SharpXR is called “Latest publication,” while the research page and data include newer work. Either feature the newest item with its exact status or label SharpXR “Selected publication.” Keep workshop acceptance, conference presentation, and publication distinctions intact.
6. **Expose the person behind the work.** The homepage can use the existing portrait and selected Moments photographs to show the researcher, engineer, speaker, and collaborator. Every image should provide context.
7. **Give content different levels of detail.** The homepage should curate; research and engineering indexes should help scanning; individual details should support close inspection. The current engineering implementation renders project summaries, tags, and links as cards rather than substantial case studies.
8. **Reduce competing destinations in the header.** Explore Research, Engineering, About, and Contact as core navigation, with Speaking and the remaining archive pages accessible through a secondary menu and footer. Preserve existing routes and links. Whether Speaking deserves a persistent top-level position should follow its importance to Emmanuel's opportunities.

## Proposed direction for Figma

**Working direction:** an editorial portfolio for a researcher who ships software.

Use a warm, near-white foundation, dark readable text, a controlled accent, and generous but purposeful spacing. Retain a distinctive serif for major statements, with a clear sans-serif for body copy and interface elements. Use monospaced metadata sparingly for dates, venues, and technical labels. Test palette and font choices in actual layouts before fixing tokens.

Research should feel rigorous and readable; engineering should feel concrete and inspectable. Both should share the same visual system. Personality can come from Emmanuel's writing, photographs, and diagram/figure treatment.

### Homepage sequence

1. **Introduction:** name, a short proposition connecting research and engineering, location/current context, and equal research/engineering actions. A portrait or meaningful visual should support the message. Draft proposition: “I research intelligent systems and build them for the real world.” Supporting copy should name medical imaging and applied AI without implying all engineering is healthcare work.
2. **Selected evidence:** three or four concise facts with clear relationships—research venues, AidCare, engineering experience, and selected recognition. Keep institution and employment wording precise.
3. **Research and engineering features:** a research highlight with its question, figure, status, and paper action; a product highlight with its interface, role, purpose, and case-study action. Explore matched side-by-side composition on desktop and an equally prominent vertical sequence on mobile.
4. **More selected work:** a small curated set, with links to both complete indexes. Candidates include VAMAE, SharpXR, Virtue Foundation Intelligence Platform, and Amala Atlas. Selection is editorial, not a claim that these are the only important projects.
5. **Recent activity:** a few dated research, product, or speaking updates. Link to deeper material rather than reproducing the entire archive.
6. **About and public activity:** a short personal passage with a carefully selected photograph and paths to About, Talks, and the speaker kit.
7. **Contact:** explain the opportunities Emmanuel welcomes and provide email, copy feedback, CV choices, and selected professional profiles.

### Page templates

- **Research index:** a short research agenda, readable entries grouped by year, exact publication states, author order, venue, one plain-language contribution, and direct paper/code links. Use figures where available; avoid generic illustrations standing in for results.
- **Engineering index:** curated features followed by a scannable archive. Show product purpose and Emmanuel's role before dense technology tags.
- **Project case study:** purpose → role/team/date → problem and constraints → approach and decisions → product/architecture evidence → outcome and limitations → demo/code → related work. Add a contents rail only when the page is long enough to benefit.
- **About:** concise narrative, relevant experience, education, and personal context.
- **Speaking:** selected topics and talks, invitation action, accessible speaker assets and bios. The current speaker-kit content is useful and should remain available.
- **Recognition, Press, and Moments:** supporting evidence and personality, presented with consistent dates, captions, and source links.

### Interaction and responsive requirements

Make links and cards understandable without hovering. Give buttons clear focus, hover, and pressed states. Any copy action needs visible success feedback. Menus should close predictably and support keyboard use. Essential text should be readable immediately; motion can enhance it after rendering. Respect reduced-motion preferences and keep layouts stable as media loads.

On mobile, prioritize proposition and both work paths before large decorative imagery. Stack major features with equivalent visual weight. Use an ordinary vertical list for essential work; optional horizontal galleries need clear controls and discoverability. Long publication titles and author lists must wrap naturally. Prototype menu, image expansion, and case-study reading on narrow screens.

### Figma package to create next

Start with a reference/decision board, then two homepage explorations using the same real content: one quieter editorial direction and one with stronger visual project presentation. Compare desktop and mobile together. Select a direction before expanding all page templates.

The resulting file should include foundations, reusable components and states, desktop/mobile homepage layouts, research and engineering indexes, one complete engineering case study, and the supporting page templates. Prototype the main paths: homepage → research → paper; homepage → engineering → case study → demo/code; homepage → speaking/contact.

Before implementation, check that a new visitor can identify both disciplines, find one credible example of each, understand Emmanuel's contribution, and make contact. A Figma review should also settle which real images and figures are ready and which require preparation.

## Open decisions

Audience balance is settled. Visual tone, accent color, portrait prominence, top-level Speaking placement, and the final featured-work selection remain design choices to compare in Figma. No application code was changed for this review.
