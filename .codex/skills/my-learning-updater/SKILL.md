---
name: my-learning-updater
description: Update and publish the user's my-learning course website when new lecture PDFs, recordings, transcripts, notes, homework, explanations, or flashcards are added. Applies specifically to the yingnichang/my-learning GitHub Pages study hub; do not use for unrelated websites.
---

# My Learning Updater

Maintain the `my-learning` website as a cumulative, source-grounded study hub. New material should extend the site without compressing, silently replacing, or mislabeling earlier work.

Before editing, read [references/site-contract.md](references/site-contract.md). When adding or revising study-guide or flashcard content, also read [references/content-format.md](references/content-format.md).

## Update workflow

1. Identify every newly supplied source and map it to the correct course and lecture. Treat one uploaded professor PDF as one Lecture Notes section unless the user explicitly requests another grouping. A PDF containing multiple lectures remains one combined section.
2. Compare the new sources with the current repository and existing site. Preserve prior detailed guides and every flashcard the user explicitly marked or asked to save.
3. Read the complete relevant PDF and transcript/recording. Use slide visuals as well as extracted text when graphs, equations, or page layout carry meaning. Distinguish professor statements from explanatory additions.
4. Expand the Study Guide at the same level of detail as the existing full guides. Prefer many focused mini-lectures over a compressed overview. Cite the source lecture and PDF page range inside each section. Whenever the user asks for a mathematical derivation, equation manipulation, or calculation, update the matching mini-lecture with the full intermediate steps rather than only the final formula.
5. Add the original professor PDF to Lecture Notes as its own embedded, openable, downloadable section. Do not invent a separate lecture from an appendix or internal page heading.
6. Reconcile flashcards cumulatively. Group cards by lecture, retain earlier marked cards, and add new cards only when the user marks them or asks to save them.
7. Validate locally, publish to `yingnichang/my-learning`, wait for the final GitHub Pages deployment, and verify the live navigation, counts, search, PDF links, and interactive cards.

## Non-negotiable rules

- The Study Guide is explanatory learning material, not a slide summary. Keep intuition, derivation, examples, graph-reading guidance, common confusion, trading/modeling implications, memory rules, and exam/project relevance when supported.
- Math-process questions are cumulative content requirements: show the starting equation, every non-trivial algebra/calculus/Itô/conditioning step, substitutions, assumptions, and the final interpretation. Define symbols at first use and explain why each transformation is valid.
- Never present a lecture PDF that was not supplied. Never infer a new Lecture Notes section from pages inside another PDF.
- Keep professor PDFs unchanged unless the user explicitly requests a derived or cropped copy. If a new public PDF contains personal contact details or other sensitive information, identify what will become public and obtain action-time confirmation before uploading it.
- Do not delete or rename saved flashcards merely to reduce the count. If combined cards are split for learning clarity, preserve all original concepts and explain the new total.
- Preserve responsive behavior, keyboard-accessible controls, source links, and the current visual system unless the user requests a redesign.
- Publish only after syntax and structural checks pass. Do not report success until the final Pages build succeeds and the live site shows the intended content.

## Completion report

State what lectures and files were added, how many mini-lectures and flashcards now exist per lecture, whether the deployment succeeded, and provide the verified deepest relevant public link.
