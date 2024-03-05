const initGetQueryParams = (queryRequire) => {
	var queryParams = new URLSearchParams(window.location.search)
	const filterValue = queryParams.get(queryRequire)

	return filterValue !== '' ? filterValue : null
}

export default initGetQueryParams