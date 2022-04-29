const names = ["Droid Studio", "FNaF Multiplayer", "Bear's Kitchen"];
const banners = ["images/not_found.jpg", "images/not_found.jpg", "images/not_found.jpg"];
const downloads = ["404", "404", "404"];
const screenshots = [
	["images/not_found.jpg", "images/not_found.jpg", "images/not_found.jpg"],
	["images/not_found.jpg", "images/not_found.jpg", "images/not_found.jpg"],
	["images/not_found.jpg", "images/not_found.jpg", "images/not_found.jpg"]
];
const tags = [
	["Java", "Android", "В разработке", "2022"],
	["Java", "Android", "Отложено", "2022"],
	["Scratch", "Android", "Завершено", "2020"]
];
const descriptions = [
	"Мобильная версия Android Studio, но без функции сборки приложений.", 
	"Мобильный экшен-платформер про выживание и схватку одержимымых аниматроников.", 
	"Желаете ли вы устроиться в нашей пиццерии? У нас бесплатная пицца для сотрудников!"
];

function load(page) {
	switch(page) {
		case "home":
			//Load index.html
			
			let projects = document.getElementById("fillProjects");
			
			var html = "";
			for(var i = 0; i < names.length; i++) {
				html += '<a href="./project?id=' + i + '"><figure class="project reveal"><img title="';
				html += names[i] + '" src="' + banners[i] + '"/><figcaption><h3>' + names[i] + '</h3><p class="markup">';
				var tags_html = "";
				for (var i1 = 0; i1 < tags[i].length - 1; i1++) {
					tags_html += tags[i][i1];
					if(i1 < tags[i].length - 2)
						tags_html += ', ';
				}
				html += tags_html + '</p><p>' + descriptions[i] + '</p></figcaption></figure></a>';
			}
			
			projects.innerHTML = html;
			
			break;
		case "overview":
			//Load project.html
			
			var banner_view = document.getElementById("banner");
			let name_view = document.getElementById("name");
			let tags_view = document.getElementById("tags");
			let description_view = document.getElementById("description");
			let screenshots_view = document.getElementById("screenshotsa");
			var id = window.location.href.split("?id=").pop()
			var tags_html = "";
			var screenshots_html = "";

			if(isNaN(id) || id > names.length - 1 || id < 0)
				window.location.href = "404";
	
			for (var i = 0; i < tags[id].length; i++) {
				tags_html += '<h6 class="tag">' + tags[id][i] + '</h6>';
			}
			for (let i1 = 0; i1 < screenshots[id].length; i1++) {
				screenshots_html += '<a href="' + screenshots[id][i1] + '"><img src="' + screenshots[id][i1] + '"/></a>';
			}

			banner_view.src = banners[id];
			name_view.innerHTML = names[id];
			download.innerHTML = '<a href="' + downloads[id] + '"><button>Скачать</button></a>';
			description_view.innerHTML = descriptions[id];
			tags_view.innerHTML = tags_html;
			screenshots_view.innerHTML = screenshots_html;
			break;
	}
}