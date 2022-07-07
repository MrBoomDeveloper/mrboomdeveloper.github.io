var html = "", scroll = 0, popup = false

setTimeout(() => reveal(), 10)

const main = {
	load: function() {
		history.pushState({page: 1}, "Home")
		skills.load()
		nav.load()
		footer.load()
		projects.tab("home")
		projects.tab("archive")
		design.load()
		rss.load()
		
		if(param("page") == undefined) return
		switch(param("page")) {
			case "project":
				projects.open(param("id"))
				break
			case "branding":
				this.popup(1)
				break
			case "archive":
				this.popup(2)
				break
			case "privacy":
				this.popup(3)
				break
			case "design":
				this.popup(4)
				break
			case "terms":
				this.popup(5)
				break
			default:
				console.error("404 page not found")
				break
		}
	},
	
	popup: function(id, result) {
		popup = true;
		switch(id) {
			case 0:
				result = "project"; break
			case 1:
				result = "branding"; break
			case 2:
				result = "archive"; break
			case 3:
				result = "privacy"; break
			case 4:
				result = "design"; break
			case 5:
				result = "terms"; break
		}
		if(id == 0) result += `&id=${projects.current}`
		history.replaceState({page: 1}, "Popup", `?page=${result}`)
		scroll = window.pageYOffset
		pages = elements("#popup main section")
		for(var i = 0; i < pages.length; i++) {
			pages[i].style.display = "none"
		}
		pages[id].style.display = "block"
		element("#popup").classList.remove("reveal")
		element("#app").style.maxHeight = "0"
		element("#popup main").scrollTo(0, 0)
	},
	
	popdown: function() {
		popup = false
		history.pushState({page: 1}, "Home", "index.html")
		document.documentElement.style.scrollBehavior = 'auto'
		setTimeout(() => window.scrollTo(0, scroll), 1)
		setTimeout(() => document.documentElement.style.scrollBehavior = 'smooth', 1)
		element("#app").style.maxHeight = "fit-content"
		element("#popup").classList.add("reveal")
	}
}

const rss = {
	load: function() {
		fetch(this.url)
			.then(response => response.text())
			.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
			.then(data => {
				data = new XMLSerializer().serializeToString(data.documentElement)
				this.convert(data)
			})
			.catch(err => {
				element("#vids").style.display = "none"
				console.error(err)
			})
	},
	convert: function(xml, html = "") {
		while(xml.includes("<div>")) {
			xml = xml.substring(xml.indexOf("<div>") + 10, xml.length)
			html += xml.substring(0, xml.indexOf("</div>") + 6).insert(xml.indexOf("<div") + 4, " class='reveal'")
		}
		element("#videos").innerHTML = html
	}
}

const nav = {
	load: function() {
		for(var i = 0; i < this.links.length; i++) {
			html += `<li><a onclick="nav.open()" href="${this.links[i].link}">${this.links[i].title}</a></li>`
		}
		element("nav ul").innerHTML = html; html = ""
	},
	open: function() {
		element("#burger").classList.toggle("active")
		element("nav").classList.toggle("active")
	}
}

const skills = {
	load: function() {
		for(var i = 0; i < this.list.length; i++) {
			object = this.list[i]
			html += `<card-icon class="reveal" icon="./images/icons/${object.icon}" title="${object.title}"></card-icon>`
		}
		element("#skills").innerHTML = html; html = ""
	}
}

const design = {
	load: function(html = "", count = 0) {
		for(const object of this.list) {
			count++
			html += `<div class="block design"><div class="content"><div class="text">
								<h2 class="cat"`
			if(count == 1) html+= " id='first'"
			html += `>${object.title}</h2>
								<iframe height="300" style="width: 100%" scrolling="no" src="https://codepen.io/mrboomdeveloper/embed/preview/${object.code}?default-tab=html&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
							</div>
							<div class="grid">${object.content}</div>
							</div></div></div>`
		}
		element("#design").innerHTML = html
	}
}

const projects = {
	tab: function(page) {
		for(var i = 0; i < this.cats[page].length; i++) {
			html += `<h2 class="cat">${this.cats[page][i].title}</h2><div class="grid">`
			for(var a = 0; a < this.cats[page][i].content.length; a++) {
				object = this.all[this.cats[page][i].content[a]]
				if(object.description != undefined) {
					html += `<card-product class="reveal" onclick="projects.open('${this.cats[page][i].content[a]}')"`
				} else {
					html += `<card-product onclick="go('${object.link}')"`
				}
				html += ` clickable title="${object.name}" tags="${object.tags.join(', ')}" description="${object.description || object.link}" banner="./images/banners/${object.id}.jpg"></card-product>`
			}
			html += '</div>'
		}
		fill = page == "home" ? "#projects .content" : "#archive .content"
		element(fill).innerHTML = html; html = ""
	},
	open: function(id) {
		this.current = id
		media = this.all[id]
		element("#banner").src = `./images/banners/${media.id}.jpg`
		element("#title").innerHTML = media.name
		tags = media.tags
		for(var i = 0; i < tags.length; i++) {
			if(i < (tags.length - 1)) {
				html += `${tags[i]}, `
			} else {
				html += tags[i]
			}
		}
		element("#tags").innerHTML = html; html = ""
		element("#description").innerHTML = media.description
		for(var i = 1; i < 6; i++) {
			html += `<a target="_blank" href="./images/screenshots/${media.id}${i}.jpg"><card-simple clickable icon="./images/screenshots/${media.id}${i}.jpg"></card-simple></a>`
		}
		//console.debug(html, "pol")
		element("#screenshots").innerHTML = html; html = ""
		main.popup(0)
	},
	download: function() {
		go(this.all[this.current].link)
	},
	trailer: function() {
		go(this.all[this.current].trailer)
	}
}

const footer = {
	load: function() {
		for(var i = 0;  i < this.social.length; i++) {
			object = this.social[i]
			html += `<li><a href="${object.link}" target="_blank"><img src="./images/icons/${object.icon}" title="${object.title}" alt="${object.title}"/></a>`
		}
		element("#social").innerHTML = html; html = ""
		for(var i = 0;  i < this.links.length; i++) {
			object = this.links[i]
			if(object.link != undefined) {
				html += `<li><a href="${object.link}" target="_blank">${object.title}</a>`
			} else {
				html += `<li><a href="javascript:void(0)" onclick="main.popup(${object.popup})">${object.title}</a>`
			}
		}
		element("#links").innerHTML = html; html = ""
	}
}

window.addEventListener("scroll", function() { reveal() })

window.addEventListener('popstate', function(event) {
	if(location.hash != undefined) {
		history.replaceState(null, null, ' ')
		return
	}
	popup ? main.popdown() : history.back()
})