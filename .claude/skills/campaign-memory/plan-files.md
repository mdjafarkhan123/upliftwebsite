# Plan files

Read before writing or changing a plan. A plan is what Jafar has agreed. It is written for an agent that never
saw the chat, and for Jafar, who reads it in everyday English.

## The plan folder

```text
docs/plans/<feature>/
  plan.md            the core first, then the topics
  <topic>.md         one per topic, once plan.md gets too long
  meeting-notes.md   what Jafar said, in his words; history only
```

Older plans are single files, `docs/<feature>-behavior-contract.md`. A session that needs to change one, while no
other session holds a claim on that campaign, first moves it into this shape as its own commit, keeping every
agreed line, and asks Jafar to approve the new core. Its new meeting notes say earlier meetings were not recorded.

## The core

The core is what every agent must know so that, on any part, even in a situation the plan never mentions, it
makes the choice Jafar would make. It sits at the top of `plan.md` under `## Core` and holds five things:

1. **What Jafar wants**, close to his own words.
2. **Who it is for**, and their real situation.
3. **What success means** for them.
4. **Rules for every part**: only rules that every part must follow.
5. **Edges**: what the first version covers, in a line or two, and what we are not doing.

The test for each line: could an agent working on any part go wrong without it? Then it is core. If only some
parts need it, it goes in a topic. Progress, dates and test stories go in Memory or the proof.

Example: "Team members who are not admins see Spanish when their phone is set to Spanish" changes the text of
every screen, so it is core. "Tips go to the business with the payment" matters only to payments, so it is a
topic line.

Jafar approves the core word by word. Any change to the core needs his yes first; until he answers, keep
working within the current core. A core that keeps changing is holding detail: move that detail to a topic.

## Topics

A topic is one thing users do or experience, such as "working with no signal" or "getting paid". A kind of work,
such as design or testing, is never a topic: the designer and the builder of a screen read the same topic.

Each topic is complete on its own, shaped like [templates/topic.md](templates/topic.md): what happens, its checks,
questions still open, what it leaves out, and its sources. Each rule lives in one place: when two topics need it, one holds it and
the other links to it; when every topic needs it, it is core. How screens look lives in the design system and
Pencil; the plan says what a screen must do. Name topic files in plain words, such as `no-signal.md`.

A small plan keeps its topics as sections of `plan.md`. When `plan.md` would pass its limit, move each topic
into its own file, and list the files under `## Topics` with what each covers and when to read it. Split a topic
file that passes its limit in two; fold a topic of a few lines into its nearest neighbour. A question that
touches every topic goes under `## Still open for the whole campaign` in `plan.md`.

## Meeting notes

`meeting-notes.md` keeps what Jafar said, so the plan can be checked against it: his first message in his own
words, then one entry per answer, saved as soon as he gives it, including answers during design or building:

- 2026-11-05 · Can crews edit job notes with no signal? · Jafar: "yes, they do it all the time" · Decided: yes

The plan is the agreement; the notes are history, so agents that design or build read the plan. When the notes
reach their limit, continue in `meeting-notes-2.md`.

## Writing

Write everyday English in short sentences, with no jargon. Where a rule could be misread, add a real example.
Agreed behaviour stands without a label; mark anything else as "Proposed:" or "Unverified:". A short
"(Jafar, 2026-11-04)" beside a decision shows it is his.

Word limits: core 400 · `plan.md` 1,500 · topic file 1,000 · `meeting-notes.md` 3,000.
