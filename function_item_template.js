
/**
 * n8n Function Item node template
 * Input: current item in $json
 * Output: single {json:{...}}
 */
const data = $json || {};
try {
  // TODO: implement
  return { json: { ok: true, original: data } };
} catch (e) {
  return { json: { _error: String(e && e.message || e), original: data } };
}
