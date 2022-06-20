/*––––––––––––––––––––

	Made by MrBoomDev in 2022
	
	Discord: https://bit.ly/mrboomdevds
	YouTube: https://bit.ly/mrboomdevyt
	VKontake: https://bit.ly/mrboomdevvk
	
––––––––––––––––––––*/

let online = true;

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

const cookies = {
	set: (key, value) => {
		localStorage.setItem(key, value);
},
	get: key => {
		return localStorage.getItem(key);
	}
};

function alert(title, description, time) {
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

Date.prototype.zeros = n => {
	if(n > 9) {
		return n;
	} else {
		return "0" + n;
	}
}

Date.prototype.offset = (input, offset, type) => {
	var result = input + offset;
	if(result > 23) { return (result - 24)} else { return result }
}

Date.prototype.getWeek = () => {
	startDate = new Date(this.getFullYear(), 0, 1);
	var days = Math.floor((this - startDate) / (24 * 60 * 60 * 1000));
	return weekNumber = Math.ceil(days / 7);
}

Number.prototype.isEven = () => {
	return this % 2 == 0;
}

const console = {
	log: text => { if(cookies.get("logs") == "true") alert("Console Log", text, 2000) },
	error: text => { alert("An error has occurred", text, 5000) },
	warn: text => { alert("Sorry", text, 3000) },
	debug: text => { if(cookies.get("logs")) alert("Console Debug", "<textarea>" + text + "</textarea>", 30000) }
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