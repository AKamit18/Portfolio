const scroll = new LocomotiveScroll({
    el: document.querySelector('#page1'),
    smooth: true
});
let tl=gsap.timeline();

let circle_9= document.querySelector("#nav-items .circle-9")
circle_9.addEventListener("mouseover",function(){
   
   gsap.to(".p2",{
    y:-20,
   })
   gsap.to(".p4",{
    x:-20,
   })
   gsap.to(".p8",{
    y:20,
   })
   gsap.to(".p6",{
    x:20,
   })
   gsap.to(".circle-9",{
    rotate:180,
   })
   gsap.to("#nav-items .circle-9 .hor",{
    x:-17,
    width:40,
    
    borderRadius:"10px 10px 10px 10px"
   })
  
   gsap.to("#nav-items .circle-9 .hor .ver",{
    
    height:40,
    width:10,
    border:"2px solid #000",
    borderRadius:"10px 10px 10px 10px"
   })
  

      
})
circle_9.addEventListener("mouseleave",function(){
    gsap.to(".p2",{
        y:0,
       })
       gsap.to(".p4",{
        x:0,
       })
       gsap.to(".p8",{
        y:0,
       })
       gsap.to(".p6",{
        x:0,
       })
       gsap.to(".circle-9",{
        rotate:0,
       })
       gsap.to("#nav-items .circle-9 .hor",{
        width:10,
        x:0,
        borderRadius:"10px 10px 10px 10px"
       })
      
       gsap.to("#nav-items .circle-9 .hor .ver",{
        height:10,
        border:"2px solid #000",
        borderRadius:"10px 10px 10px 10px"
       })
})



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
const myArr=[ "animator", "chiller", "ui specialist"];
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
    stagger:0.1,
    color:"#Fff"
})
gsap.to("#profile-section",{
    
   duration:2,
    borderRadius: "50%",
    onComplete:()=>{
        gsap.to("#profile-section",{
            y:20,
            repeat:-1,
            duration:1,
            yoyo:true,
        })
    }
    
})
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     console.log(color)
//     return color;
//   }

//   // GSAP animation to continuously change the background color
//   function animateBackgroundColor() {
//     gsap.to('.low-inner', {
//       backgroundColor: getRandomColor(),
//       duration: 2,
//       width:0
//     //   ease:
//       onComplete: animateBackgroundColor, // Repeat the animation when it completes
//     });
//     gsap.to('.low-inner1', {
//       backgroundColor: getRandomColor(),
//       duration: 2,
//       ease:'bounce-in',
//       onComplete: animateBackgroundColor, // Repeat the animation when it completes
//     });
//   }

//   // Start the animation
//   animateBackgroundColor();

gsap.from("#main #profile-section #photo  img",{
    // y:20,
    scale:1.02,
    duration: 1,
    repeat:-1,
    border:10,
    yoyo:1,
})


gsap.to("#main #profile-section #photo  img" ,{
    y:-20,
    scale:1,
    duration:1,
    repeat:-1,
    yoyo:true,
    
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
 


    




