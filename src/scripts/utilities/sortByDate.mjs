const sortByDate = (data) => {
	if (data.length > 0) {
		return data.sort((a, b) => {
			const dateA = new Date(a.date)
			const dateB = new Date(b.date)
			if (!isNaN(dateA) && !isNaN(dateB)) {
				return dateB - dateA
			}
		})
	} else console.log('Data not found')
}

export default sortByDate