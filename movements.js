let box = document.getElementById('theBox');
let top = document.getElementById('top');
let bottom = document.getElementById('bottom');
let left = document.getElementById('left');
let right = document.getElementById('right');

top.addEventListener('click', function(){
    box.style.transform = 'translateY(-100px)'
})
bottom.addEventListener('click', function(){
    box.style.transform = 'translateY(100px)'
})
left.addEventListener('click', function(){
    box.style.transform = 'translateX(-100px)'
})
right.addEventListener('click', function(){
    box.style.transform = 'translateX(100px)'
})