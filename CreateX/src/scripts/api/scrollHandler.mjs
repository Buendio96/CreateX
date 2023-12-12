const elements = document.querySelectorAll('.invisible');
const onEntry = (entry) => {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('visible');
		} else {
			change.target.classList.remove('visible');
		}
	});
}
let options = { threshold: [.5] };
let observer = new IntersectionObserver(onEntry, options);
for (let elm of elements) {
	observer.observe(elm);
}