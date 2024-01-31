const sortByDate = (data) => {
	return data.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		if (!isNaN(dateA) && !isNaN(dateB)) {
			return dateB - dateA;
		}
	});
};

export default sortByDate;