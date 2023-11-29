const burgerMenuEl = document.getElementById('burgerMenu');
document.getElementById('burgerToggle')
	.addEventListener('click', () => {
		burgerMenuEl.classList.toggle('active-burger')
	})