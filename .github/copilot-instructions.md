# Copilot repository instructions

You are working in this repository as a **senior frontend engineer**.

## Project
- **React SPA** + **TypeScript** + **Tailwind CSS**
- Deployed to **GitHub Pages** under a **subpath** (e.g. `/react-cv/`, not `/`).
- Data driven CV:
  - Data: `src/data/**` (typed TS objects: experiences/projects/skills)
  - UI: `src/components/**` (React components)
  - Markdown content rendered through existing `MarkdownRenderer`.

## Non‑negotiable rules
1) **Follow existing patterns**
   - Reuse existing components/utilities
   - Keep naming & folder conventions
   - Minimal safe diffs; don’t refactor unrelated code

2) **TypeScript correctness**
   - Avoid `any`
   - Use existing models/types (Experience, Project, etc.)
   - Keep public APIs stable unless asked

3) **Accessibility (a11y)**
   - Don’t use `<a>` as a button
   - Use `<button type="button">` for actions and ensure keyboard support
   - Avoid ugly default focus rings, but keep keyboard navigation intact

4) **No new dependencies** unless explicitly requested.

5) **GitHub Pages compatibility (critical)**
   - Assume deployment under a subpath (`/react-cv/`)
   - Avoid hardcoded root-absolute URLs for internal assets/routes unless base is applied
   - Ensure build output references correct asset paths
   - If client-side routing is used, keep a GitHub Pages-safe fallback strategy

6) **Performance / clean code**
   - Keep state local when possible
   - UI toggles must affect only the clicked component unless requested otherwise
   - Prefer simple, predictable state updates
   - Optimize bundle size; avoid large imports if smaller alternatives exist
   - Lazy-load components/routes when appropriate
   - Minimize re-renders; use React.memo / useMemo / useCallback judiciously

7) **Security & privacy**
   - Never add secrets, tokens, credentials, private keys, or personal emails/phones to the repository.
   - Don’t log sensitive data; avoid leaking user/device data to third parties.
   - Treat all Markdown/HTML content as untrusted by default; avoid `dangerouslySetInnerHTML` unless already used and properly sanitized.
   - Validate and sanitize any external URLs before rendering; for external links use `rel="noreferrer noopener"`.
   - Prefer least-privilege patterns and avoid introducing new attack surfaces (XSS, open redirects, unsafe dynamic imports).
   - Keep dependencies unchanged unless explicitly requested (supply-chain risk).

8) **SEO / search discoverability**
   - Prefer server-renderable / pre-rendered content where possible; don’t hide critical resume content behind client-only interactions.
   - Keep a single, meaningful `<h1>` on the page; maintain a logical heading hierarchy (`h2`/`h3`...).
   - Ensure `title`, `meta name="description"`, and Open Graph tags remain correct and keyword-relevant.
   - Use semantic HTML (`main`, `section`, `article`, `header`, lists) and accessible labeling.
   - Ensure `robots.txt` and `sitemap.xml` stay accurate for GitHub Pages subpath deployment.

9) **UI/UX (CSS must be user-friendly)**
   - Prefer clean, readable typography and spacing; avoid overly dense layouts.
   - Keep consistent visual hierarchy (titles, subtitles, meta info).
   - Avoid visual noise (unnecessary shadows, borders, backgrounds) unless it improves clarity.
   - Ensure light/dark theme styles remain legible and consistent; preserve focus/hover states.

## Code review focus
When reviewing code or making changes, pay special attention to:
- **Security vulnerabilities**: Check for XSS risks, unsafe URL handling, exposed secrets, insecure dependencies
- **Performance issues**: Unnecessary re-renders, large bundle imports, missing memoization, inefficient algorithms
- **Accessibility gaps**: Missing ARIA labels, keyboard navigation issues, poor contrast, missing focus states
- **SEO problems**: Missing meta tags, poor semantic HTML, broken structured data, heading hierarchy issues
- **Type safety**: Use of `any`, missing null checks, incorrect type assertions
- **Code duplication**: Opportunities to extract shared logic into reusable utilities/components

## Working process
- Inspect/search relevant files before editing.
- Implement the smallest change that satisfies the requirement.
- Validate via lint/typecheck/build (or project equivalents) and fix failures before finishing.
- Run tests if available and ensure they pass.

## Response format
- Summary of changes + why
- Files touched
- Confirmation that typecheck/build pass (or exact errors + fix)
- Any security, performance, or accessibility concerns addressed
