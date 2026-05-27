---
name: my-portfolio
description: Work on Nikolay Kevlich's personal portfolio project at D:\Job\my-portfolio. Use this skill when Codex is asked to inspect, maintain, refactor, redesign, debug, build, deploy, or add features to this CRA React TypeScript portfolio, including its SCSS modules, sections, contact form, assets, animations, GitHub Pages deploy flow, or project memory.
---

# My Portfolio

Use this skill as the project onboarding guide for this repository.

## First Pass

Read `.codex/memories/my-portfolio.md` for the current project memory.
Then inspect the exact files involved in the request before editing.

## Project Facts

- Stack: Create React App, React 18, TypeScript, SCSS modules, framer-motion, react-scroll, react-waypoint, react-hook-form, zod, axios, antd.
- Package manager: Yarn 1.22.22. Prefer `yarn` commands.
- Shell environment: Windows with PowerShell 7. Prefer PowerShell syntax and Windows paths; use `C:\Program Files\PowerShell\7\pwsh.exe` when an explicit shell is needed.
- Entry points: `src/index.tsx`, `src/app/App.tsx`.
- Layout sections: `Header`, `Wrapper`, `MySkills`, `MyCrafts`, `Work`, `MyContacts`, `Footer`.
- Navigation ids: `wrap`, `skills`, `crafts`, `contact`.
- Imports: use absolute imports from `src` where the project already does.
- Deploy: `yarn deploy` publishes `build/` through `gh-pages`; homepage path is `/my-portfolio/`.

## Implementation Rules

- Preserve the existing visual identity unless asked otherwise: Jost font, dark surfaces, muted gray text, green accent, animated portfolio feel.
- Keep component changes close to the current feature structure under `src/features` and shared UI under `src/common/components`.
- Prefer typed React patterns, stable callbacks, and hook dependency correctness over eslint suppressions.
- Avoid editing generated CSS, CSS maps, `build/`, or `node_modules`; source styles live in `.scss`.
- For contact-form changes, account for `REACT_APP_BASE_URL` because `axios` reads it from `src/common/api/instance.ts`.
- For new portfolio entries or skills, update the relevant data arrays and local image assets together.

## Verification

- Run `yarn build` after code changes.
- Current known warnings are hook dependency warnings in `src/app/App.tsx` and `src/common/components/modal/Modal.tsx`; fix them when touching those areas.
- Use the Browser plugin against `http://localhost:3000` after visual/frontend changes when practical.
