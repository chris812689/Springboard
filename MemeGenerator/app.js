let images = document.querySelector('input');
let topText = document.getElementById('top');
let bottomText = document.getElementById('bottom');
let newMeme = document.getElementById('newMeme');
const results = document.getElementById('results');
const newImage = document.createElement('img');
const buttons = document.getElementsByClassName('exit')

    newMeme.addEventListener('submit', (e)=>{
        e.preventDefault();
        const meme = onSubmit(
            image.value,
            topText.value,
            bottomText.value
            );
        results.appendChild(meme);
        
    })

for(let button of buttons){
    button.addEventListener('click',(e)=>{
        e.target.parentElement.remove();
    })
}

function onSubmit(image, top, bottom){
        let newDiv = document.createElement('div');
        let button = document.createElement('button');
        let upper = document.createElement('h4');
        let downer = document.createElement('h4');

        newDiv.classList.add('col-3', 'meme');
        button.innerText= 'X';
        button.classList.add('btn', 'btn-danger','exit');
            button.addEventListener('click',(e)=>{
                e.target.parentElement.remove();
            })
        newImage.setAttribute('src',image);
        upper.innerText = top;
        upper.classList.add('upper');
        downer.innerText = bottom;
        downer.classList.add('lower');
        newDiv.appendChild(newImage);
        newDiv.appendChild(upper);
        newDiv.appendChild(downer);
        newDiv.appendChild(button);

        return newDiv;
}