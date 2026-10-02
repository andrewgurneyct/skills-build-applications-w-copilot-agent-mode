# OctoFit Tracker Presentation Tier

React 19, React Router, and Bootstrap provide views for activities, leaderboard,
teams, users, and workouts.

## API Environment

`VITE_CODESPACE_NAME` must be defined for a Codespaces API deployment. Define it
in `octofit-tracker/frontend/.env.local`:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

Vite reads this through `import.meta.env.VITE_CODESPACE_NAME`. The API base is
`https://<VITE_CODESPACE_NAME>-8000.app.github.dev`. If the variable is unset,
blank, or invalid, it safely falls back to `http://localhost:8000`.
Restart Vite after changing this file. Never put secrets in `VITE_` variables,
which are exposed to the browser.

Start the frontend from the repository root:

```bash
npm run dev --prefix octofit-tracker/frontend
```

Open port 5173 with the backend running on port 8000. During development, fetches
use Vite's same-origin `/api` proxy to the local backend, including in Codespaces,
to avoid cross-origin requests. Production builds use the configured base URL
directly; the API must allow the frontend origin through CORS. Production web
hosts must serve `index.html` for React Router paths such as `/teams`.

Views use `/api/activities/`, `/api/leaderboard/`, `/api/teams/`, `/api/users/`,
and `/api/workouts/`. Supported responses are arrays, named collections such as
`{ "teams": [] }`, and paginated objects with `results`, `count`, `next`, and
`previous`. Pagination links must target the same API origin and endpoint.

Validate with `npm run build --prefix octofit-tracker/frontend` and
`npm run lint --prefix octofit-tracker/frontend`.

## Vite Template Notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
