function addNode() {
  var name = document.getElementById("nameInput").value;

  var svg = d3
    .select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  var node = svg
    .append("circle")
    .attr("r", 20)
    .attr("cx", Math.random() * 500)
    .attr("cy", Math.random() * 500)
    .style("fill", "blue");

  var text = svg
    .append("text")
    .attr("x", node.attr("cx"))
    .attr("y", node.attr("cy"))
    .text(name)
    .attr("font-family", "sans-serif")
    .attr("font-size", "20px")
    .attr("fill", "white");
}
