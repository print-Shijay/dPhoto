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

const banner = document.querySelector('.content');
const infoSection = document.querySelector('.info');
const parallaxSection = document.querySelector('.parallax');

const percentageVisible = 0.15;
const percentagePosition = 0.74;

window.addEventListener('scroll', () => {
  const infoSectionTop = infoSection.getBoundingClientRect().top;
  const infoSectionHeight = infoSection.offsetHeight;
  const parallaxSectionTop = parallaxSection.getBoundingClientRect().top;
  const parallaxSectionHeight = parallaxSection.offsetHeight;

  if (infoSectionTop + infoSectionHeight * percentageVisible <= window.innerHeight && infoSectionTop + infoSectionHeight * percentageVisible >= 0) {
    const opacity = Math.min(1, (window.innerHeight - (infoSectionTop + infoSectionHeight * percentageVisible)) / (window.innerHeight / 2));
    banner.style.opacity = opacity;
  } else if (parallaxSectionTop <= window.innerHeight && parallaxSectionTop + parallaxSectionHeight > 0) {
    banner.style.opacity = 0;
  }

  if (infoSectionTop + infoSectionHeight * percentagePosition > window.innerHeight) {
    banner.style.position = 'fixed';
    banner.style.transition = 'top 0.5s ease-in-out';
  }

  if (infoSectionTop + infoSectionHeight * percentagePosition <= window.innerHeight && infoSectionTop + infoSectionHeight * percentagePosition >= 0) {
    banner.style.position = 'absolute';
    banner.style.transition = 'top 0.5s ease-in-out';
  }

  if (!(parallaxSectionTop <= window.innerHeight && parallaxSectionTop + parallaxSectionHeight > 0)) {
    banner.style.opacity = 1;
  }
});


let sections = document.querySelectorAll('div');

window.onscroll = () => {
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop +1300;
    let height = sec.offsetHeight+800;

    if(top >= offset && top < offset + height){
      sec.classList.add('show-animate');
    }

    else{
      sec.classList.remove('show-animate');
    }
  })
}








