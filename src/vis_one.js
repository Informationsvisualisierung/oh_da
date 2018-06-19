/******
 * VISUALISIERUNG 1
 * Author: Mina Schütz (730205), Max Röthig, Laura Puchinger
 * Gruppe: OH_DA Hochschule Darmstadt, 
 * Sommersemester 2018
 * Projekt: Visual Forecast Analytics
 * Betreuer: Prof. Dr. Ing.- Kawa Nazemi
*****/
//https://github.com/d3/d3/wiki/tutorials - turoials d3
//http://d3plus.org/examples/basic/9029130/ - TreeMap Example ACHTUNG KEIN D3 plus

//http://api.vissights.net/databases - databases

<!DOCTYPE html>
<html lang="en">

$(document).ready(function(){

$.ajax({
                url: "http://api.vissights.net/semaservice-web-api-vissights/v2/eg/topics",
				type: 'GET',
				success: function (topics){
					console.log(topics);
				}

});

</html>