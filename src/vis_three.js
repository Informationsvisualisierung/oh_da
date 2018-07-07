/******
 * VISUALISIERUNG 3
 * Author: Mina Schütz (730205), Max Röthig, Laura Puchinger
 * Gruppe: OH_DA Hochschule Darmstadt, 
 * Sommersemester 2018
 * Projekt: Visual Forecast Analytics
 * Betreuer: Prof. Dr. Ing.- Kawa Nazemi
*****/

		$(document).ready(function(){console.log("hiho");
		var ourData = ["die daten"];
		console.log(ourData);
		d3.json("chocolate.json", function(ourData){
				console.log(ourData);
				console.log("hiho no 2");		
                console.log(treemap);		
                return ourData;
			});
            console.log("Hallo no 3");
		});
		console.log("Hallo Ende.");