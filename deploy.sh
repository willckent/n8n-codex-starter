
#!/usr/bin/env bash
set -euo pipefail
: "${N8N_URL:?Set N8N_URL}"
: "${N8N_API_KEY:?Set N8N_API_KEY}"

for f in workflows/*.json; do
  [ -e "$f" ] || continue
  echo "Deploying $f"
  curl -sS -X POST "$N8N_URL/rest/workflows"     -H "Content-Type: application/json"     -H "X-N8N-API-KEY: $N8N_API_KEY"     --data-binary @"$f" >/dev/null
done
echo "Done."
