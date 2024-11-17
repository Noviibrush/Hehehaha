var app = document.getElementById("typewriter");
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 125,
  deleteSpeed: 125,
});

var navlinks = document.getElementById("navlinks");

function showmenu() {
  navlinks.style.right = "0";
}
function hidemenu() {
  navlinks.style.right = "-200px";
}

typewriter
  .typeString("APEC<br>Asian-Pacific Economic Cooperation")
  .pauseFor(2000) // Wait 2 seconds after typing
  .deleteAll(125)
  .start();

// while(typewriter.typeString("APEC<br>Asian-Pacific Economic Cooperation").start();){

// }

// const text = "APEC<br>Asian-Pacific Economic Cooperation";
// const element = document.getElementById("typewriter");
// let index = 0;

// function typeWriter() {
//   if (index < text.length) {
//                                     // Append one character at a time, handling the line break
//     if (text[index] === "<") {
//       element.innerHTML += "<br>";
//       index += 4; // Skip "<br>"
//     } else {
//       element.innerHTML += text.charAt(index);
//       index++;
//     }
//     setTimeout(typeWriter, 100);         // Adjust typing speed
//   } else {
//     // Reset after a short delay
//     setTimeout(() => {
//       element.innerHTML = "";
//       index = 0;
//       typeWriter();
//     }, 2000);                  // Delay before restarting
//   }
// }

// // Start the effect when the page loads
// window.onload = typeWriter;
