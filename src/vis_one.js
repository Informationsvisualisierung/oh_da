/******
 * VISUALISIERUNG 1
 * Author: Mina Schütz (730205), Max Röthig, Laura Puchinger
 * Gruppe: OH_DA Hochschule Darmstadt, 
 * Sommersemester 2018
 * Projekt: Visual Forecast Analytics
 * Betreuer: Prof. Dr. Ing.- Kawa Nazemi
*****/

//http://d3plus.org/examples/basic/9029130/ - TreeMap Example

<!DOCTYPE html>
<html lang="en">

$(document).ready(function(){

d3.json("swagger.json", function(data){
    var swagger = data.swagger;
    console.log(swagger);
});
});

<script src="//d3plus.org/js/d3.js"></script> //D jason laden

<script src="//d3plus.org/js/d3plus.js"></script> //D3 plus laden

    <head>
        <meta charset="UTF-8 ">
        <title></title>
        <script type="text/Javascript">
                alert("TreeMap");
                window.document.write ("Das soll mal eine Treemap werden.")
        </script>
    </head>
    <body></p>
        <script>
            var sample_data = [
                {"value": 100, "name": "alpha"},
                {"value": 70, "name": "beta"},
                {"value": 40, "name": "gamma"},
                {"value": 15, "name": "delta"},
                {"value": 5, "name": "epsilon"},
                {"value": 1, "name": "zeta"}
            ]
            
            var visualization = d3plus.viz()
                 .container("#viz")  // container DIV to hold the visualization
                 .data(sample_data)  // data to use with the visualization
                 .type("tree_map")   // visualization type
                 .id("name")         // key for which our data is unique on
                 .size("value")      // sizing of blocks
                 .draw()             // finally, draw the visualization!
</script></body>
</html>