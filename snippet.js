
/**
 * Paste/iterate your Function-node inner logic here and export a wrapper
 * that emulates n8n's Function node mapping over items.
 */
module.exports = (inItems) => {
  function safe(fn){ try{return fn();}catch(e){return{error:String(e && e.message || e)}}}
  const out = inItems.map((item, idx) => {
    const data = item.json || {};
    const res = safe(() => {
      // === Replace with your logic ===
      const slug = String((data.name||'').trim().toLowerCase()).replace(/\s+/g,'-');
      return { id: Number(data.id ?? 0), slug };
    });
    if (res && res.error) return { json: { _error: res.error, original: data }, pairedItem: { item: idx } };
    return { json: res, pairedItem: { item: idx } };
  });
  return out;
};
