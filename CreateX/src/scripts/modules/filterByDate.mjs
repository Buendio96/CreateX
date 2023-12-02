
const YYYY_MM_DD = (date) => {
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	day = day < 10 ? '0' + day : day;
	month = month < 10 ? '0' + month : month;

	return `${year}-${month}-${day}`;
};

const filterByDate = (targetTime = 3) => {
	const sometimeAgo = new Date();
	sometimeAgo.setMonth(sometimeAgo.getMonth() - targetTime);
	return YYYY_MM_DD(sometimeAgo)
};

export { YYYY_MM_DD, filterByDate };