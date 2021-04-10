
const idOne = document.getElementById('container');
const idTwo = document.querySelector('#container');
const second = document.getElementsByClassName('second');
const third = document.querySelector('third');
const footer = document.querySelector('.footer');
const list = document.querySelector('ul');

// idOne.innerText ='Hello';

footer.classList.add('main');
footer.classList.remove('main');

let newLi = document.createElement('li');
newLi.innerText ='Four';

list.appendChild(newLi);

footer.classList.remove('footer');

// let ordered = document.querySelector('ol li');

// for(let i = 0; i < ordered.length; i++ ){
//     ordered[i].style.backgroundColor="green"
// }

let liInsideOl = document.querySelectorAll("ol li");

for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}