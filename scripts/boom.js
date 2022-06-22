/*––––––––––––––––––––

	Made by MrBoomDev in 2022
	
	Discord: https://bit.ly/mrboomdevds
	YouTube: https://bit.ly/mrboomdevyt
	VKontake: https://bit.ly/mrboomdevvk
	
––––––––––––––––––––*/

let online = true;
let loaded = false;

function element(name) {
	return document.querySelector(name);
}

function elements(name) {
	return document.querySelectorAll(name);
}

function go(url) {
	window.open(url, "_blank");
}

function reveal() {
	setTimeout(() => {
		var reveals = document.querySelectorAll(".reveal");
		for(var i = 0; i < reveals.length; i++){
			var windowheight = window.innerHeight;
			var revealtop = reveals[i].getBoundingClientRect().top;
			if(revealtop < windowheight)
				reveals[i].classList.add("revealed");
		}
	}, 100);
}

function loadDesign() {
    var link  = document.createElement('link');
	link.rel  = 'stylesheet';
	link.href = 'https://mrboomdeveloper.github.io/styles/boom.css';
	element("head").appendChild(link);
	console.log("BoomDesign was applied succesfully");
}

const cookie = {
	set: (key, value) => {
		localStorage.setItem(key, value);
},
	get: key => {
		return localStorage.getItem(key);
	}
};

function alert(title, description, time) {
	if(!loaded) return;
	if(description == undefined) {
		time = 3000;
		description = "No description provided";
	}
	var message = document.createElement("div");
	message.innerHTML = `<div class="card small"><div class="about"><h4>${title}</h4><p>${description}</p></div></div>`;
	element("#messages").appendChild(message);
	
	new Promise(next => {
		setTimeout(() => { message.className = "active"; next() }, 200);
	}).then(() => {
		setTimeout(() => {
			message.style.transform = "translateY(200%)";
			message.style.opacity = 0;
			setTimeout(() => message.remove(), 250);
		}, time);
	});
}

Number.prototype.zeros = function() {
	if(this > 9) { return this
	} else { return "0" + this }
}

Number.prototype.offset = function(n) {
	var result = this + n;
	if(result > 23) { return (result - 24)
	} else { return result }
}

Date.prototype.getWeek = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
	var dayOfYear = ((today - onejan + 86400000)/86400000);
	return Math.ceil(dayOfYear/7)
}

Number.prototype.isEven = function() {
	return this % 2 == 0;
}

function param(param, url = window.location) {
	let params = new URL(url).searchParams;
	let val = params.getAll(param);
	if (val.length > 1) return val;
	return val[0];
}

const console = {
	log: text => { if(cookie.get("logs") == "true") alert("Console Log", text, 2000) },
	error: text => { alert("An error has occurred", text, 5000) },
	warn: text => { alert("Sorry", text, 3000) },
	debug: text => { if(cookie.get("logs")) alert("Console Debug", "<textarea>" + text + "</textarea>", 30000) }
};

window.addEventListener("offline", () => {
	online = false;
	console.error("Internet connection was lost");
})

window.addEventListener("online", () => {
	online = true;
	alert("Back online", "Internet connection has been restored", 2000);
})

window.addEventListener("error", () => {
	console.error("Please check the console");
})

window.addEventListener("load", () => {
	var messages = document.createElement("div");
	messages.id = "messages";
	document.body.appendChild(messages);
	loaded = true;
})


/*Custom elements*/

class CardProduct extends HTMLElement {
	constructor() { super() }

	connectedCallback () {
		this.innerHTML = `
			<div>
				<img class="banner" src="${this.getAttribute('banner')}" title="${this.getAttribute('title')}" alt="${this.getAttribute('title')}"/>
				<div class="about">
					<h3>${this.getAttribute('title')}</h3>
					<span>${this.getAttribute('tags')}</span>
					<p>${this.getAttribute("description")}</p>
				</div>
			</div>
		`;
	}
}

class CardButton extends HTMLElement {
	constructor() { super() }

	connectedCallback () {
		this.innerHTML = `
			<div>
				<div class="about">
					<h2>${this.getAttribute('title')}</h2>
					<p>${this.getAttribute('description')}</p>
				</div>
				<span>&#62;</span>
			</div>
		`;
	}
}

class CardSimple extends HTMLElement {
	constructor() { super() }

	connectedCallback () {
		html = this.innerHTML;
		this.innerHTML = `<div>${html}</div>`;
	}
}

class CardIcon extends HTMLElement {
	constructor() { super() }

	connectedCallback () {
		this.innerHTML = `<div>
			<img src="${this.getAttribute('icon')}" title="${this.getAttribute('title')}" alt="${this.getAttribute('title')}"/>
			<h6>${this.getAttribute('title')}</h6>
		</div>`;
	}
}

class CardColor extends HTMLElement {
	constructor() { super() }

	connectedCallback () {
		this.innerHTML = `<div><p>${this.getAttribute('code')}</p></div>`;
		this.style.backgroundColor = this.getAttribute('code');
	}
}


if("customElements" in window) {
	customElements.define("card-product", CardProduct);
	customElements.define("card-button", CardButton);
	customElements.define("card-simple", CardSimple);
	customElements.define("card-icon", CardIcon);
	customElements.define("card-color", CardColor);
}