const nav = document.querySelector('.nav');
const contactForm = document.querySelector('.contact__form');
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const messageEl = document.querySelector('#message');
const isRequired = (value) => (value === '' ? false : true);

function showError(input, message) {
	const formGroup = input.parentElement;
	const error = formGroup.querySelector('.error-message');
	input.classList.add('error');
	error.textContent = message;
}

function showSuccess(input) {
	input.classList.remove('error');
	input.classList.add('success');
}

// Form Validation
function isEmailValid(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function checkName() {
	let valid = false;
	const name = nameEl.value.trim();

	if (!isRequired(name)) {
		showError(nameEl, 'This field is required');
	} else {
		showSuccess(nameEl);
		valid = true;
	}
	return valid;
}

function checkEmail() {
	let valid = false;
	const email = emailEl.value.trim();

	if (!isRequired(email)) {
		showError(emailEl, 'This field is required');
	} else if (!isEmailValid(email)) {
		showError(emailEl, 'Email is not valid');
	} else {
		showSuccess(emailEl);
		valid = true;
	}
	return valid;
}

function checkMessage() {
	let valid = false;
	const message = messageEl.value.trim();

	if (!isRequired(message)) {
		showError(messageEl, 'This field is required');
	} else {
		showSuccess(messageEl);
		valid = true;
	}
	return valid;
}

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

contactForm.addEventListener('submit', (e) => {
	let isNameValid = checkName(),
		isEmailValid = checkEmail(),
		isMessageValid = checkMessage();

	let isFormValid = isNameValid && isEmailValid && isMessageValid;

	if (!isFormValid) {
		e.preventDefault();
	}
});
