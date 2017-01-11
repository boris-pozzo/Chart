var competences = {
	"HTML/CSS": 40,
	"Javascript": 50,
	"Node": 100,
	"React": 30
}

var c = document.getElementById('canvas').getContext('2d');
var xStroke = 20;
var yStroke = 0;
var widthStroke = 200;
var heightStroke = 50;

var spaceBetween = 100;



(function getJSON (data) {



var keys = Object.keys(data);
keys.forEach(function (key) {

yStroke += spaceBetween;
c.strokeStyle = "black";
c.strokeRect(xStroke,yStroke, widthStroke, heightStroke);

var value = data[key]* widthStroke/100;
if(value > 100){
	c.fillStyle = "red";
} else {
	c.fillStyle = "green";
}

c.fillRect(xStroke, yStroke, value, heightStroke);

console.log(value);
});




})(competences);