let input = document.querySelector("input");
let ul = document.querySelector("ul");
const newToDO = document.createElement("li");
const spans =document.querySelectorAll("span");
const toDo = document.querySelector('#ToDo');


for(let span of spans){
    span.addEventListener('click',(e)=>{
        e.target.parentElement.remove();
    })
}


input.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        console.log(input.value);
        const newSpan = document.createElement('span');
        newSpan.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
        })
        newSpan.innerText="X";
        newToDO.innerText=input.value;
        newToDO.appendChild(newSpan);

        input.vale="";
        toDo.appendChild(newToDO);
    }
})