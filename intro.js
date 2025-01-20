function loadSVG () {
    fetch("resourcess/bg.svg")
    .then((response) => { return response.text();})
    .then((svg) => {
        document.getElementById('bg_city').innerHTML = svg;
        document.querySelector('#bg_city svg').setAttribute("preserveAspectRatio", "xMidYMid slice");
        setAnimationScroll();
    })
}
loadSVG();
function setAnimationScroll () {
    gsap.registerPlugin(ScrollTrigger);
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true
        }
    });

    runAnimation.add([
        gsap.to("#bg_city svg", 2, {
            scale: 1.1
        }) 
        
    ])
    .add([
        gsap.to("#bg_city svg", 2, {
            scale: 1.2
        }), 
        gsap.to("#right-big", 2, {
            x: 200,
            y:-200,
            
        }),
        gsap.to("#left-big", 2, {
            x: -200,
            y:-200,
            
        })
    ])
    .add([
        gsap.to("#bg_city svg", 2, {
            scale: 1.3
        }),
        gsap.to("#right-small", 2, {
            x: 200,
            y:100,
            
        }),
        gsap.to("#left-small", 2, {
            x: -200,
            y:100,
            
        })
    ])
    .add([
        gsap.to("#bg_city svg", 2, {
            scale: 1.3
        }),
        gsap.to("#sand", 2, {
            y:-150,
            zindex: 99
            
        })
    ]);

}