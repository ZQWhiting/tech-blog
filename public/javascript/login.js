async function signupFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector('#username-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();

	if (username && password) {
		const response = await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password,
			}),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert(response.statusText);
		}
	}
}

async function loginFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector('#username-login').value.trim();
	const password = document.querySelector('#password-login').value.trim();

	if (username && password) {
		const response = await fetch('/api/users/login', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password,
			}),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert(response.statusText);
		}
	}
}

function toggleHandler() {
	if (
		document.querySelector('#login-container').className.includes('hidden')
	) {
		document.querySelector('#login-container').classList.remove('hidden');
		document.querySelector('#signup-container').classList.add('hidden');
	} else {
		document.querySelector('#login-container').classList.add('hidden');
		document.querySelector('#signup-container').classList.remove('hidden');
	}
}

document
	.querySelector('#toggle-login')
	.addEventListener('click', toggleHandler);
document
	.querySelector('#toggle-signup')
	.addEventListener('click', toggleHandler);

document
	.querySelector('#signup-form')
	.addEventListener('submit', signupFormHandler);
document
	.querySelector('#login-form')
	.addEventListener('submit', loginFormHandler);
