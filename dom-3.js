// // project requerment
// * change background color by genarating random rgb color by click a button
// * Also display the hex code to a diseble input field 
// *add a toast message 
// step 1- (creat onload handeler create)
// global var
let copyDive=null;

window.onload=()=>{
    main();
}
function main(){
    const containerPart = document.querySelector("#container");
    const inputColector = document.querySelector("#output");
    const inputColectorRgb = document.querySelector("#output-2");
    const changePart = document.querySelector(".btn");
    const copyPart = document.querySelector(".copy-btn");
    const copyPartTwo = document.querySelector(".copy-btn-2");

    changePart.addEventListener("click",()=>{
        bgcolorhext=randomhexColor();
        const hex=genaratehexcodemaintainer(bgcolorhext);
        const rgbColor=genarateRGBcolor(bgcolorhext);

        containerPart.style.backgroundColor=hex;
        inputColector.value=hex.substring(1);
        inputColectorRgb.value=rgbColor
    })
    copyPart.addEventListener("click",function(){
       window.navigator.clipboard.writeText(`#${inputColector.value}`) 
        if(copyDive!==null){
            copyDive.remove()
            copyDive=null;

        }
        if(validHexacode(inputColector.value)){
            gettoastmessege(`#${inputColector.value} is copied`);
            
        }else{
            alert("Its not a valid color code")
        }


    })

    //rgb copy part
    copyPartTwo.addEventListener("click",function(){
        window.navigator.clipboard.writeText(`${inputColectorRgb.value}`) 
         if(copyDive!==null){
             copyDive.remove()
             copyDive=null;
 
         }
         if(validHexacode(inputColector.value)){
             gettoastmessege(`${inputColectorRgb.value} is copied`);
             
         }else{
             alert("Its not a valid color code")
         }
 
 
     })

    inputColector.addEventListener("keyup",function(e){
        const color = e.target.value;
        if(color){
            inputColector.value=color.toUpperCase()
            inputColectorRgb.value=hexaTOrgb(color);
        }
        if(color && validHexacode(color)){
            containerPart.style.backgroundColor=`#${color}`;
            
        } 
    })

}
    




// step - 2(create random rgb color function )
function randomhexColor(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    return{
        red, 
        green, 
         blue
        }
   
}

//step -3 hexa code maintain function
function genaratehexcodemaintainer({red,green,blue}){
    function twocodegenerator (value){
        const hexcode=value.toString(16);
        return hexcode.length===1?`0${hexcode}`:hexcode;
    }
    return `#${twocodegenerator(red)}${twocodegenerator(green)}${twocodegenerator(blue)}`.toUpperCase();
}

// rgb color code
function genarateRGBcolor({red,green,blue}){
    return `rgb(${red},${green},${blue})`

}


//hexa to rgb convertor
/**
 * 
 * @param {string} hex 
 */
function hexaTOrgb(hex){
    const red = parseInt(hex.substring(0,2),16);
    const green=parseInt(hex.substring(2,4),16);
    const blue =parseInt(hex.substring(4,6),16);
    return `rgb (${red},${green},${blue})`
}

// tost message
const gettoastmessege=(masg)=>{
    copyDive=document.createElement('div')
    copyDive.innerHTML=masg;
    copyDive.className="toast-message toast-message-slide-in"

    copyDive.addEventListener('click',function(){
        copyDive.classList.remove("toast-message-slide-in");
        copyDive.classList.add("toast-message-slide-out");
        copyDive.addEventListener("animationend",function(){
            copyDive.remove()
            copyDive=null;
        })
    })
    document.body.appendChild(copyDive)

}

/**
 * 
 * @param {string} color 
 */

function validHexacode(color){

    if(color.length!==6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);

}

// step - 3( collect all necessary referanse)

// step - 4(handel the click event)
