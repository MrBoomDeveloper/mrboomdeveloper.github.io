var burger = document.getElementById("burger");
var nav = document.getElementsByTagName("nav")[0];

function toggleMenu() {
	burger.classList.toggle("change");
	nav.classList.toggle("nav-active");
}

function menuSelected() {
	if(nav.classList.contains("nav-active")) {
		toggleMenu();
	}
}

//if(window.location.hash) {
	//if(window.location.hash.substring(1) == "test") {
		//document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"experimental.css\" />");
	//}
//}