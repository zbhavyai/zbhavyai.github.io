---
name: cover-letter
description: "Generate a tailored, one-page cover letter for a specific job description. Rewrites resume/cover_letter.tex with natural, job-aligned prose based on the candidate's real background."
---

# Cover Letter Skill

This skill instructs the agent to craft a tailored, one-page cover letter for a given job description by rewriting `resume/cover_letter.tex`.

The output must read as natural, confident prose — not a mechanical dump of the resume. Every claim must be grounded in the candidate's actual background.

---

## Candidate Background

Before writing anything, read and internalize the following files:

| File                          | Purpose                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| `src/data/experience.json`    | Full work history with responsibilities and tech stack per role                           |
| `src/data/projects.json`      | Personal and academic projects with tech stacks                                           |
| `src/data/skills.json`        | Categorized technical skills                                                              |
| `src/data/certification.json` | Active certifications with validity dates                                                 |
| `src/data/education.json`     | Degrees, universities, and specializations                                                |
| `resume/resume.tex`           | Canonical resume — treat this as the ground truth for phrasing and ordering of experience |

**Do not fabricate anything.** Every project name, technology, metric, and achievement cited must exist verbatim in one of the files above or in `resume/resume.tex`.

---

## Input Required

Ask the user to provide (if not already given):

1. **Company name** — exact legal or trading name (e.g., "Alberta Technology and Innovation")
2. **Role title** — as stated in the job posting (e.g., "Full Stack Developer")
3. **Job description** — paste the full text or the most relevant excerpt (responsibilities + requirements)
4. **Hiring team salutation** _(optional)_ — e.g., "Dear Hiring Manager," or a specific name. Default: `Dear Hiring Team at <Company>,`
5. **Job requisition ID / reference code** _(optional)_ — include only if explicitly listed in the posting

---

## Step-by-step Execution

### Step 1 — Analyse the Job Description

Extract and internally note:

- **Top 5–7 keywords / themes**: e.g., "cloud-native", "AI/ML integration", "REST APIs", "full-stack", "observability", "agile delivery"
- **Must-have technologies**: languages, frameworks, platforms explicitly required
- **Preferred / bonus technologies**: nice-to-haves
- **Soft skills / culture signals**: e.g., "collaborative", "user-centric", "iterative delivery", "public sector impact"
- **Seniority level**: junior / mid / senior / lead
- **Domain focus**: fintech, public sector, AI, SaaS, etc.

### Step 2 — Select Evidence from Background

Map the extracted keywords to the candidate's actual background:

- **Primary experience to foreground**: Pick 1–2 roles or achievements from `experience.json` that most directly address the job's core requirements. The Userful Corporation role (Apr 2022 – Apr 2026) is the richest source — use specific achievements (AI agent framework, credential management, observability, disaster recovery, $100k savings).
- **Projects to mention**: Pick at most 2 projects from `projects.json` that demonstrate relevant range — e.g., BudLib (full-stack, Spring Boot + React, real-world production use) or Melody Engine (FastAPI, AI, Python) or Quote Weaver (Quarkus, GCP, automation).
- **Certifications to cite** _(only if relevant)_: GCP Professional Cloud Architect (Jan 2026–Jan 2028), GCP Associate Cloud Engineer, Generative AI Leader — mention by name only if the JD references cloud or AI.
- **Do not list all skills** — name only those that directly answer requirements in the JD.

### Step 3 — Plan the Four Body Paragraphs

The cover letter body has exactly **four** `\body{}` blocks, in this order:

| Block                   | Purpose                                                                                                           | Guidance                                                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Introduction**        | State intent, role name + JD reference code (if any), company name, and one hook sentence summarising suitability | 2–3 sentences. Lead with the role and company, then immediately assert suitability.                                                                                                                                        |
| **Skills & Highlights** | Narrate 2–3 specific achievements from experience and 1–2 projects that directly answer the JD                    | 4–6 sentences. Use concrete metrics where available (80% MTTD reduction, 90% manual login elimination, $100k savings, RTO <5 min). Do not bullet-point; write flowing prose. Weave in relevant technology names naturally. |
| **Alignment**           | Connect the candidate's values / working style to the company's mission or team culture                           | 2–3 sentences. Draw from culture signals in the JD. Do not restate resume facts — this paragraph is about fit and motivation.                                                                                              |
| **Closing**             | Thank + call to action                                                                                            | 2 sentences. Keep it direct and professional.                                                                                                                                                                              |

### Step 4 — Write the Cover Letter

**Prose quality rules:**

- Write in first person, confident but not boastful.
- Do not start consecutive sentences with "I".
- Vary sentence length — mix short punchy statements with longer explanatory ones.
- Avoid corporate clichés: "passionate", "rockstar", "guru", "leveraged synergies", "detail-oriented", "team player".
- Avoid hollow superlatives: "extremely", "highly", "very".
- Name-drop real project names and real company names (Userful Corporation, Calgary Waldorf School, Morgan Stanley, etc.) rather than vague references.
- Escape LaTeX special characters correctly: `%` → `\%`, `$` → `\$`, `&` → `\&`.
- Avoid using em-dashes.

**Length constraint — this is critical:**

- The rendered PDF must be exactly **one page**.
- Each `\body{}` block wraps text in an 11pt/13pt font with 1.2 line spacing and 1-inch margins on all sides.
- As a rough guide: each paragraph should be **60–100 words**. Total body word count: **~300–380 words**.
- If you are unsure, err on the shorter side — a tight one-page letter is better than an overflowing one.

### Step 5 — Update `resume/cover_letter.tex`

Modify **only** the dynamic content sections. Preserve all LaTeX preamble, packages, fonts, and custom commands exactly as they are. The sections to update are:

```
\body {Dear Hiring Team at <Company>,}

\body { ... introduction ... }

\body { ... skills & highlights ... }

\body { ... alignment ... }

\body { ... closing ... }
```

Do **not** change:

- The preamble (lines 1–62 of the template)
- The heading block (name, email, phone, LinkedIn, portfolio URL)
- The `\today` date line
- The closing signature block ("Yours Sincerely, \\ Bhavyai Gupta")

### Step 6 — Verify Page Count

After writing the file, run. This will compile the cover letter into a PDF at `resume/cover_letter.pdf`.

```bash
make cover
```

Then check the output PDF page count:

```bash
pdfinfo resume/cover_letter.pdf | grep Pages
```

- If **Pages: 1** → Done.
- If **Pages: 2** → content is overflowing. Trim words from the Skills & Highlights paragraph first (it is the longest). Aim to remove 20–40 words while preserving all key facts. Re-run `make cover` until single page is confirmed.

---

## Output to User

After updating `resume/cover_letter.tex`, provide:

1. **Summary of changes** — which company, role, and JD themes were targeted.
2. **Key evidence selected** — which achievements / projects were foregrounded and why.
3. **Page count status** — confirmation that `make cover` was run and the result was 1 page, or a note to verify manually.
4. **Suggested next steps** — e.g., "Review the alignment paragraph to ensure the company mission description feels accurate before submitting."

---

## Common Mistakes to Avoid

| Mistake                                          | What to do instead                                   |
| ------------------------------------------------ | ---------------------------------------------------- |
| Copying bullet points verbatim from `resume.tex` | Rewrite as flowing prose                             |
| Mentioning every technology in the skills list   | Name only 3–5 that directly answer the JD            |
| Using the word "passionate"                      | Describe a concrete action or outcome instead        |
| Writing more than ~380 words of body text        | Trim the Skills paragraph — it's always the longest  |
| Leaving Lorem ipsum placeholder text             | Always replace all four body paragraphs              |
| Citing a project that isn't in `projects.json`   | Only reference projects that exist in the data files |
| Forgetting to escape `%`, `$`, `&` in LaTeX      | Always check special chars before writing            |
