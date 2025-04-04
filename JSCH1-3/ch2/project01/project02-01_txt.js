/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author:Aiden Hill 
      Date:3/20/2025   

      Filename: project02-01.js
 */

     function fahrenheitToCelsius(degree){
            return (degree - 32) / 1.8;
      }

      function celsiusToFahrenheit(degree){
            return (degree * 1.8) + 32;
      }

      document.getElementById("cValue").onchange = function(){
          var cDegree = document.getElementById("cValue").value;
          document.getElementById("fValue").value = celsiusToFahrenheit(cDegree);
      }

      document.getElementById("fValue").onchange = function(){
            var fDegree = document.getElementById("fValue").value;
            document.getElementById("cValue").value = fahrenheitToCelsius(fDegree);
      }