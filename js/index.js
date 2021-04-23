const nav = document.querySelector('.nav');

// Event Listeners

nav.addEventListener('click', (e) => {
	// Toggle Nav
	if (e.target.classList.contains('nav__toggler')) {
		nav.classList.toggle('expanded');
	}
});

window.addEventListener('resize', () => {
	// Remove mobile nav at larger screens
	if (window.matchMedia('(min-width: 768px)').matches) {
		nav.classList.remove('expanded');
	}
});
