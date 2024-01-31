let currentIndex = 0;

const cleaner = (elements) => {
	for (let key in elements) {
		const element = elements[key];
		if ('innerText' in element) element.innerText = '';
		if ('src' in element) element.src = '';
	}
};

const fillContent = (elements, data) => {
	for (let key in elements) {
		const element = elements[key];
		if (data.hasOwnProperty(key)) {
			if ('innerText' in element) element.innerText = data[key];
			if ('src' in element) element.src = `assets/static-images/opinion/${data[key]}.png`;
		}
	}
};

const toLeft = (elements, data) => {
	if (elements && data) {
		currentIndex = (currentIndex - 1 + data.length) % data.length;
		const currentOpinion = data[currentIndex];
		cleaner(elements);
		fillContent(elements, currentOpinion);
	};
};

const toRight = (elements, data) => {
	if (elements && data) {
		currentIndex = (currentIndex + 1) % data.length;
		const currentOpinion = data[currentIndex];
		cleaner(elements);
		fillContent(elements, currentOpinion);
	};
};

const initShowOpinion = (elements, data) => {
	if (data.length > 0) {
		const firstOpinion = data[currentIndex];
		cleaner(elements);
		fillContent(elements, firstOpinion);
	};
};

export { toLeft, toRight, initShowOpinion };