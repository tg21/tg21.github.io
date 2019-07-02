var page = window.location.pathname.split("/").pop();
// var page = path.split("/").pop();
// console.log( "name is ",page );
if(page == "index.html" || page== ""){
	console.log( "name is ",page );
var _CONTENT = [ 
	" { I am a Frontend-Developer }",
    " cout<< \"I am a Backend-Developer\"; ",
    " # Maybe I am a Full-Stack-Developer ",
    " > I got it ",
    " I am a programmer ; "
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
var image_list = [
	"../img/s1.jpg",
	"../img/s2.jpg",
	"../img/s3.jpg",
	"../img/s4.jpg",
	"../img/s5.jpg"
];
var img_num = 0;
document.getElementById("gravatar").onclick = function(){
	document.body.style.backgroundImage = "url("+image_list[img_num]+")";
	if(img_num!=4){
		img_num++;
	}else{
		img_num = 0;
	};

}


}
else if(page == "projects.html"){
	console.log("this is ",page);
	function setHeight(){
		var images = document.getElementsByClassName("pimg");
		var titles = document.getElementsByClassName("project-title");
		var descriptions = document.getElementsByClassName("project-des");
		for(var j=0; j<images.length;j++){
			descriptions[j].style.height = (images[j].clientHeight - titles[j].clientHeight -60)+"px";
		}
	};
	setHeight();
	try {
		window.addEventListener("resize", setHeight, false);
	} catch(e) {
		window.onresize = setHeight;
	}
}