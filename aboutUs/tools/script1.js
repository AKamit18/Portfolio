let val=gsap.timeline();

val.from("#nav img, #nav h3,h4,button ",{
    y:-100,
    duration:4,
    opacity:0,
    stagger:0.2
})
val.from("#main h1", {
    y:100,
    duration: 0.5,
    opacity:0,
    stagger:0.2
})
val.from("#main>img",{
    scale:0,
    opacity:0,
})
val.from("#main>h5",{
    scale:0,
    opacity:0,
})
val.to("#main>h5",{
    y:20,
    repeat:-1,
    duration:1,
    yoyo:true,
})