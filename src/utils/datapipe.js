// Minimal saver stub. Replace with your DataPipe/OSF/Server API later.
let buffer = [];

export async function initSave(ids) {
  // could validate IDs, ping server, etc.
  console.log('[save] init', ids);
  return true;
}

export async function saveRow(kind, data) {
  // In production, POST to server or DataPipe here.
  // Fallback: keep a local buffer so the session can be downloaded.
  buffer.push({ kind, at: Date.now(), data });
}

export function downloadBackupCSV(jsPsych) {
  const csv = jsPsych.data.get().csv();
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = 'data_backup.csv';
  a.click();
}