let emailPick = document.querySelectorAll(".form input");
let errorPick = document.querySelectorAll(".show")[0];
 
function submitInput() {
    
    let reciveEmail = emailPick[0].value;
    let recivePassword = emailPick[1].value;
    if(reciveEmail === "muzamilbaig24@gmail.com" && recivePassword === "muzamilbaig123*") {
        location = "submited.html"
    }
    else {
        errorPick.style = "display: block;"
    }
}