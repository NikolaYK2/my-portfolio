# my-portfolio project memory

Workspace: `D:\Job\my-portfolio`.

Environment: Windows with PowerShell 7. Prefer PowerShell commands and Windows paths. When an explicit shell is needed, use `C:\Program Files\PowerShell\7\pwsh.exe`.

This is Nikolay Kevlich's personal portfolio, built with Create React App, React 18, TypeScript, SCSS modules, framer-motion, react-scroll, react-waypoint, react-hook-form, zod, axios, antd, and gh-pages. Package manager is Yarn 1.22.22 (`packageManager` in `package.json`), though npm scripts also exist.

Core commands:
- `yarn start` runs the local CRA dev server at `http://localhost:3000`.
- `yarn build` creates the production build in `build/`.
- `yarn test` starts CRA's interactive Jest runner.
- `yarn deploy` runs `gh-pages -d build`; homepage is `https://NikolaYK2.github.io/my-portfolio`, so production build assumes `/my-portfolio/`.

Project shape:
- Entry: `src/index.tsx`, app root: `src/app/App.tsx`.
- Main sections: `Header`, `Wrapper`, `MySkills`, `MyCrafts`, `Work`, `MyContacts`, `Footer`.
- Navigation ids are important: `wrap`, `skills`, `crafts`, `contact`.
- Absolute imports are based at `src` via `tsconfig.json` `baseUrl: "src"`.
- Styling uses SCSS modules plus global SCSS in `src/assets/SCSS/index.scss`; keep the existing Jost font, dark background, muted gray text, and green accent unless the user asks for a redesign.
- Shared UI lives under `src/common/components`; features live under numbered folders in `src/features`.
- Assets are local under `src/assets`; CV PDFs are in `public/cv_en.pdf` and `public/cv_ru.pdf`.

Contact form:
- `MyContacts.tsx` uses `react-hook-form` + `zod`.
- API call is `apiContacts.sendMessage`, using `axios` instance with `baseURL: process.env.REACT_APP_BASE_URL`.
- Any contact-form work must account for missing/changed `REACT_APP_BASE_URL`.

Current verification as of 2026-05-27:
- `yarn build` succeeds.
- Build warnings: `src/app/App.tsx` missing `debounceSay` dependency in a `useEffect`; `src/common/components/modal/Modal.tsx` missing `handleClickClose` dependency in a `useEffect`.
- Node 24.13.0 emits CRA-related deprecation warning and Browserslist says `caniuse-lite` is outdated. Treat these as technical debt, not a blocker.

Working preferences for future Codex sessions:
- Read existing components and SCSS before changing design; keep edits scoped.
- Prefer TypeScript-safe fixes and stable hooks over suppressing eslint warnings.
- Preserve user changes in the worktree and do not rewrite generated CSS/map files unless a build process requires it.
- For frontend changes, run `yarn build`; use the Browser plugin on localhost when visual verification is relevant.
