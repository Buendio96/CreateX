
const addServicesBackground = async (array, addingFunction) => {
	if (array.length > 0 && addingFunction) {
		for (let index = 0; index < array.length; index++) {
			const blockId = array[index]
			const image = await import(`@images/home-serv-item-${index}.jpg`)
			if (image) addingFunction(blockId, image.default)
			else console.log('Image no found')
		}
	}
}
export default addServicesBackground