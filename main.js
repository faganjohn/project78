var images = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fdad-icon-cartoon-style-dad-icon-cartoon-style-white-background-image123080092&psig=AOvVaw1FL6uslb-PKpG5oXsUWTSW&ust=1625400314394000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLiIw-jsxvECFQAAAAAdAAAAABAD",
 
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fmother_cartoon.html&psig=AOvVaw2XicWHRv0lWujxB0Ltvvnr&ust=1625400375069000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDX4vzsxvECFQAAAAAdAAAAABAD",
   
   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fvideo%2Fclip-11678648-animation-walking-boy-transparent-background&psig=AOvVaw1MGlrh6SSjj5KnD8ilhh1m&ust=1625400482574000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJC7kLHtxvECFQAAAAAdAAAAABAD"
   
   
 ];
 
 var names = [
   "Aby John",
    "Sheeba Babu",
    "Fagan John"
    
 ];
 
 var i = 0
 function nextslide(){
 document.getElementById("photos").src= images[i];
   document.getElementById("names").innerHTML = names [i];
   i++;
   
 }