let list = document.getElementById('list');
let input = document.getElementById('input');
let button = document.getElementById('button');


button.addEventListener('click', function(){
    let li = document.createElement('li');
    let p = document.createElement('p');
    list.append(li);
    li.append(p);
    p.innerText = input.value;
    input.value = '';
})