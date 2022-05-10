const projects = {
	"pinned": [{
		"banner": "images/droidstudio.jpg",
		"name": "Droid Studio",
		"tags": ["Java", "Android", "В разработке", "2022"],
		"screenshots": ["images/not_found.jpg", "images/not_found.jpg", "images/not_found.jpg"],
		"description": "Мобильная версия Android Studio, но без функции сборки приложений.",
		"link": "https://nightly.link/MrBoomDeveloper/DroidStudio/workflows/android/master/app-debug.apk.zip"
	}, {
		"banner": "images/not_found.jpg",
		"name": "FNaF Multiplayer",
		"tags": ["Java", "Android", "Отложено", "2022"],
		"screenshots": ["images/not_found.jpg", "images/not_found.jpg", "images/not_found.jpg"],
		"description": "Мобильный экшен-платформер про выживание и схватку одержимымых аниматроников.",
		"link": "404"
	}, {
		"banner": "images/not_found.jpg",
		"name": "Bear's Kitchen",
		"tags": ["Scratch", "Android", "Завершено", "2020"],
		"screenshots": ["images/not_found.jpg", "images/not_found.jpg", "images/not_found.jpg"],
		"description": "Желаете ли вы устроиться в нашей пиццерии? У нас бесплатная пицца для сотрудников!",
		"link": "404"
	}],
	
	
	"archive": [{
		"name": "Старые игры",
		"content": [{
			"banner": "images/not_found.jpg",
			"name": "Granny 2D",
			"tags": ["Pocket Code"],
			"link": "https://share.catrob.at/app/project/77618"
		}, {
			"banner": "images/not_found.jpg",
			"name": "Five Nights at Freddy's 7",
			"tags": ["Pocket Code"],
			"link": "https://share.catrob.at/app/project/57826"
		}, {
			"banner": "images/not_found.jpg",
			"name": "FNaF Sniffing Simulator",
			"tags": ["Java"],
			"link": "https://gamejolt.com/games/sniffsimandroid/504854"
		}]
	}, {
		"name": "Отмененные игры",
		"content": [{
			"banner": "images/not_found.jpg",
			"name": "FNaF Non-AR",
			"tags": ["Java, Firebase"],
			"link": "https://gamejolt.com/games/fnafnonar/462486"
		}, {
			"banner": "images/not_found.jpg",
			"name": "FNaF 4: 8 Bit Remake",
			"tags": ["Pocket Code"],
			"link": "https://share.catrob.at/app/project/93902"
		}]
	}, {
		"name": "Потерянные игры",
		"content": [{
			"banner": "images/not_found.jpg",
			"name": "Jollibee's Multiplayer",
			"tags": ["Java, Firebase"],
			"link": "https://gamejolt.com/p/the-project-got-deleted-it-s-all-gone-so-we-are-rebranding-it-int-3qzdr92w"
		}]
	}, {
		"name": "Старые сайты",
		"content": [{
			"banner": "images/simplesite.jpg",
			"name": "Мой третий сайт",
			"tags": ["Конструктор"],
			"link": "http://mrboom1.simplesite.com/442672397"
		}, {
			"banner": "images/site2.jpg",
			"name": "Сайт для Ultimate Custom Night Meme Edition",
			"tags": ["HTML, CSS, JS"],
			"link": "https://mrboom1.gamejolt.io/ucnmeme"
		}, {
			"banner": "images/site1.jpg",
			"name": " Мой самый первый сайт",
			"tags": ["HTML, CSS"],
			"link": "https://mrboom1.gamejolt.io"
		}]
	}]
};



function load(page) {
	var html = "";
	
	switch(page) {
		case "home":
			//Load index.html
			
			let projects_div = document.getElementById("fillProjects");
			var json = projects.pinned;
			
			for(var i = 0; i < json.length; i++) {
				html += '<a class="reveal" href="./project?id=' + i + '"><div class="card big"><img title="';
				html += json[i].name + '" src="' + json[i].banner + '"/><div class="info"><h3>' + json[i].name + '</h3><p class="markup">';
				var tags_html = "";
				for (var i1 = 0; i1 < json[i].tags.length - 1; i1++) {
					tags_html += json[i].tags[i1];
					if(i1 < json[i].tags.length - 2)
						tags_html += ', ';
				}
				html += tags_html + '</p><p>' + json[i].description + '</p></div></div></a>';
			}
			
			projects_div.innerHTML = html;
			
			break;
		case "overview":
			//Load project.html
			
			var banner_view = document.getElementById("banner");
			let name_view = document.getElementById("name");
			let tags_view = document.getElementById("tags");
			let description_view = document.getElementById("description");
			let screenshots_view = document.getElementById("screenshotsa");
			var id = window.location.href.split("?id=").pop();
			var json = projects.pinned;
			var tags_html = "";
			var screenshots_html = "";

			if(isNaN(id) || id > json.length - 1 || id < 0)
				window.location.href = "404";
	
			for (var i = 0; i < json[id].tags.length; i++) {
				tags_html += '<h6>' + json[id].tags[i] + '</h6>';
			}
			for (var i1 = 0; i1 < json[id].screenshots.length; i1++) {
				screenshots_html += '<a href="' + json[id].screenshots[i1] + '"><div class="card image"><img src="' + json[id].screenshots[i1] + '"/></div></a>';
			}

			banner_view.src = json[id].banner;
			name_view.innerHTML = json[id].name;
			download.innerHTML = '<a href="' + json[id].link + '"><button>Скачать</button></a>';
			description_view.innerHTML = json[id].description;
			tags_view.innerHTML = tags_html;
			screenshots_view.innerHTML = screenshots_html;
			break;
		case "archive":
			//Load archive.html
			
			let archive_div = document.getElementById("fillProjects");
			var json = projects.archive;
			
			for(var i = 0; i < json.length; i++) {
				html += '<div class="block noimage reveal"><div><h2>' + json[i].name + '</h2><div class="grid">'
				for(var i1 = 0; i1 < json[i].content.length; i1++) {
					html += '<a target="_blank" class="reveal" href="' + json[i].content[i1].link + '"><div class="card big"><img title="';
					html += json[i].content[i1].name + '" src="' + json[i].content[i1].banner + '"/><div class="info"><h3>' + json[i].content[i1].name + '</h3><p class="markup">';
					var tags_html = "";
					for (var i2 = 0; i2 < json[i].content[i1].tags.length; i2++) {
						tags_html += json[i].content[i1].tags[i2];
						if(i1 < json[i].content[i1].tags.length - 1)
							tags_html += ', ';
					}
					html += tags_html + '</p><p>' + json[i].content[i1].link + '</p></div></div></a>';
				}
				html += '</div></div></div>';
			}
			
			archive_div.innerHTML = html;
			break;
	}
}