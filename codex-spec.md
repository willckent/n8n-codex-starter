
# Codex Spec-First Prompt (n8n Function/Function Item)

You are generating JavaScript for **n8n v1.110.1**.

**TARGET NODE:** [Function | Function Item]  (pick one)

**RUNTIME CONSTRAINTS**
- No external imports.
- Return shape must be correct:
  - Function → `[{ "json": { ... } }]`
  - Function Item → `{ "json": { ... } }`
- Preserve original fields unless told otherwise.
- On error, include `{ "_error": "message" }` in json; do not throw.

**TASK**
- CLEAR, SMALL, TESTABLE description of what to do.

**INPUT EXAMPLE (items)**
```json
[
  { "json": { "id": 1, "name": "Alice" } },
  { "json": { "id": 2, "name": "Bob" } }
]
```

**REQUIRED OUTPUT EXAMPLE**
```json
[
  { "json": { "id": 1, "slug": "alice" } },
  { "json": { "id": 2, "slug": "bob" } }
]
```

**EDGE CASES**
- name may be empty or null.
- id may be string or number.

**TEST VECTORS**
- `{ "json": { "id": "7", "name": "  JOHN  " } }`
- `{ "json": { "id": 0,  "name": "" } }`

**DELIVERABLE**
- Return **only the code** for the chosen node type.
