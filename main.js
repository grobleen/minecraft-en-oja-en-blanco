var canvas = new fabric.Canvas('mycanvas');
var bloquealtura = 30;
var bloqueancho = 30;
var jugadorx = 10;
var jugadory = 10;
var jugadorobject="";
var blockimageobject="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
jugadorobject = Img;
jugadorobject.scaleToWidth(150);
jugadorobject.scaleToHeight(140);
jugadorobject.set({
top:jugadory,
left:jugadorx    
});
canvas.add(jugadorobject);    
})   
}
function newimage(get_image){
fabric.Image.fromURL(get_image,function(Img){
blockimageobject=Img;
blockimageobject.scaleToWidth(bloqueancho);
blockimageobject.scaleToWidth(bloquealtura);
blockimageobject.set({
top:jugadory,
left:jugadorx    
});
canvas.add(blockimageobject);    
})    
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80'){
bloqueancho = bloqueancho+10;
bloquealtura = bloquealtura+10;
document.getElementById("current_width").innerHTML = bloqueancho;
document.getElementById("current_height").innerHTML = bloquealtura;
}
if(e.shiftKey==true && keyPressed=='77'){
bloqueancho = bloqueancho-10;
bloquealtura = bloquealtura-10;
document.getElementById("current_width").innerHTML = bloqueancho;
document.getElementById("current_height").innerHTML = bloquealtura;
}    
if(keyPressed == '38'){
arriba();    
}
if(keyPressed == '40'){
abajo();
}
if(keyPressed == '37'){
izquierda();
}
if(keyPressed == '39'){
derecha();    
}
if(keyPressed == '87'){
newimage('wall.jpg');    
}
if(keyPressed == '67'){
newimage('cloud.jpg')    
}
if(keyPressed == '68'){
newimage('dark_green.png')    
}
if(keyPressed == '71'){
newimage('ground.png')    
}
if(keyPressed == '76'){
newimage('light_green.png')    
}
if(keyPressed == '82'){
newimage('roof.jpg')    
}
if(keyPressed == '84'){
newimage('trunk.jpg')    
}
if(keyPressed == '85'){
newimage('unique.png')    
}
if(keyPressed == '89'){
newimage('yellow_wall.png')    
}
}
function arriba(){
if(jugadory>=0){
jugadory = jugadory-bloquealtura;
canvas.remove(jugadorobject);
player_update();
}
}
function abajo(){
if(jugadory<=500){
jugadory = jugadory+bloquealtura;
canvas.remove(jugadorobject);
player_update();    
}    
}
function izquierda(){
if(jugadorx>=0){
jugadorx = jugadorx-bloqueancho;
canvas.remove(jugadorobject);
player_update();    
}    
}
function derecha(){
if(jugadorx<=850){
jugadorx = jugadorx+bloqueancho;
canvas.remove(jugadorobject);
player_update();    
}    
}