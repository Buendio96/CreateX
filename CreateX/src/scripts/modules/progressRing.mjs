const setProgress = (percent, x) => {
	const offset = (1 - percent / 100) * x;
	return offset;
};

const progressRing = (item, percent) => {
	const radius = item.r.baseVal.value;
	const circumference = 2 * Math.PI * radius;

	item.style.strokeDasharray = `${circumference} ${circumference}`;
	item.style.strokeDashoffset = 0;

	item.style.strokeDashoffset = setProgress(percent, circumference);
};

export default progressRing;
