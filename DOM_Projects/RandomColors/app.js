const letters= document.querySelectorAll('span');

function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}


// letters.style.color= randomRGB();

setInterval(()=>{
    for(let letter of letters){
        letter.style.color=randomRGB();
    }
},700);