var html = "", scroll = 0;

const main = {
	load: function() {
		skills.load();
		nav.load();
		footer.load();
		projects.tab("home");
		projects.tab("archive");
		reveal();
		switch(param("page")) {
			case "project":
				projects.open(param("id"));
				break;
			case "branding":
				this.popup(1);
				break;
			case "archive":
				this.popup(2);
				break;
			case "privacy":
				this.popup(3);
				break;
			default:
				if(param("page") != undefined) console.error("404 page not found")
				break;
		}
	},
	popup: function(page) {
		scroll = window.pageYOffset;
		pages = elements("#popup main section");
		for(var i = 0; i < pages.length; i++) {
			pages[i].style.display = "none";
		}
		pages[page].style.display = "block";
		element("#popup").classList.remove("reveal");
		element(".app").style.maxHeight = "0";
		element("#popup main").scrollTo(0, 0);
	},
	popdown: function() {
		document.documentElement.style.scrollBehavior = 'auto';
		setTimeout(() => window.scrollTo(0, scroll), 1);
		setTimeout(() => document.documentElement.style.scrollBehavior = 'smooth', 1);
		element(".app").style.maxHeight = "fit-content";
		element("#popup").classList.add("reveal");
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
			html += `<card-icon icon="./images/icons/${object.icon}" title="${object.title}"></card-icon>`;
		}
		element("#skills").innerHTML = html; html = "";
	}
}

const projects = {
	tab: function(page) {
		for(var i = 0; i < this.cats[page].length; i++) {
			html += `<h2>${this.cats[page][i].title}</h2><div class="grid">`;
			for(var a = 0; a < this.cats[page][i].content.length; a++) {
				object = this.all[this.cats[page][i].content[a]];
				if(object.description != undefined) {
					html += `<card-product onclick="projects.open('${this.cats[page][i].content[a]}')"`;
				} else {
					html += `<card-product onclick="go('${object.link}')"`;
				}
				html += ` clickable title="${object.name}" tags="${object.tags.join(', ')}" description="${object.description || object.link}" banner="./images/banners/${object.banner}"></card-product>`;
			}
			html += '</div>';
		}
		fill = page == "home" ? "#projects .content" : "#archive .content";
		element(fill).innerHTML = html; html = "";
	},
	open: function(id) {
		this.current = id;
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
			html += `<a target="_blank" href="./images/banners/${media.screenshots[i]}"><card-simple clickable><img src="./images/banners/${media.screenshots[i]}"/></card-simple></a>`;
		}
		element("#screenshots").innerHTML = html; html = "";
		main.popup(0);
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
			html += `<li><a href="${object.link}" target="_blank"><img src="./images/icons/${object.icon}" title="${object.title}" alt="${object.title}"/></a>`;
		}
		element("#social").innerHTML = html; html = "";
		for(var i = 0;  i < this.links.length; i++) {
			object = this.links[i]
			if(object.link != undefined) {
				html += `<li><a href="${object.link}" target="_blank">${object.title}</a>`;
			} else {
				html += `<li><a href="#" onclick="main.popup(${(i + 1)})">${object.title}</a>`;
			}
		}
		element("#links").innerHTML = html; html = "";
	}
}

window.addEventListener("scroll", function() { reveal() });