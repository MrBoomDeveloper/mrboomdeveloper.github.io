var html = "", scroll = 0;

const main = {
	load: function(page) {
		skills.load();
		nav.load();
		footer.load();
		if(page != undefined) projects.tab(page);
		reveal();
	}
}

const nav = {
	load: function() {
		for(var i = 0; i < this.links.length; i++) {
			html += `<li><a onclick="nav.open()" href="${this.links[i].link}">${this.links[i].title}</a></li>`;
		}
		element("nav ul").innerHTML = html; html = "";
	},
	open: function() {
		element("#burger").classList.toggle("active");
		element("nav").classList.toggle("active");
	}
}

const skills = {
	load: function() {
		for(var i = 0; i < this.list.length; i++) {
			object = this.list[i];
			html += `<div class="card skill reveal"><img src="./images/icons/${object.icon}" title="${object.title}" alt="${object.title}"/><h6>${object.title}</h6></div>`;
		}
		element("#skills").innerHTML = html; html = "";
	}
}

const projects = {
	tab: function(page) {
		for(var i = 0; i < this.cats[page].length; i++) {
			html += `<h2>${this.cats[page][i].title}</h2><div class="grid">`;
			for(var a = 0; a < this.cats[page][i].content.length; a++) {
				html += `<div onclick="projects.open('${this.cats[page][i].content[a]}')" class="card product clickable reveal"><img class="banner" src="./images/banners/`;
				object = this.all[this.cats[page][i].content[a]];
				html += `${object.banner}" title="${object.name}" alt="${object.name}"/><div class="about"><h3>${object.name}</h3><span>`;
				for(var b = 0; b < 3; b++) {
					if(b < (object.tags.length - 2)) {
						html += `${object.tags[b]}, `;
					} else {
						html += object.tags[b];
					}
				}
				html += `</span><p>${object.description}</p></div></div>`;
			}
			html += '</div>';
		}
		element("#projects .content").innerHTML = html; html = "";
	},
	open: function(id) {
		this.current = id;
		scroll = window.pageYOffset;
		media = this.all[id];
		element("#banner").src = `./images/banners/${media.banner}`;
		element("#title").innerHTML = media.name
		tags = media.tags;
		for(var i = 0; i < tags.length; i++) {
			if(i < (tags.length - 1)) {
				html += `${tags[i]}, `;
			} else {
				html += tags[i];
			}
		}
		element("#tags").innerHTML = html; html = "";
		element("#description").innerHTML = media.description;
		for(var i = 0; i < media.screenshots.length; i++) {
			html += `<a target="_blank" href="./images/banners/${media.screenshots[i]}"><img class="card clickable" src="./images/banners/${media.screenshots[i]}"/>`;
		}
		element("#screenshots").innerHTML = html; html = "";
		element("#popup").classList.remove("reveal");
		element(".app").style.maxHeight = "0";
		element("#popup main").scrollTo(0, 0);
	},
	close: function() {
		document.documentElement.style.scrollBehavior = 'auto';
		setTimeout(() => window.scrollTo(0, scroll), 1);
		setTimeout(() => document.documentElement.style.scrollBehavior = 'smooth', 1);
		element(".app").style.maxHeight = "fit-content";
		element("#popup").classList.add("reveal");
	},
	download: function() {
		go(this.all[this.current].link);
	},
	trailer: function() {
		go(this.all[this.current].trailer);
	}
}

const footer = {
	load: function() {
		for(var i = 0;  i < this.social.length; i++) {
			object = this.social[i]
			html += `<li><a href=" ${object.link}" target="_blank"><img src="./images/icons/${object.icon}" title="${object.title}" alt="${object.title}"/></a>`;
		}
		element("#social").innerHTML = html; html = "";
		for(var i = 0;  i < this.links.length; i++) {
			object = this.links[i]
			html += `<li><a href=" ${object.link}" target="_blank">${object.title}</a>`;
		}
		element("#links").innerHTML = html; html = "";
	}
}

window.addEventListener("scroll", function() { reveal() });