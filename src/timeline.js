import htmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";
import intro from "./blocks/intro.js";

export function timeline(jsPsych, ids, EXP) {
  return [
    intro(ids),

    {
      type: htmlKeyboardResponse,
      stimulus: `<p>Simple trial. Press <b>F</b> or <b>J</b>.</p>`,
      choices: ['f','j'],
      data: { block: 'main', trial_kind: 'key' },
      on_finish: (data) => {
        data.correct = (data.response === 'j'); // tiny example
      }
    },

    {
      type: htmlKeyboardResponse,
      stimulus: `<p>Thanks! Data will display after this.</p><p>Press any key to finish.</p>`
    }
  ];
}