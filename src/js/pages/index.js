const index = () => {
	const body = document.querySelector('body');

	const navigation = document.querySelector('.nav');

	const logo = navigation.querySelector('.logo');

	const menuList = navigation.querySelector('.nav__menu_list');

	const burgerBtn = navigation.querySelector('.js-burger-btn');

	function activationMenu() {
		navigation.classList.add('nav--active');

		burgerBtn.classList.add('burger_btn--active');

		burgerBtn.innerHTML = 'close';

		body.classList.add('disable_scrloll');
	}

	function deactivationMenu() {
		navigation.classList.remove('nav--active');

		burgerBtn.classList.remove('burger_btn--active');

		burgerBtn.innerHTML = 'menu';

		body.classList.remove('disable_scrloll');
	}

	burgerBtn.addEventListener('click', () => {
		if (burgerBtn.classList.contains('burger_btn--active')) {
			deactivationMenu();
		} else {
			activationMenu();
		}
	});

	logo.addEventListener('click', () => {
		console.log('logo');
		deactivationMenu();
	});

	menuList.addEventListener('click', (event) => {
		if (
			[...event.target.classList].some((item) => {
				console.log('hello');
				return item === 'nav__menu_link';
			})
		) {
			deactivationMenu();
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape') {
			deactivationMenu();
		}
	});

	document.addEventListener('click', (event) => {
		if (!navigation.contains(event.target)) {
			deactivationMenu();
		}
	});
};

export default index;
