# Blueprint viewer

A read-only mirror of the thinking workspace one level up: the canvas (`/`) draws each
module's `module.md` frontmatter as a card and auto-routes the wires from `connects`;
the Playbook (`/library`) lays out every assembly and signal doc. The docs are the
source of truth; this app only reads them.

## Run it locally (no local Node needed)

From the workspace root:

```sh
docker compose up            # → http://localhost:3000
BLUEPRINT_PORT=3002 docker compose up   # if another project already holds 3000
```

The whole workspace is bind-mounted at `/work`, and every request re-reads the docs, so
edit a `.md`, reload, and the view updates. After a container restart, hard-refresh any
tab you had open (Turbopack's dev chunk hashes change on rebuild).

**iCloud gotcha:** this folder lives under `~/Documents`, which iCloud can evict to the
cloud ("dataless" files). Docker cannot trigger the download, so reads fail with
`EIO` / `I/O error (os error 5)` on random files. Fix: `brctl download <file>` (or
open the folder in Finder) and the reads succeed again.

## Publish it (GitHub Pages)

`.github/workflows/pages.yml` builds a static snapshot on every push to `main` and
deploys it to `https://<user>.github.io/<repo>/`. One-time setup in the repo:
**Settings → Pages → Build and deployment → Source: GitHub Actions.**

The static build is the same app with two env flags (`STATIC_EXPORT=1`, plus
`PAGES_BASE_PATH=/<repo>`), see `next.config.ts`. It bakes the docs in at build time
instead of reading them per request; the Playbook's `?module=` / `?play=` deep links
are read in the browser so both modes work. To try the export locally:

```sh
docker compose exec blueprint sh -c 'STATIC_EXPORT=1 PAGES_BASE_PATH=/<repo> npx next build'
# → blueprint/out/
```
