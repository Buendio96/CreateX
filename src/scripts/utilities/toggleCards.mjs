const toggleProjectsCards = (OPTIONS) => {
	const {
		inputData,
		containerEl,
		skipLeft,
		skipRight,
		cardTemplate,
	} = OPTIONS

	let currentIndex = 0

	renderCards(containerEl, cardTemplate, inputData, currentIndex)

	if (skipRight) {
		skipRight.addEventListener('click', () => {
			currentIndex = handleRightClick(currentIndex, inputData)
			renderCards(containerEl, cardTemplate, inputData, currentIndex)
		})
	} else {
		console.log('SkipRight not found')
	}

	if (skipLeft) {
		skipLeft.addEventListener('click', () => {
			currentIndex = handleLeftClick(currentIndex, inputData)
			renderCards(containerEl, cardTemplate, inputData, currentIndex)

		})
	} else {
		console.log('SkipLeft not found')
	}
}

const renderCards = (container, cardTemplate, array, currentIndex) => {
	if (!(container || cardTemplate || array || currentIndex)) {
		console.log(
			'All arguments were not transmitted in --RENDER CARDS--',
			container, cardTemplate, array, container
		)
		return
	} else {
		container.innerHTML = ''
		for (let i = 0; i < 3; i++) {
			let index = currentIndex + i
			if (index < array.length) {
				const card = cardTemplate(array[index])
				container.appendChild(card)
			}
		}
	}
}

const handleRightClick = (currentIndex, array) => {
	currentIndex += 3
	if (currentIndex >= array.length) {
		currentIndex = 0
	}
	return currentIndex
}

const handleLeftClick = (currentIndex, array) => {
	currentIndex -= 3
	if (currentIndex < 0) {
		currentIndex = Math.max(0, array.length - 3)
	}
	return currentIndex
}


export default toggleProjectsCards





