<!--/******
 * VISUALISIERUNG 1
 * Author: Mina Schütz (730205), Max Röthig, Laura Puchinger
 * Gruppe: OH_DA Hochschule Darmstadt, 
 * Sommersemester 2018
 * Projekt: Visual Forecast Analytics
 * Betreuer: Prof. Dr. Ing.- Kawa Nazemi
*****/
//https://github.com/d3/d3/wiki/tutorials - turoials d3
//http://d3plus.org/examples/basic/9029130/ - TreeMap Example

//http://api.vissights.net/databases - databases
-->
<!DOCTYPE html>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="https://d3js.org/d3.v5.min.js"></script>

<html lang="en">
<head>
</head>
<body>

<script>
$(document).ready(function(){
var ourData = [];

$.ajax({
                url: "http://api.vissights.net/semaservice-web-api-vissights/v2/eg/topics",
				type: 'GET',
				success: function (topics){
					ourData.push(topics[0].phrase[0][1]);
					console.log(ourData)
					var placement = "#canvas",
						width = 400,
						height =400;

					var svg = d3.select(placement).append("svg")
						.attr("width", width)
						.attr("height", height)
						.append("g");
	
					svg.append("circle").data(ourData)
						.style("fill", "purple")
						.attr("cx", function (d){
							return d*150;})
						.attr("cy", function(d){
							return d*150;})
						.attr("r", function(d){
							return d*150;
						});
						
				}
});
//function(d) greift auf die daten zu, dabei wird d in der function nicht weiter spezifiziert da wir ohnehin nur eine Zahl als Data haben
// hätten wir mehrere Daten, jeweils für die x und y achse könnte man in der function direkt darauf zugreifen indem man "return d.x*100) schreibt

		
console.log("Hallo");
});
$(document).ready(function(){
var ourData = [];
//var color = d3.scale.category10();
$.ajax({
                url: "http://api.vissights.net/semaservice-web-api-vissights/v2/springer/author/search?authorname=Melanie%20Siegel",
				type: 'GET',
				success: function (person){
					for( i=0; i<person.length; i++){
							ourData.push=(person[i]);
							var placement = "#canvas",
								width = 400,
								height =400;

							var svg = d3.select(placement).append("svg")
								.attr("width", width)
								.attr("height", height)
								.append("g");
								
							for(a = 0; a<5; a++){
								svg.append("circle").data(ourData)
									.style("fill", "#660000")
									.attr("cx", 200)
									.attr("cy", 200)
									.attr("r", function(d){
										return d.topics[a]*150;
								});
							}
					}
				//ourData.push=(person[0].topics);
				console.log(ourData)
				}
});


		
console.log("Hallo");
});
</script>
<div id="canvas">
</div>
</body>
</html>

function niceTreeMap (name){

	var color = d3.scale.category20b();
	
	var treemap = d3.layout.treemap()
		.size([500,500])
		.nodes(name);
		
	var cells = canvas.selectALL(".cell")
		.data(treemap)
		.enter()
		.append("g")
		.attr("class", "cell")
		
	cells.append("rect")
		.attr("x", 200)
		.attr("y", 200)
		.attr("width", 300)
		.attr("height", 300)
		.attr("fill", "purple");
		
	d3.selectAll("input")
      .data([sumBySize, sumByCount], function(d) { return d ? d.name : this.value; })	
	
console.log(treemap);	
};