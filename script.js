const scroll = new LocomotiveScroll({
    el: document.querySelector('#page1'),
    smooth: true
});

let tl=gsap.timeline();
gsap.from("#main",{
    backgroundColor:"black",
    duration:1,
})
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
    yoyo:true,
    onComplete:()=>changingParent.play(),
})
const myArr=[ " Web Developer", " Front-end specialist", " Problem solver"];
let changingParent=gsap.timeline({repeat:-1})
myArr.forEach(val=>{
    
 let changingChild= gsap.timeline({repeat:1,yoyo:true,repeatDelay:1});
 changingChild.fromTo("#profile-section .changing span.values",{
      
      duration:1,
      fontWeight:800,
 },{
    duration:1,
    text:val,
    scale:1,
    ease:"bounce.inOut",
    fontWeight:100,
 })
 changingParent.add(changingChild)
 
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
gsap.fromTo("#profile-section",{
    x:200,
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)", 
    borderRadius: 50,
    
},{
    duration:1,
    ease:"elastic.out(1,0.3)",
    x:0,
    boxShadow: "10px 10px 300px #fff",
    borderRadius: 50,
    
})
gsap.from("#main #profile-section #photo  img",{
    // y:20,
    scale:1.02,
    duration: 1,
    repeat:-1,
    opacity:0.6,
    yoyo:1,
})
gsap.from("#main #profile-section #photo  img",{
    border:237,
    duration: 1,
    
 })

gsap.to("#main #profile-section #photo  img" ,{
    y:-20,
    scale:1,
    duration:1,
    
})
gsap.to("#profile-section",{
    boxShadow: "1px 10px 0px #444",
    scale:1.009,
    duration:4,
    repeat:-1,
    yoyo:true,
})
changingParent.to("#profile-section .low-vertical",{
    backgroundColor:"background: linear-gradient(45deg, red, blue)"
})






gsap.from(".content-Area h1 span:nth-child(1) ",{
    y:-200,
     scale:1,

 })
 gsap.from(".content-Area h1 .sticks ",{
    y:200,
    scale:0,
    opacity:0,
    stagger:0.1,
 })
 gsap.from(".content-Area .text-content p",{
    
    stagger:0.2,
    opacity:0,
    scale:0,
 })
 


    




