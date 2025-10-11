// visualizations.js

// Load Week 9 Map visualization
var vg_spec = "homework_week_9.vg.json";
vegaEmbed("#map_chart", vg_spec)
  .then(function(result) {
    // Map loaded successfully
  })
  .catch(console.error);

// Load Week 10 Publisher visualization
var vg_spec_publisher = "homework_week_10.vg.json";
vegaEmbed("#publisher_chart", vg_spec_publisher)
  .then(function(result) {
    // Publisher chart loaded successfully
  })
  .catch(console.error);
