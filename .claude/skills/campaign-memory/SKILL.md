---
name: campaign-memory
description: Guide multi-session work from planning through design, building, verification, and handover. Use to start, resume, checkpoint, pause, defer, or finish a campaign, or when Jafar says to read Memory and continue. Clear single-session tasks take the short path.
---

# Campaign Memory

A **campaign** is work too big for one session. Its plan holds what Jafar agreed, opening with a short **core**
every agent reads. `Memory/` holds where the work stands. This skill guides each session so that a fresh agent
can continue without the old chat.

## Start or resume

1. Read `Memory/INDEX.md` and the work register, as the project's rules say. With no `Memory/` folder, read
   [setup.md](setup.md). A small, clear task needs no campaign: follow the project's skills and finish it.
2. Pick the campaign Jafar named, or the one covering his goal. If he names none, take the only campaign with
   unclaimed work that can move now; if several can, ask which, naming those waiting on him. Never pick by file
   order, recent changes, or another chat.
3. New campaign: read [planning.md](planning.md). Otherwise read its `NOW.md`, the plan's core it points to, and
   the note or roadmap line of the part to work on. With no part named, take a started, unclaimed part that waits
   on nothing, then the next part in `NOW.md`, then any ready part that touches no claimed code or service. If
   nothing can move, say what it waits for.
4. Claim the part before changing files or outside services. A claim stays with its owner until released, or until
   Jafar confirms that session is closed. Take over only the unfinished files the part's note names. Then read the
   plan topics and sources the part names, and nothing more.
5. Check the saved position against the real code, approvals and the result of any outside action; settle a
   contradiction from the evidence. Before acting, know the goal, agreed behaviour, stage, what is done, blockers,
   next step and done-check; anything known only from an old chat goes into the documents first. When a result is
   unknown, or a fix would change agreed behaviour, ask Jafar, and keep doing work that does not depend on it.

## Choose the next action

Do what is missing, not every step every time. Starting a campaign gives permission to choose skills, not to make
product decisions or act outside the project.

- Facts or how mature products do it → `proven-development`; `research` for large reading.
- Product choices → `grilling`; add `grill-with-docs` when names or lasting decisions need recording.
- Planning, writing the plan, or cutting it into parts → [planning.md](planning.md).
- A screen or interaction to agree, building, or proving → [delivery.md](delivery.md) and the project's skills.
- Stopping, finishing a part, or doing something outside the project that would cause harm if done twice →
  [handover.md](handover.md) first.

Reuse settled research, plans and designs. When a skill is missing, use project guidance for the same result.

## Where a new decision goes

For each new decision, ask: would an agent on a later part go wrong, or ask the same
question again, without knowing this?

- **Yes, about what users see or do:** the plan topic it belongs to. A real choice goes to Jafar first, and his
  answer also goes into the meeting notes. The core changes only with his yes.
- **Yes, about how it is built:** a decision record in `docs/adr/` when it is hard to undo or would surprise a
  later reader (format in the `domain-modeling` skill); otherwise the code shows it. Decide these yourself.
- **No:** the part's note.

If other sessions are working on the same campaign and the decision affects them, save it to its home at once.

## Where things live

```text
docs/plans/<feature>/   plan.md (core, then topics), topic files, meeting-notes.md   — see plan-files.md
Memory/INDEX.md         one row per campaign
Memory/campaigns/<campaign>/
  NOW.md                goal, pointer to the core, stage, current and next part, blockers
  ROADMAP.md            parts: topics read, waits, done-check, state (stages/ when it grows)
  parts/<part>.md       unfinished work, what to read, the exact next step
Memory/deferred/        postponed work: INDEX.md and one note per task
```

Read [plan-files.md](plan-files.md) before writing or changing a plan. Make each file from its
[template](templates/). Each fact lives in one place; other files link to it, and to proof instead of copying logs.

Word limits keep every file quick to read: `NOW.md` 200 · roadmap and stage file 800 · part note 500 · deferred
note 150 · index row 50 · plan files as in [plan-files.md](plan-files.md) · this skill's `SKILL.md` 800 and other
guides 700. Before each commit, run `python3 .claude/skills/campaign-memory/scripts/check_memory.py`; it names
changed files over their limit and broken links (`--all` checks every file).
