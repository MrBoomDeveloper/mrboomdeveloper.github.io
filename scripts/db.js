rss.url = "https://rss.app/feeds/a0ueXZbCntRQzzvP.xml"

nav.links = [
	{title: "Обо мне", link: "#aboutme"},
	{title: "Мои проекты", link: "#projects"},
	{title: "Связаться со мной", link: "#contact"}
]

skills.list = [
	{title: "Java", icon: "java.svg"},
	{title: "Android", icon: "android.svg"},
	{title: "Firebase", icon: "firebase.svg"},
	{title: "Sass", icon: "sass.svg"},
	{title: "Node.js", icon: "node.svg"},
	{title: "JavaScript", icon: "js.svg"},
	{title: "CSS", icon: "css.svg"},
	{title: "HTML", icon: "html.svg"}
]

design.list = [
	{title: "Подключаем BoomDesign", code: "Baradwr", content: '<lottie-player src="https://assets3.lottiefiles.com/animated_stickers/lf_tgs_7maftaja.json" loop autoplay intermission="0"></lottie-player>'},
	{title: "Карточка с продуктом", code: "RwMwgWX", content: '<card-product clickable title="Заголовок" tags="Теги" description="Описание" banner="https://mrboomdeveloper.github.io/images/banners/not_found.jpg"></card-product>'},
	{title: "Карточка с цветом", code: "yLKLzxV", content: '<card-color code="#D05EFC"></card-color>'},
	{title: "Карточка рейтинг", code: "VwXwrQZ", content: '<card-rating score="9.9" title="Супер пупер рейтинг"></card-rating>'},
	{title: "Карточка кнопка", code: "LYdYjJx", content: '<card-button clickable title="Загаловок" description="Описание"></card-button>'},
	{title: "Карточка кардион", code: "wvmvPYd", content: '<card-faq id="required_id" title="Отель?" description="Триваго!"></card-faq>'},
	{title: "Карточка иконка", code: "yLKLzEa", content: '<card-icon clickable icon="https://mrboomdeveloper.github.io/images/icons/android.svg" title="Загаловок"></card-icon>'},
	{title: "Простая карточка", code: "poLoWay", content: '<card-simple clickable title="Секретный текст" icon="https://mrboomdeveloper.github.io/images/banners/not_found.jpg"></card-simple>'}
]

footer.social = [
	{title: "VKontakte", icon: "vk.png", link: "https://bit.ly/mrboomdevvk"},
	{title: "YouTube", icon: "youtube.png", link: "https://bit.ly/mrboomdevyt"},
	{title: "Discord", icon: "discord.png", link: "https://bit.ly/mrboomdevds"}
]

footer.links = [
	{title: "Брендинг", popup: 1},
	{title: "BoomDesign", popup: 4},
	{title: "Архив Данных", popup: 2},
	{title: "Мой Плейлист", link: "https://bit.ly/mrboomdevplay"},
	{title: "Политика Конфиденциальности", popup: 3},
	{title: "Пользовательское Соглашение", popup: 5}
]

projects.all = [
	{ //0
		name: "BoomStudio", id: "studio",
		description: "Мобильный редактор кода, позволяющий использовать систему контроля версий. В данный момент в стадии замедленной разработки.<br>Во время разработки был упор на мультизадачность. Это значит что в боковом меню одновременно будут показаны все папки и файлы открытого проекта. Сверху кода распологаются кнопки быстрого действия, а под ними открытые в данный момент файлы.",
		tags: ["Java, Android"],
		link: "https://nightly.link/MrBoomDeveloper/BoomStudio/workflows/android/master/app-debug.apk.zip"
	}, { //1
		name: "FNaF Multiplayer", id: "fnafm",
		description: "A mobile action-platformer about survival and the fight of possessed animatronics<br>Key features:<br>• Many different skins, boosts and skills<br>• Exciting gameplay with players from all over the world<br>• Build and customize your animatronic.",
		tags: ["Java, Firebase, Android"],
		link: "404"
	}, { //2
		name: "Bear's Kitchen", id: "kitchen",
		description: "Не желаете ли вы устроиться в нашей пиццерии? У нас бесплатная пицца для сотрудников!",
		tags: ["Pocket Code, Android"],

		link: "404"
	},
	{ //3
		name: "Granny 2D", banner: "not_found.jpg",
		tags: ["Pocket Code, Android"],
		link: "https://share.catrob.at/app/project/77618"
	}, { //4
		name: "Five Nights at Freddy's 7", banner: "not_found.jpg",
		tags: ["Pocket Code, Android"],
		link: "https://share.catrob.at/app/project/57826"
	}, { //5
		name: "FNaF Sniffing Simulator", banner: "not_found.jpg",
		tags: ["Java, Android"],
		link: "https://gamejolt.com/games/sniffsimandroid/504854"
	}, { //6
		name: "FNaF Non-AR", banner: "not_found.jpg",
		tags: ["Java, Firebase, Android"],
		link: "https://gamejolt.com/games/fnafnonar/462486"
	}, { //7
		name: "FNaF 4: 8 Bit Remake", banner: "not_found.jpg",
		tags: ["Pocket Code, Android"],
		link: "https://share.catrob.at/app/project/93902"
	}, { //8
		name: "Jollibee's Multiplayer", banner: "not_found.jpg",
		tags: ["Java, Firebase, Android"],
		link: "https://gamejolt.com/p/the-project-got-deleted-it-s-all-gone-so-we-are-rebranding-it-int-3qzdr92w"
	}, { //9
		name: "Мой третий сайт", banner: "simplesite.jpg",
		tags: ["SimpleSite"],
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