let text = document.getElementById('text');
let tree1L = document.getElementById('tree1-left');
let tree2L = document.getElementById('tree2-left');
let tree1R = document.getElementById('tree3-right');
let tree2R = document.getElementById('tree4-right');
let sand = document.getElementById('sand');

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    tree1L.style.left = value * -1.5 + 'px';
    tree2L.style.left = value * 1.5 + 'px';
    tree1R.style.left = value * -1.5 + 'px';
    tree2R.style.left = value * 1.5 + 'px';
    sand.style.left = value * 1.5 + 'px';

});