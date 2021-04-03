const nav = document.querySelector('.nav');

nav.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav__toggler')) {
		nav.classList.toggle('expanded');
	}
});
