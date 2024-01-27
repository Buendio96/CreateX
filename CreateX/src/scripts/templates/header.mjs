const burgerMenuEl = document.getElementById('burgerMenu')
const burgerToggleEl = document.getElementById('burgerToggle')
const headerEl = document.getElementById('header')

const changeBackgroundHeader = (element) => {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 300) {
			element.classList.add('header-background')
		} else {
			element.classList.remove('header-background')
		}
	})
}
document.addEventListener('DOMContentLoaded', () => changeBackgroundHeader(headerEl))

burgerToggleEl.addEventListener('click', () => {
	burgerMenuEl.classList.toggle('active-burger')
})


