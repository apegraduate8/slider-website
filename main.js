var slideIndex = 1;
////1
var f = document.querySelector(".mini-imgs");
var x = document.getElementsByClassName('switch');
var z = document.getElementsByClassName('switch2');

showDivs(slideIndex);




function plusDivs(n) {
	console.log(slideIndex + "in playdivs");
	showDivs(slideIndex = slideIndex += n);///showDivs(1 = 1 + -1)
}

function showDivs(n) {
	var i;
	console.log(slideIndex + "in show");
////switch class
	if(n > x.length ){slideIndex = 1};
	if(n < 1){slideIndex = slideIndex.length};

	for(var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		z[i].style.display = "none";
	} 
	x[slideIndex - 1].style.display = "block";
	z[slideIndex - 1].style.display = "block";
	console.log(slideIndex + "reach the bottom")
}








var subMain = document.querySelector(".sub-main");
var subOne = subMain.querySelector(".container-hero");
var subTwo = subMain.querySelectorAll(".container-hero")[1];

var n;

var ar = ["coffee1.jpeg","cup2.jpg", "cup3.jpeg"];
var x = document.getElementsByClassName('switch');
var y = x[0];
var comp = getComputedStyle(y, null);
var back = comp.backgroundImage;



function slideUp() {
	subMain.scrollTop = 0;
}

function slideDown() {
	subMain.scrollTop = 820;

	//for(var i = 0; i >= 0; i--){
	//subMain.scrollTop = i;

	//}
}

/* WAS TRYING TO ACCESS THE BACKGROUND IMAGE PROPERTY ANDSWAP IMAGES THAT WAY

var slideIndex = 0;
////1



var ar = ["coffee.jpeg","cup.jpg","cup2.jpg", "cup3.jpeg",];
var x = document.getElementsByClassName('switch');
var b = "file:///Users/student_22/Desktop/slider-site/cup.jpg"



function plusDivs(n) {
	showDivs(slideIndex = slideIndex + 1);///showDivs(1 = 1 + -1)
}

function showDivs(n) {
	
	
	var x = document.getElementsByClassName('switch');////switch class
	
	
	
	for(var i = 0; i < ar.length; i++) {
		if(('url("file:///Users/student_22/Desktop/slider-site/"'+ ar[i]))== back) {
			y.setAttribute("style", "background: url("+ar[i]+");" )
			console.log(slideIndex);
			break;
		}
		
		
	} 
	
}


COULDNT DO IT LOL

*/






