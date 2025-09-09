
/**
 * n8n Function node template
 * Input: items -> array of {json:{...}}
 * Output: array of {json:{...}}
 */
const inItems = $input.all();

function safe(fn){ try{return fn();}catch(e){return{error:String(e && e.message || e)}}}

const out = inItems.map((item, idx) => {
  const data = item.json || {};
  const res = safe(() => {
    // TODO: implement
    return { ok: true, original: data };
  });
  if (res && res.error) return { json: { _error: res.error, original: data }, pairedItem: { item: idx } };
  return { json: res, pairedItem: { item: idx } };
});

return out;
