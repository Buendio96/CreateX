const filterById = (serverData, localData) => {
	return serverData.filter(serverItem => (
		!localData.some(localItem => localItem.id === serverItem.id)
	))
}

export default filterById