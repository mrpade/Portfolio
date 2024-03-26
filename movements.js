let box = document.querySelector('#theBox');
let top = document.querySelector('#top');
let bottom = document.querySelector('#bottom');
let left = document.querySelector('#left');
let right = document.querySelector('#right');

let moveTop = () =>{
    box.style.transform = 'translateY(-100px)'
};
bottom.addEventListener('click', function(){
    box.style.transform = 'translateY(100px)'
})
left.addEventListener('click', function(){
    box.style.transform = 'translateX(-100px)'
})
right.addEventListener('click', function(){
    box.style.transform = 'translateX(100px)'
})