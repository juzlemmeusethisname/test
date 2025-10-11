// homework_week_9.js
var vg_spec = "homework_week_9.vg.json";  // Vega-Lite JSON spec with your map

vegaEmbed("#map_chart", vg_spec).then(function(result) {
  // result.view provides access to the Vega view API if needed
}).catch(console.error);
