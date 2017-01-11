var dataJSON = {
	"France": 25,
	"Etats-Unis": 50,
	"Angleterre": 65,
	"Australie": 100,
	"Russie": 20
};

let c = document.getElementById('canvas').getContext('2d');

let widthStroke = 50;
let heightStroke = 200;
let xStroke = 0;
let yStroke = 20;

let spaceBetween = 100;

( function getJSON (data) {

console.log(data);

var keys = Object.keys(data);
keys.forEach(function (key) {

	// Outerline


	xStroke += spaceBetween;
	c.strokeStyle ='dark';
	c.strokeRect(xStroke,yStroke, widthStroke, heightStroke);

	// Fill
	let value = data[key]* heightStroke / 100;
	if (value > 100){
		c.fillStyle ="red";
	} else {
		c.fillStyle = "green";
	}
	console.log(value);
	
	c.fillRect(xStroke, yStroke + heightStroke - value, widthStroke, value);
	
	

})


})(dataJSON);



//intégrer dans une fonction => begin path/close path

		/*c.fillStyle = "black";
		c.fillRect(0,0, canvas.width, canvas.height)*/

		/*c.fillStyle =*/








/*var canvas = document.getElementById('cercle');
    var context = canvas.getContext('2d');
       function drawSquare (){

context.beginPath(); //On démarre un nouveau tracé.
context.arc(100, 100, 80, 0, Math.PI*2, true); //On trace la courbe délimitant notre forme
context.fillStyle = "green"; // fill => remplissage
context.strokeStyle = 'black';
context.lineWidth = 5; // la taille de la bordure
context.fill(); //On utilise la méthode fill(); si l'on veut une forme pleine
context.stroke();
context.closePath();
}

drawSquare ();*/