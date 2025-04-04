/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: 
      Date:   

      Filename: project02-03.js
 */let feedbackS = "You're hovering over the square.";
   let feedbackT = "You're hovering over the triangle.";
   let feedbackC = "You're hovering over the Circle.";



      document.getElementById("square").onmouseover = function() {
          document.getElementById("feedback").innerHTML = feedbackS;          

      };

      document.getElementById("square").onmouseout = function()
      {
            document.getElementById("feedback").innerHTML = " ";
      }

      document.getElementById("triangle").onmouseover = function() {
            document.getElementById("feedback").innerHTML = feedbackT;          
  
        };
  
        document.getElementById("triangle").onmouseout = function()
        {
              document.getElementById("feedback").innerHTML = " ";
        }

        document.getElementById("circle").onmouseover = function() {
            document.getElementById("feedback").innerHTML = feedbackC;          
  
        };
  
        document.getElementById("circle").onmouseout = function()
        {
              document.getElementById("feedback").innerHTML = " ";
        }