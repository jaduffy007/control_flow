
var bottles = 99;

while (bottles > 0) {
	console.log (bottles+" "+"bottles of beer on the wall" + " "+ bottles + 
	" bottles of beer " +" knock one down, pass it around"+" "+
	(bottles - 1) + " bottles of beer on the wall");
	bottles--;
}