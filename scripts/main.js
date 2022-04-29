const header_list = [
'<li><a href="./#about" onclick="menuClose();">Обо мне</a></li>',
'<li><a href="./#projects" onclick="menuClose();">Мои проекты</a></li>',
'<li><a href="mrboomdeveloper+hlm7cjfwxpmqxajeqhsg@boards.trello.com" onclick="menuClose();">Написать мне</a></li>'
];
const footer_list = [[
'<h4>Ваши данные</h4>',
'<li><a href="./terms#agreement">Пользовательское соглашение</a></li>',
'<li><a href="./terms#privacy">Политика конфиденциальности</a></li>',
'<li><a href="mailto:mrboomdeveloper+hlm7cjfwxpmqxajeqhsg@boards.trello.com">Связаться со мной</a></li>'],
[
'<h4>Интересные ссылки</h4>',
'<li><a href="./resources">Ресурсы и брендинг</a></li>',
'<li><a href="./archive">Архив данных</a></li>',
'<li><a target="_blank" href="https://music.youtube.com/playlist?list=PLSWY81108wBhKajj1EUuBr89ydg-DUjPy">Мой плейлист</a></li>']
];

let header;
let burger;
let nav;

function loaded() {
	header = document.getElementsByTagName("header")[0];
	burger = document.getElementById("burger");
	nav = document.getElementsByTagName("nav")[0];
	reveal();
	addLinks();
}

function addLinks() {
	let header_links = document.getElementById("header-links");
	let footer_links = document.getElementById("footer-links");
	var header_html = "";
	var footer_html = "";
	for(var i = 0; i< header_list.length; i++) {
		header_html += header_list[i];
	}
	for(var i = 0; i < footer_list.length; i++) {
		footer_html += '<ul class="second">';
		for(var i1 = 0; i1 < footer_list[i].length; i1++) {
			footer_html += footer_list[i][i1];
		}
		footer_html += '</ul>';
	}
	header_links.innerHTML = header_html;
	footer_links.innerHTML = footer_html;
}

function reveal() {
	var reveals = document.querySelectorAll('.reveal');
	for(var i = 0; i < reveals.length; i++){
		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		if(revealtop < windowheight){
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active');
		}
	}
}

window.addEventListener('scroll', function() { reveal(); });

function toggleMenu() {
	burger.classList.toggle("change");
	nav.classList.toggle("nav-active");
}

function menuSelected() {
	if(nav.classList.contains("nav-active")) {
		toggleMenu();
	}
}

function menuClose() { menuSelected(); return true; }