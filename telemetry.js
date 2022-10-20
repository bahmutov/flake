const fetch = require("node-fetch");

function pingTelemetry(source, name, data) {
  const url = "https://telemetry.replay.io";

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      event: "hi-jaril"
    }),
  }).catch(console.error);
}

module.exports = {
  pingTelemetry,
};