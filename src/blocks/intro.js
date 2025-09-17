import htmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";

export default function intro(ids) {
  return {
    type: htmlKeyboardResponse,
    stimulus: `
      <h2>Welcome</h2>
      <p>Participant: <code>${ids.participant_id}</code></p>
      <p>Condition: <b>${ids.condition}</b></p>
      <p>Press any key to begin.</p>
    `
  };
}