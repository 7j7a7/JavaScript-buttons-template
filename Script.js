function bOne() {
    alert("1");
}

function bTwo() { 
    document.getElementById("body").style.backgroundColor = "#4D3A4D";
    document.getElementById("nav").style.backgroundColor = "#3c303c";
    
    const textCol = document.querySelectorAll("h1, p, li, button");
    textCol.forEach((element) => {
       element.style.color= "#E1A4D6";
    });

    const btnCol = document.querySelectorAll("button");
    btnCol.forEach((element) => {
        element.style.backgroundColor = "#3e3769";
    });

}
function bThree() { 
    document.getElementById("body").style.backgroundColor = "#FBF4D7";
    document.getElementById("nav").style.backgroundColor = "#4D3A4D";
   
    const bCol = document.querySelectorAll("button");
    bCol.forEach((element) => {
        element.style.backgroundColor = "#86007C";
    });

}