# my-learning site contract

## Project identity

- Repository: `yingnichang/my-learning`
- Public site: `https://yingnichang.github.io/my-learning/`
- Deployment: GitHub Pages from `main`, repository root
- In the development workspace, deployable files may be under `github-pages/`; GitHub API paths omit that local prefix.

## Current deployed structure

- `index.html`: navigation, overview, Lecture Notes markup, flashcard shell
- `styles.css`: responsive visual system
- `app.js`: navigation, PDF jumps, search behavior, grouped flashcards
- `study-guide-data.js`: detailed mini-lecture content
- `lecture-notes/`: original professor PDFs
- `.nojekyll`: static Pages behavior

Current source organization:

1. Lectures 1 & 2 - Systematic Fixed Income: one combined professor PDF.
2. Lecture 3 - Quantitative Investment Framework, Part 1: one separate professor PDF.
3. No separate Lecture 7 PDF or Lecture Notes section exists. Internal pages labeled Lecture 7 inside the combined file do not authorize a separate section.

## Source-to-site mapping

| New source | Website destination |
|---|---|
| Professor PDF | One embedded card under Lecture Notes, mapped to the lecture(s) actually represented by that file |
| Recording or transcript | Enrich the matching Study Guide sections; do not publish raw recording unless requested |
| User question/explanation | Add to the matching mini-lecture when requested; add a flashcard only when marked/saved |
| Saved flashcard | Append to the correct lecture deck without removing earlier cards |
| Homework/notebook | Add only when the user requests a homework/resources section |

## Repository checks

Before publishing:

- Parse `index.html` successfully.
- Run `node --check app.js` and `node --check study-guide-data.js`.
- Count expected mini-lectures and flashcards by lecture.
- Confirm every referenced PDF path exists in the repository.
- Confirm no UI label advertises an absent lecture PDF.
- Preserve unrelated repository changes.

After publishing:

- Wait for the final Pages workflow for the latest commit to finish successfully. Rapid intermediate commits may be cancelled by GitHub; validate the final consolidated run.
- On the live site, test the relevant navigation tab, lecture selector, search, at least one expanded mini-lecture, one PDF open/view path, and flashcard reveal/next behavior.
