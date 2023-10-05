// // project requerment
// * change background color by genarating random rgb color by click a button
// * Also display the hex code to a diseble input field 

// step 1- (creat onload handeler create)
window.onload=()=>{
    main();
}
function main(){
    const containerPart = document.querySelector("#container");
    const inputColector = document.querySelector("#output");
    const btnPart = document.querySelector(".btn");
    btnPart.addEventListener("click",()=>{
        bgcolorhext=randomhexColor()
        containerPart.style.backgroundColor=bgcolorhext;
        inputColector.value=bgcolorhext;
    })
 
}



// step - 2(create random rgb color function )
function randomhexColor(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// step - 3( collect all necessary referanse)

// step - 4(handel the click event)