const setDataToLocalStor = (data, key) => {
	if (data && data.length > 0) {
		let storedData = JSON.parse(localStorage.getItem(key)) || []

		data.forEach(newObject => {
			let existingObject = storedData.find(item => item.id === newObject.id)

			if (!existingObject) {
				storedData.push({
					id: newObject.id,
					name: newObject.name,
					description: newObject.description,
					imageName: newObject.imageName,
					dataType: newObject.dataType,
				})
			}
		})
		localStorage.setItem(key, JSON.stringify(storedData))
	}
}


export default setDataToLocalStor

