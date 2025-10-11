// Load map first
var vg_spec_map = "homework_week_9.vg.json";  // Map JSON

vegaEmbed("#map_chart", vg_spec_map)
  .then(function(result) {
    console.log("Map rendered successfully");

    // After map is done, render publisher chart
    var vg_spec_publisher = "homework_week_10.vg.json";
    return vegaEmbed("#publisher_chart", vg_spec_publisher);
  })
  .then(function(result) {
    console.log("Publisher chart rendered successfully");
  })
  .catch(function(err) {
    console.error("Error rendering charts:", err);
  });
