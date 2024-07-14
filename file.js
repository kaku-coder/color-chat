let contenorel=document.querySelector(".contenor")

for (let index = 0; index < 30; index++) {
    const colorcontenorel=document.createElement("div")
    colorcontenorel.classList.add("color-contenor")
    contenorel.appendChild(colorcontenorel)
}
const colorcontenorel = document.querySelectorAll(".color-contenor")
console.log(colorcontenorel);
getcolor()


function getcolor(){
    colorcontenorel.forEach((colorcontenor) => {
        const newcolorcode = randomcolor();
        colorcontenor.style.backgroundColor = newcolorcode; // Change colorcontenorel to colorcontenor
        colorcontenor.innerText=newcolorcode
    });
}


randomcolor()
function randomcolor(){
    const chars = "0123456789abcdef"
    const colorlength = 6
    let color = "#";
    for (let index = 0; index < colorlength; index++) {
        const randomnumber =Math.floor(Math.random() * chars.length) 
        color +=chars.substring(randomnumber,randomnumber +1)
        // console.log(color);
    }
    return color
}


// let contenorel = document.querySelector(".contenor")

// for (let index = 0; index < 20; index++) {
//     const creatdiv= document.createElement("div")
//     creatdiv.classList.add("color-contenor")

//     contenorel.appendChild(creatdiv)
    
// }
// randomcolor()

// function randomcolor() {
//     const chars = "0123456789abcdef"
//     const colorlength = 4
//     let color = " ";
//     for (let index = 0; index < colorlength; index++) {
//         const randomnumber=Math.floor(Math.random()*chars.length)
//         console.log(randomnumber);
        
//     }
// }
