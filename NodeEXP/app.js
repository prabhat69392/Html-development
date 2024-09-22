const btns = document.querySelectorAll("button");

for (let btn of btns) {  // Declare the loop variable with 'let'
   btn.addEventListener("click", () => {
     console.log("button is clicked");
   });
}