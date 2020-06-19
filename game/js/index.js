var game = document.getElementById("games")
var context = game.getContext("2d")
var imgPlayer = document.createElement("img");
imgPlayer.src = "./img/player2.png"

function clearScreen(ctx){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,500,500)
}

var player = {
    x:0,
    y:0,
    width: 50,
    height: 50,
    img: imgPlayer,
    context: context,
    draw(){
        context.drawImage(this.img, this.x, this.y, this.width, this.height)       
    },
    moveRight(){
        
        if(this.x <= 420){
            this.x +=20;
        }
    },
    moveLeft(){
        
        if(this.x >= 20){
            this.x -= 20;
        }
    },
    moveTop(){
        
        if(this.y>=20){
            this.y -=20;
        }
    },
    moveDown(){
        if(this.y<=420){
            this.y +=20;
        }
        
    }
}
window.onload = () =>{
   //start game
    //context.drawImage(player.img, player.x, player.y, player.width,player.height)
   setInterval(() => {
       clearScreen(context)
       player.draw();
   }, 1);
}
//nếu để  context.drawImage(imgPlayer, 0, 0) thì lấy kích cỡ mặc định của ảnh. còn  context.drawImage(imgPlayer, 0, 0, 50,50) là thu ảnh về kích cỡ 50,50
// setTimeout(()=>{
//     clearScreen(context);
//     player.x =70;
//     player.y = 70;
//     player.draw();
// },1000)

window.addEventListener("keydown",(event)=>{
    console.log(event);
    switch(event.keyCode){
        case 37:
            console.log("left arrow");
            player.moveLeft();
            break;
        case 38:
            console.log("top arrow");
            player.moveTop();
            break;
        case 39:
            console.log("right arrow");
            player.moveRight();
            // clearScreen(context);
            // player.draw();

            break;
        case 40:
            console.log("Down arrow");
            player.moveDown();
            break;
    }
})