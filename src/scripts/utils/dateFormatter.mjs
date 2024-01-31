const YYYY_MM_DD = (date) => {
	let day = date.getDate()
	let month = date.getMonth() + 1
	let year = date.getFullYear()

	day = day < 10 ? '0' + day : day
	month = month < 10 ? '0' + month : month

	return `${year}-${month}-${day}`
}
const MM_DD_YYYY = (date) => {
	let day = date.getDate()
	let monthName = date.toLocaleDateString('en-US', { month: 'long' })
	let year = date.getFullYear()

	return `${monthName} ${day}, ${year}`
}


const setNeededMonth = (targetTime) => {
	const current = new Date()
	current.setMonth(current.getMonth() - targetTime)
	return YYYY_MM_DD(current)
}

export { MM_DD_YYYY, YYYY_MM_DD, setNeededMonth }

