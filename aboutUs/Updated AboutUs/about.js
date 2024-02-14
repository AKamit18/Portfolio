
let tl=gsap.timeline({
    scrollTrigger:{
         trigger:"#parent-wrapper",
         start:"100vh 40%",
         end:"-100vh 0%",
         scrub:2,
        //  markers:true,
    }
})


tl.fromTo("#img-page2",{
    position: "absolute",
    top:"37vh",
    left:"7vw",
    height: "180px",
    width: "250px",
    opacity:0,
    scale:1,
    borderRadius: "10px 20px 20px 10px",

},{
    position: "absolute",
    top:"37vh",
    duration:6,
    left:"0vw",
    height: "100vh",
    width: "100%",
    opacity:1,
    scale:1,
    borderRadius: "0px",

})
// tl.to(".tv-mover , .parent-wrapper",{
//     height:"100vh",
//     width:"100vw"
// })

let time=gsap.timeline();
time.from("#image-container .top-mover",{
    
    // x:-90,
    rotateX:90,
    duration:1,
    repeat:-1,
    ease:"bounce-inOut",
    opacity:0,
    yoyo:true,
},'abba')
time.from("#image-container .low-mover",{
    
    rotateX:90,
    
    duration:1,
    opacity:0,
    repeat:-1,
    yoyo:true,
    borderRadius:"4px "
},'abba')

