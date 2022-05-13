const header_list = [
	'<li><a href="./#about" onclick="menuClose();">Обо мне</a></li>',
	'<li><a href="./#projects" onclick="menuClose();">Мои проекты</a></li>',
	'<li><a href="mrboomdeveloper+hlm7cjfwxpmqxajeqhsg@boards.trello.com" onclick="menuClose();">Написать мне</a></li>'
];
const footer_list = [[
	'<h4>Интересные ссылки</h4>',
	'<li><a href="./resources">Ресурсы и брендинг</a></li>',
	'<li><a href="./archive">Архив данных</a></li>',
	'<li><a href="https://bit.ly/mrboomdevplay" target="_blank">Мой плейлист</a></li>'
], [
	'<h4>Ваши данные</h4>',
	'<li><a href="./terms#agreement">Пользовательское соглашение</a></li>',
	'<li><a href="./terms#privacy">Политика конфиденциальности</a></li>',
	'<li><a href="mailto:mrboomdeveloper+hlm7cjfwxpmqxajeqhsg@boards.trello.com">Связаться со мной</a></li>'
]];
const social_media = [
	'<li><a href="https://bit.ly/mrboomdevvk" target="_blank"><img src="images/icons/vk.png"/></a></li>',
	'<li><a href="https://bit.ly/mrboomdevyt" target="_blank"><img src="images/icons/youtube.png"/></a></li>',
	'<li><a href="https://bit.ly/mrboomdevds" target="_blank"><img src="images/icons/discord.png"/></a></li>'
];

let header;
let burger;
let nav;

function loaded(page) {
	header = document.getElementsByTagName("header")[0];
	burger = document.getElementById("burger");
	nav = document.getElementsByTagName("nav")[0];
	reveal();
	addLinks();
	load(page);
}

function addLinks() {
	let header_links = document.getElementById("header-links");
	let footer_links = document.getElementById("footer-links");
	var header_html = "";
	var footer_html = "";
	
	for(var i = 0; i< header_list.length; i++) {
		header_html += header_list[i];
	}
	
	footer_html += '<ul id="follow"><h4>Подписывайтесь на меня</h4>';
	for(var i = 0; i < social_media.length; i++) {
		footer_html += social_media[i];
	}
	footer_html += '</ul>';
	for(var i = 0; i < footer_list.length; i++) {
		footer_html += '<ul>';
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
		if(revealtop < windowheight)
			reveals[i].classList.add('active');
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