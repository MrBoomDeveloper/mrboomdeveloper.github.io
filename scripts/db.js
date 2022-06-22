nav.links = [
	{title: "Обо мне", link: "#aboutme"},
	{title: "Мои проекты", link: "#projects"},
	{title: "Связаться со мной", link: "#contact"}
]

skills.list = [
	{title: "Java", icon: "java.svg"},
	{title: "Firebase", icon: "firebase.svg"},
	{title: "Android", icon: "android.svg"},
	{title: "Node.js", icon: "node.svg"},
	{title: "JavaScript", icon: "js.svg"},
	{title: "CSS", icon: "css.svg"},
	{title: "HTML", icon: "html.svg"}
]

footer.social = [
	{title: "VKontakte", icon: "vk.png", link: "https://bit.ly/mrboomdevvk"},
	{title: "YouTube", icon: "youtube.png", link: "https://bit.ly/mrboomdevyt"},
	{title: "Discord", icon: "discord.png", link: "https://bit.ly/mrboomdevds"}
]

footer.links = [
	{title: "Брендинг"},
	{title: "Архив Данных"},
	{title: "Мой Плейлист", link: "https://bit.ly/mrboomdevplay"},
]

projects.all = [
	{ //0
		name: "BoomStudio", banner: "boomstudio.jpg",
		description: "Мобильный редактор кода, позволяющий использовать систему контроля версий. В данный момент в стадии замедленной разработки.<br>Во время разработки был упор на мультизадачность. Это значит что в боковом меню одновременно будут показаны все папки и файлы открытого проекта. Сверху кода распологаются кнопки быстрого действия, а под ними открытые в данный момент файлы.",
		tags: ["Java", "Android", "Отложено", "2022"],
		screenshots: ["not_found.jpg", "not_found.jpg", "not_found.jpg"],
		link: "https://nightly.link/MrBoomDeveloper/BoomStudio/workflows/android/master/app-debug.apk.zip"
	}, { //1
		name: "FNaF Multiplayer", banner: "not_found.jpg",
		description: "Мобильный экшен-платформер про выживание и схватку одержимымых аниматроников.",
		tags: ["Java", "Android", "В разработке", "2022"],
		screenshots: ["fnafm_screenshot1.png", "fnafm_screenshot2.png", "fnafm_screenshot3.png"],
		link: "404"
	}, { //2
		name: "Bear's Kitchen", banner: "not_found.jpg",
		description: "Не желаете ли вы устроиться в нашей пиццерии? У нас бесплатная пицца для сотрудников!",
		tags: ["Scratch", "Android", "Завершено", "2020"],
		screenshots: ["not_found.jpg", "not_found.jpg", "not_found.jpg"],
		link: "404"
	},
	{ //3
		name: "Granny 2D", banner: "not_found.jpg",
		tags: ["Pocket Code"],
		link: "https://share.catrob.at/app/project/77618"
	}, { //4
		name: "Five Nights at Freddy's 7", banner: "not_found.jpg",
		tags: ["Pocket Code"],
		link: "https://share.catrob.at/app/project/57826"
	}, { //5
		name: "FNaF Sniffing Simulator", banner: "not_found.jpg",
		tags: ["Java"],
		link: "https://gamejolt.com/games/sniffsimandroid/504854"
	}, { //6
		name: "FNaF Non-AR", banner: "not_found.jpg",
		tags: ["Java, Firebase"],
		link: "https://gamejolt.com/games/fnafnonar/462486"
	}, { //7
		name: "FNaF 4: 8 Bit Remake", banner: "not_found.jpg",
		tags: ["Pocket Code"],
		link: "https://share.catrob.at/app/project/93902"
	}, { //8
		name: "Jollibee's Multiplayer", banner: "not_found.jpg",
		tags: ["Java, Firebase"],
		link: "https://gamejolt.com/p/the-project-got-deleted-it-s-all-gone-so-we-are-rebranding-it-int-3qzdr92w"
	}, { //9
		name: "Мой третий сайт", banner: "simplesite.jpg",
		tags: ["Конструктор"],
		link: "http://mrboom1.simplesite.com/442672397"
	}, { //10
		name: "Сайт для Ultimate Custom Night Meme Edition", banner: "site2.jpg",
		tags: ["HTML, CSS, JS"],
		link: "https://mrboom1.gamejolt.io/ucnmeme"
	}, { //11
		name: " Мой самый первый сайт", banner: "site1.jpg",
		tags: ["HTML, CSS"],
		link: "https://mrboom1.gamejolt.io"
	}
]

projects.cats = {
	home: [{
		title: "Лучшие проекты", content: [ 0, 1, 2 ]
	}],
	archive: [{
		title: "Старые игры", content: [ 3, 4, 5 ]
	}, {
		title: "Отмененные игры", content: [ 6, 7 ]
	}, {
		title: "Потерянные игры", content: [ 8 ]
	}, {
		title: "Старые сайты", content: [ 9, 10, 11 ]
	}]
}