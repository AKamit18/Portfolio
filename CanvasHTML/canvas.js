let canvas= document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let c=canvas.getContext('2d');
let colorPick="0123456789abcdef"
let colorVal=()=>{
    let letter="#";
    for(let i=0;i<6;i++){
        
        let matter=colorPick[Math.floor(Math.random()*16)];
         letter+=matter;
    }
    return letter;
}
 //  // ---- line + arc + rectangle creation -------------
// for(let i=0;i<10;i++){
//     let x=Math.random()*window.innerHeight;
//     let y=Math.random()*window.innerWidth;

// c.fillStyle=colorVal();
// c.fillRect(x,y,100,100);
// c. beginPath();
// c.moveTo(x,y);
// c.lineTo(y,x);
// c.strokeStyle=colorVal();
// c.stroke();
// // c.beginPath();
// // c.arc(x,y,30,0,1.5*3.14);
// // c.strokeStyle=colorVal();
// // c.stroke()
// }



// -----------Bouncing Ball---------------
// let xxx=200;
// let dx= 10;
// let radius= 20;
// let yyy= 100;
// let dy=10;
// function animate(){
   
//    requestAnimationFrame(animate);
  
//     c.clearRect(0,0,window.innerWidth,window.innerHeight);
//     c.beginPath();
//     c.arc(xxx,yyy,radius, 0 , 2*3.14 ,false);
//     c.strokeStyle="blue";
//     c.stroke();
    
//     if(xxx+radius > window.innerWidth || xxx-radius < 0){
//         dx= -dx;
//     }
//     xxx+=dx;
//     if(yyy+radius > window.innerHeight || yyy-radius < 0){
//         dy= -dy;
//     }
//     yyy+=dy;
// }
// animate();
function Circle(x,y){
    this.x=x;
    this.y=y;
    this.draw=()=>{
        c.beginPath();
        c.arc(x,y,30,0,2*Math.PI,false);
        c.strokeStyle="blue";
        c.stroke();
        console.log(this)
    }
    this.run
}
let circMachine=new Circle(20,30);
console.log(typeof circMachine);
circMachine.draw();