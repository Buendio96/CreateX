
const setDataToLocalStor = (data) => {
	if (data && data.length > 0) {
		let selectedData = data.map(project => ({
			id: project.id,
			name: project.name,
			description: project.description,
			imageName: project.imageName,
			dataType: project.dataType,
		}))
		localStorage.setItem('WorkProjects', JSON.stringify(selectedData))
	} else {
		console.log('no data to add to the local storage')
	}
}

export { setDataToLocalStor }

const checkedLocalStorage = (data) => {
}