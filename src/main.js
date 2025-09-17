import { initJsPsych } from "jspsych";
import preload from "@jspsych/plugin-preload";
import { timeline } from "./timeline.js";
import { getUrlParams, makeIds } from "./utils/params.js";
import { initSave, saveRow, downloadBackupCSV } from "./utils/datapipe.js";
import { BUILD_INFO } from "./utils/buildinfo.js";
import "./styles.css";

const url = getUrlParams();
const ids = makeIds(url, 2);

const jsPsych = initJsPsych({
  display_element: "root",
  show_progress_bar: true,
  on_trial_finish: async (data) => {
    Object.assign(data, {
      participant_id: ids.participant_id,
      session_id: ids.session_id,
      condition: ids.condition,
      ...BUILD_INFO,
      jspsych_version: jsPsych.version()
    });
    await saveRow('trial', data);
    if (url.debug === '1') console.log('trial', data);
  },
  on_finish: () => {
    jsPsych.data.displayData();
    // backup button
    const btn = document.createElement('button');
    btn.textContent = 'Download CSV backup';
    btn.onclick = () => downloadBackupCSV(jsPsych);
    document.querySelector('#root').appendChild(btn);
  }
});

(async function run() {
  await initSave(ids);

  // Example preload (add your own assets later)
  const preloadTrial = {
    type: preload,
    images: [],
    audio: [],
    video: [],
    max_load_time: 10000
  };

  await jsPsych.run([preloadTrial, ...timeline(jsPsych, ids, { PRACTICE_N: 0 })]);
})();