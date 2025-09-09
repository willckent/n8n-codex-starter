
# n8n × Codex Starter (Peak Performance)

This repo scaffolds a smooth workflow between **Codex** and **n8n**.

## Structure
```
workflows/              # n8n exported workflow JSON (one per workflow)
snippets/               # reusable Function/Function Item templates & helpers
tests/                  # local harness to sanity‑check Function logic
scripts/                # deploy scripts (REST API)
.github/workflows/ci.yml# CI to run tests on PRs
prompts/                # spec-first prompt templates for Codex
```

## Quick Start
1. Put your workflow exports in `workflows/`.
2. Develop Function logic in `snippets/` and test locally:
   ```bash
   node tests/run.js tests/items.json
   ```
3. Commit + open a PR. CI will run the harness.
4. Deploy to n8n via:
   ```bash
   N8N_URL=https://your.n8n.host N8N_API_KEY=yourtoken scripts/deploy.sh
   ```

## Safety
- Never commit real credentials. Keep secrets in n8n Credentials or `.env` (ignored).
- Prefer **Function Item** when transforming one item; **Function** when mapping arrays.
- Return correct shapes: Function → `[{json:{...}}]`; Function Item → `{json:{...}}`.
