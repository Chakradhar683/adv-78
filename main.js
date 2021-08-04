
var reasons = [
    "Dad and Mom",
    "Me",
    "Sister",
  
  ];
  var images = [
   "Mom n Dad.jpg",
    "Chakri.jpg",
    "shobi.jpg",
  ];
  
  var i = 0;
  function nextslide() 
  {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
     document.getElementById("audio").play();
   
  }
  
  
  
  