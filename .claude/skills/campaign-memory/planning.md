# Planning a campaign

Read for a new campaign, unfinished planning, or cutting a plan into parts. Plans follow
[plan-files.md](plan-files.md). Each step ends on its **Done when**.

## Choose the path

Start a campaign when the work has several results that can each be checked, or more talk than one session holds.
A small one (two or three sessions, few product choices) takes the short path: kickoff and meeting in one session,
homework only if needed, a short `plan.md`. Larger ones give each step its own session.

## 1. Kickoff

**Done when** the campaign exists and Jafar knows which model to start the meeting with.

1. Claim `kickoff` first. Search the campaign index and the deferred index; carry any match's saved limits into
   the plan.
2. Ask only what is needed to name the campaign and see its edges; keep the real questions for the meeting.
3. From the templates, create `plan.md` with Jafar's goal in one line, `meeting-notes.md` with his first message in
   his own words, `NOW.md`, and `ROADMAP.md` with the planning parts. Add the index row and commit.
4. Tell Jafar which model fits the meeting. Full path: he starts a new session with `read memory and continue
   <campaign>`. Short path: go straight on.

## 2. Homework

**Done when** every question research can answer has a saved answer and a recommendation.

Find how mature products and proven methods handle it, following `proven-development`; save larger findings with
`research`. Big reading, such as many screenshots of a live app, runs in a helper agent or its own session, keeping the
meeting's room for Jafar. Mark each finding as checked, a guess, or our proposal.

## 3. The meeting

**Done when** no first-version question is open, or the session stops with the next question saved word for word.

Interview Jafar with `grilling` (add `grill-with-docs` for names or lasting decisions; its glossary is not the
plan). Ask only real product choices, each with a recommendation; what homework answered is not a question,
and technical choices stay with the AI. Save each answer in `meeting-notes.md` as soon as he gives it.
A new research need becomes homework for a helper agent or a later step.

## 4. Write the plan

**Done when** a fresh reviewer finds no gap and Jafar has approved the core and the first version.

1. Turn the notes and research into the plan, core first, writing down only what is understood (the `to-spec`
   way); open questions go under **Still open**.
2. Check it against the real code, services and providers; put any limit users would notice into the plan.
3. A helper agent gets the plan, the meeting notes and the named sources, not this chat, and answers: did every
   answer reach the plan, and what would a builder still need to ask? Fix gaps from evidence. With no helper, do
   this read yourself and say so.
4. Bring Jafar the remaining choices together. Show him the core word by word and a short summary of each topic;
   save his approval and its date in `NOW.md`.

Later-version questions may stay open when marked as later. A new question reopens only the part of the plan it
touches; other approvals stand.

## Large planning

When the decisions alone need more than one session, use `wayfinder`: list small decision parts in the planning
roadmap, with what each waits for and where its answer is saved, and settle one at a time. Then write the plan.

## 5. Cut the plan into parts

**Done when** every first-version requirement has a part, every part serves one, and Jafar approved the order.

Draft parts with `to-tickets`. Each delivers a thin, complete result that can be shown or checked, fits one
session, names the topics it reads and the parts it waits for, and has checks anyone can see. Uncertain work goes
first; a technical foundation may have no screen if it names the user result it enables. Show Jafar
each part's name, result and waits, with any conflicts or missing checks. Save the parts in `ROADMAP.md`.

## Helper skills

Inside a campaign, helper skills save only into the campaign's files, with no separate tickets, trackers or
`.scratch` files, then hand back here.
