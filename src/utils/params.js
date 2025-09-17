// Parse URL params and produce stable IDs / condition
export function getUrlParams() {
  const p = new URLSearchParams(window.location.search);
  const out = {};
  for (const [k, v] of p.entries()) out[k] = v;
  return out;
}

export function hash(str) {
  // simple 32-bit hash (not crypto)
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) >>> 0;
}

export function makeIds(urlParams, nConditions = 2) {
  const pid = urlParams.id || crypto.randomUUID();
  const sess = urlParams.session || crypto.randomUUID();
  const cond = Number.isInteger(+urlParams.cond)
    ? (+urlParams.cond % nConditions)
    : (hash(pid) % nConditions);
  return { participant_id: pid, session_id: sess, condition: cond };
}