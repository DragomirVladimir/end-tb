const index = () => {
	const body = document.querySelector('body');

	const navigation = document.querySelector('.nav');

	const logo = navigation.querySelector('.logo');

	// const navLinks = document.querySelectorAll('.nav__menu_link');

	const menuList = navigation.querySelector('.nav__menu_list');

	const burgerBtnOpen = navigation.querySelector('.js-burger-btn--open');

	const burgerBtnClose = navigation.querySelector('.js-burger-btn--close');

	function activationMenu() {
		navigation.classList.add('nav--active');

		body.classList.add('disable_scrloll');
	}

	function deactivationMenu() {
		navigation.classList.remove('nav--active');

		body.classList.remove('disable_scrloll');
	}

	burgerBtnOpen.addEventListener('click', () => {
		activationMenu();
	});

	burgerBtnClose.addEventListener('click', () => {
		deactivationMenu();
	});

	logo.addEventListener('click', () => {
		console.log('logo');
		deactivationMenu();
	});

	// navLinks.forEach((el) => {

	//   el.addEventListener('click', () => {

	//     deactivationMenu();

	//   })

	// });

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
