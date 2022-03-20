var header = document.getElementsByTagName("header")[0];
var burger = document.getElementById("burger");
var nav = document.getElementsByTagName("nav")[0];
var more = document.getElementById("load-more");
var projects = document.getElementById("hidden-projects");
var activeMenu = false;
var lockHeader = false;

function reveal() {
	var reveals = document.querySelectorAll('.reveal');
	for(var i = 0; i < reveals.length; i++){
		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		//if(revealtop < windowheight - 75){
		if(revealtop < windowheight){
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active');
		}
	}
}

window.addEventListener('scroll', function() {
	reveal();
	if(!lockHeader) {
		if(window.scrollY > 50) {
			header.classList.add("header-scrolled");
		} else {
			if(!activeMenu) {
				header.classList.remove("header-scrolled");
			}
		}
	}
});

function toggleMenu() {
	if(activeMenu) {
		if(window.scrollY < 50) {
			if(!lockHeader) {
				header.classList.remove("header-scrolled");
			}
		}
		activeMenu = false;
	} else {
		header.classList.add("header-scrolled");
		activeMenu = true;
	}
	burger.classList.toggle("change");
	nav.classList.toggle("nav-active");
}

function menuSelected() {
	if(nav.classList.contains("nav-active")) {
		toggleMenu();
	}
}

function menuClose() {
	menuSelected();
	return true;
}

fixBrokenImages = function( url ){
	var img = document.getElementsByTagName('img');
	var i=0, l=img.length;
	for(;i<l;i++){
		var t = img[i];
		if(t.naturalWidth === 0){
			t.src = url;
		}
	}
}

function loaded() {
	reveal();
	fixBrokenImages('./images/not_found.jpg');
}