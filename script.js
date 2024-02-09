let tl=gsap.timeline();
tl.from(".left-part .logo-name",{
    x:-100,
    duration:1,
    opacity:0,
    scale:0,
})
tl.from(".left-part .logo-name",{
    y:-6,
    durtion:1.3,
    repeat:-1,
    yoyo:true
})

tl.from("#nav-items .right-part i",{
    opacity:0,
    y:-100,
    scale:0,
    stagger:0.1,
})
tl.from("#nav-items .right-part i:nth-child(2)",{
    opacity:0,
})

tl.to("#nav-items .right-part i:nth-child(2)",{
    opacity:1,
    rotate:20,
    duration:0.4,
    repeat:-1,
    yoyo:true,
    stagger:0.1
})

tl.to(".content-Area h1 span",{
   
})






