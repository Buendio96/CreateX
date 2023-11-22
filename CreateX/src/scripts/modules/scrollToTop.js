const scrollToTopButton = document.getElementById("scrollToTopBtn");

const scrollFunction = () => {
	if (document.documentElement.scrollTop > 100) {
		scrollToTopButton.style.opacity = 1;
		scrollToTopButton.style.cursor = 'pointer';
	} else {
		scrollToTopButton.style.opacity = 0;
	}
}
window.onscroll = function () {
	scrollFunction();
};

scrollToTopButton.addEventListener('click', () => {
	document.documentElement.scrollTop = 0;
})