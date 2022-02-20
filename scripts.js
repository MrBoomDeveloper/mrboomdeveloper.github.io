var header = document.getElementsByTagName("header")[0];
var burger = document.getElementById("burger");
var nav = document.getElementsByTagName("nav")[0];
var more = document.getElementById("load-more");
var projects = document.getElementById("hidden-projects");
var activeMenu = false;

window.addEventListener('scroll', function() {
	if(window.scrollY > 50) {
		header.classList.add("header-scrolled");
	} else {
		if(!activeMenu) {
			header.classList.remove("header-scrolled");
		}
	}
});

function toggleMenu() {
	if(activeMenu) {
		if(window.scrollY < 50) {
			header.classList.remove("header-scrolled");
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

function loadMore() {
	more.classList.toggle("more-shown");
	projects.classList.toggle("projects-shown");
}