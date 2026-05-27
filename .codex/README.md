# Project Codex Context

This folder stores portable Codex context for the portfolio repo so it can be recovered from GitHub with the source code.

- `.codex/memories/my-portfolio.md` is the project memory.
- `.codex/skills/my-portfolio/` is the project skill.

For automatic discovery on a new machine, copy:

```powershell
Copy-Item -Recurse .\.codex\skills\my-portfolio "$env:USERPROFILE\.codex\skills\my-portfolio"
Copy-Item .\.codex\memories\my-portfolio.md "$env:USERPROFILE\.codex\memories\my-portfolio.md"
```

The repo-local copies remain the source of truth for recovery.
