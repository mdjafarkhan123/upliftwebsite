# Save, pause, finish, or postpone

Read before stopping, finishing a part, or doing something outside the project that would cause harm if done
twice. Work on one part at a time. Move on to a small related part only while the session still has room; save and
hand over once the chat has been summarized or the part can no longer be finished well.

## Save the position

Saving means updating the part's note and committing it. Make a note only when unfinished work, a decision or a
question would otherwise be hard to rebuild; save whenever such information appears.

- Update **Steps**, **Stage** and **Next**: the exact next action, the files involved, and anything half-done.
  Save a question for Jafar word for word. A planning handover matters as much as a coding one.
- Keep the technical reasoning the remaining work needs, or link its implementation plan. Sort each new decision
  with **Where a new decision goes** in [SKILL.md](SKILL.md).
- Keep dates, identifiers and code locations that change the next action; link proof, and leave the story of the
  session to Git.
- **Outside actions that would cause harm if done twice**, such as texting a customer: first save its exact
  identifier and how to check whether it happened, and use the service's duplicate protection. After an
  interruption, check the result before trying again; if it cannot be found out, ask Jafar.
- Add newly found work that belongs to this campaign to the roadmap; postpone other work (below), then carry on.

Before committing, check that:

- `NOW.md` still points to the plan's core, and the core changed only with Jafar's yes.
- The plan's approval, the roadmap, `NOW.md` and the part note agree on stage, waits, blockers and next step.
- A blocked part is not the next step just because it was started first.
- `python3 .claude/skills/campaign-memory/scripts/check_memory.py` passes. Trimming to fit a limit keeps every
  approved rule and unfinished condition.

When the campaign's state changes, update its index row: **Planning**; **In progress** (work can continue);
**Paused** (stopped on purpose by Jafar); or **Blocked** (nothing can move until Jafar, someone outside, a provider
or other work answers). One
blocked part does not block a campaign with other work ready. An older campaign's Memory notes keep their shape; its
plan moves only as [plan-files.md](plan-files.md) says.

## Branches

Plan and Memory changes go on the same branch as the work. The part note records the branch, its folder, the
checks done and the next step, and marks unmerged work **Waiting to merge**. Merging, stopping, handing over and
releasing claims follow `docs/agent-concurrency.md`.

## Pause

When Jafar pauses or the session must stop: save the position, commit, and name any half-done files in **Next**.
Saving does not release a claim on unmerged work. Give Jafar the words to resume: `read memory and continue
<campaign>`.

## Finish a part

A part is finished when its done-check passes in the combined project; built but unchecked work is unfinished.
Then:

1. Read its note line by line, and move anything a later part needs to its home under **Where a new decision goes**.
2. Mark the part done in its roadmap row with the date and a link to its proof, such as `Done 2026-11-06 —
   proof: docs/evidence/…`, then delete the note.
3. Point `NOW.md` at the next work that can move; when a whole stage is done, reduce it to one roadmap line and
   delete its stage file.
4. Commit, and release or hand over the claim before starting another part.

## Finish a campaign

A campaign is finished when the agreed first version is checked and every required part is done; any open release
condition or check by Jafar stays visible. Mark the plan built, with the date, under its title; remove the
campaign's index row and folder; commit. Later-version work may be postponed.

## Postpone

Search `Memory/deferred/INDEX.md` first. Update a matching note, or add a row and a note from its template: why it
waits, what brings it back, and anything already known. Remove both when the task is done, dropped, or taken into
a campaign. Pick up postponed work only when Jafar or a note names it.
