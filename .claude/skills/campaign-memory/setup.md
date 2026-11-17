# Setting up Memory in a new project

Read once, when a project has no `Memory/` folder.

1. Plans will live in `docs/plans/<feature>/`, shaped as [plan-files.md](plan-files.md) describes.
2. Create `Memory/INDEX.md` and `Memory/deferred/INDEX.md` from the templates; the index header names where plans
   live.
3. Add this rule to the project's agent instructions (`CLAUDE.md`, `AGENTS.md`, or both):

   > **Campaigns.** Load `campaign-memory` to guide multi-session work from planning through design, building,
   > checking and handover, including `read memory and continue`. It keeps the current position in `Memory/`.
   > Clear single-session tasks take its short path.

4. If several sessions may work at once and the instructions have no rule for claiming work, set one up with the
   `agent-coordination` skill before the first parallel session.
5. Commit.

**Done when** a fresh session reading only the agent instructions would load this skill for a campaign and find
`Memory/INDEX.md`.
