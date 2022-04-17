// Particles
particlesJS("bg", {
	"particles": {
	  "number": {
		"value": 100,
		"density": {
		  "enable": false,
		  "value_area": 800
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "star",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
		"image": {
		  "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
		  "width": 100,
		  "height": 100
		}
	  },
	  "opacity": {
		"value": 0.5,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 1,
		  "opacity_min": 0.1,
		  "sync": false
		}
	  },
	  "size": {
		"value": 4,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 40,
		  "size_min": 0.1,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": false,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 14,
		"direction": "left",
		"random": false,
		"straight": true,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": false,
		  "mode": "grab"
		},
		"onclick": {
		  "enable": true,
		  "mode": "repulse"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 200,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 400,
		  "size": 40,
		  "duration": 2,
		  "opacity": 8,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
})
AOS.init();

window.addEventListener('scroll', e => {
	if (document.documentElement.scrollTop > 20) {
		const nav = document.getElementById('nav')
		nav.style.backgroundColor = 'rgba(0,0,0,0.5)'
		nav.style.backdropFilter = 'blur(5px)'
	} else {
		nav.style.boxShadow = 'inset 0 -1px 0 0 hsla(0,0%,100%,0.1)'
		nav.style.backgroundColor = 'transparent'
	}
})

const tips = [
	{
		query: '#discord',
		content: 'Discord'
	},
	{
		query: '#instagram',
		content: 'Instagram',
	},
	{
		query: '#github',
		content: 'Github',
	},
];


const sr = ScrollReveal({
	origin: 'bottom',
	distance: '60px',
	duration: 1000,
	delay: 400
})

const ops = { interval: 100 }

sr.reveal('.head, .paragraph, .hero-button', ops);
sr.reveal('.icon', ops);
sr.reveal(".about-title, .about-img, .about-text, .about-description.grey", ops);
sr.reveal('.stats-item', ops);

// Projects

const container = document.querySelector('.project-content');


const links = document.querySelectorAll(".nav-link");
Array.from(links).forEach(link => {
	if (link.getAttribute('data-scroll')) {
		link.onclick = () => window.scrollTo({ top: document.querySelector(link.getAttribute("data-scroll")).offsetTop, behavior: 'smooth' })
	}
})
window.addEventListener('resize', add)
function add() {
	if (window.innerWidth < 900) {
		document.body.classList.add('mobile')
	} else {
		document.body.classList.remove('mobile')
	}
}
window.onload = add;
let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')
let bars = document.querySelectorAll('.hamburger span')
let isActive = false
hamburger.addEventListener('click', function () {
	mobileNav.classList.toggle('open')
	if (!isActive) {
		bars[0].style.transform = 'rotate(45deg)'
		bars[1].style.opacity = '0'
		bars[2].style.transform = 'rotate(-45deg)'
		isActive = true
	} else {
		bars[0].style.transform = 'rotate(0deg)'
		bars[1].style.opacity = '1'
		bars[2].style.transform = 'rotate(0deg)'
		isActive = false
	}
})
