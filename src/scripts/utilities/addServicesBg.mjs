import addBackground from '@js-utilities/addBackground'

const addServicesBackground = (targetBlock, imageArray) => {
	if (targetBlock.length > 0 && imageArray.length > 0) {
		for (let index = 0; targetBlock.length > index; index++) {
			const imageId = targetBlock[index]
			const imageName = imageArray[index]
			if (imageName) addBackground(imageId, imageName)
			else console.log('Image not found')
		}
	}
}
export default addServicesBackground