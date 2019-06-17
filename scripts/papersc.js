// var myCircle=[];
// var num=0;
// for(var i=0; i<=2200;i+=50){
//   for(var j=0; j<=2000; j+=50){
//     myCircle[num] = new Path.Circle(new Point(i, j), 5);
//     myCircle[num].fillColor = "black";
//     num++;
//   }
// }
var circles=[];
function onKeyDown(event){
  var maxPoint= new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var myCircle= new Path.Circle(point, 523);
  myCircle.fillColor = "rgb("+Math.floor(Math.random() * 256)+", "+ Math.floor(Math.random() * 256)+", " +Math.floor(Math.random() * 256)+")";
  circles.push(myCircle);
  }

function onFrame(event){
for(var i=0; i< circles.length;i++){
  circles[i].fillColor.hue+=1;
  circles[i].scale(.923);
  if(circles[i].area < 1){
      circles[i].remove(); // remove the circle from the canvas
      circles.splice(i, 1); // remove the circle from the array
      i--; // decrement i so that the loop doesn't skip a circle because of .splice()
      // console.log(circles);
}}
}
