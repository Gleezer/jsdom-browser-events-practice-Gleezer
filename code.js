// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let boxTop = 200;
let boxLeft = 200;
// document.addEventListener('keydown', logKey);

// function logKey(e) {
//     log.textContent += ` ${e.code}`;
//   }
  
function onKeyPress(eventObject){
    console.log("You Pressed: " + eventObject.code);
   if (eventObject.code === 'ArrowDown') {
        boxTop += 10;
        document.getElementById("box").style.top = boxTop + "px";
   } 
   else if (eventObject.code === 'ArrowUp') {
        boxTop -= 10; 
        document.getElementById("box").style.top = boxTop + "px";  
   } 
   else if (eventObject.code === 'ArrowLeft'){
       boxLeft -= 10;
       document.getElementById("box").style.left = boxLeft + "px"
   }
   else if (eventObject.code === 'ArrowRight'){
       boxLeft += 10;
       document.getElementById("box").style.left = boxLeft + "px"
   }
    
   
    
}

function resetImg(){
    boxTop = 200;
    boxLeft = 200;
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
    
}

let reset = document.getElementById('resetButton')
reset.addEventListener('click', resetImg)

document.addEventListener('keydown', onKeyPress);