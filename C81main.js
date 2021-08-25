mousevent="empty"
var lasstpositonofx,lasstpositonofy

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext('2d')
widthofline=2
var width=screen.width
var height=screen.height
new_width=screen.width-70
new_height=screen.height-300
if(width<992){
    document.getElementById("myCanvas").width=new_width
    document.getElementById("myCanvas").height=new_height
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart(e){
    color=document.getElementById("color").value
    widthofline=document.getElementById("widthofline").value
    lasstpositonofx=e.touches[0].clientX-canvas.offsetLeft
    lasstpositonofy=e.touches[0].clientY-canvas.offsetTop

}

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color=document.getElementById("color").value
    widthofline=document.getElementById("widthofline").value
   mousevent="mousedown"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentpositionofmousx=e.clientX-canvas.offsetLeft
    currentpositionofmousy=e.clientY-canvas.offsetTop
    if(mousevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthofline
        console.log("lass postion of xandy")
        console.log("x="+lasstpositonofx+"y="+lasstpositonofy)
        ctx.moveTo(lasstpositonofx,lasstpositonofy)
        console.log("current postion of xandy")
        console.log("x="+currentpositionofmousx+"y="+currentpositionofmousy)
        ctx.lineTo(currentpositionofmousx,currentpositionofmousy)
        ctx.stroke()
    }
    lasstpositonofx=currentpositionofmousx
    lasstpositonofy=currentpositionofmousy

}
canvas.addEventListener("touchmove",mytouchmove)
function mytouchmove(e){
    currentpositionoftouchx=e.touches[0].clientX-canvas.offsetLeft
    currentpositionoftouchy=e.touches[0].clientY-canvas.offsetTop
    
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthofline
        console.log("lass postion of xandy")
        console.log("x="+lasstpositonofx+"y="+lasstpositonofy)
        ctx.moveTo(lasstpositonofx,lasstpositonofy)
        console.log("current postion of xandy")
        console.log("x="+currentpositionoftouchx+"y="+currentpositionoftouchy)
        ctx.lineTo(currentpositionoftouchx,currentpositionoftouchy)
        ctx.stroke()
    
    lasstpositonofx=currentpositionoftouchx
    lasstpositonofy=currentpositionoftouchy

}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
   mousevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
   mousevent="mouseleave"
}



function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}