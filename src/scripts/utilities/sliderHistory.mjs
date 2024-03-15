
const initSliderHistory = (mainImage, listOfHistory, description, toLeft, toRight) => {
	let counter = 1
	let newPath
	let newText

	if (listOfHistory) {
		listOfHistory.addEventListener('click', event => {
			newPath = getImagesPath(event)
			newText = getDescription(event)

			counter = getNumber(event) || 1
			if (newPath !== null || newText !== null) {
				mainImage.src = newPath
				description.innerText = newText
			}
		})
	}

	if (toLeft) {
		toLeft.addEventListener('click', () => {
			counter -= 1
			if (counter < 1) counter = 9
			updateContainer(mainImage, description, counter)
		})
	}

	if (toRight) {
		toRight.addEventListener('click', () => {
			counter += 1
			if (counter > 9) counter = 1
			updateContainer(mainImage, description, counter)
		})
	}
}

const updateContainer = (mainImage, descriptionEl, counter) => {
	const element = document.getElementById(counter)
	if (element) {
		mainImage.src = element.getAttribute('data-image')
		descriptionEl.innerText = element.getAttribute('data-description')
		element.checked = true
	}
}


const getImagesPath = (event) => {
	if (!event || !event.target.closest('input')) {
		return null
	}
	var pathToImage = event.target.closest('input').getAttribute('data-image')
	return pathToImage
}
const getDescription = (event) => {
	if (!event || !event.target.closest('input')) {
		return null
	}
	var description = event.target.closest('input').getAttribute('data-description')
	return description
}

const getNumber = (event) => {
	if (!event || !event.target.closest('input')) {
		return null
	}
	var numberOfImage = event.target.closest('input').getAttribute('id')
	return Number(numberOfImage)
}

export default initSliderHistory