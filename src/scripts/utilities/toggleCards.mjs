
const toggleProjectsCards = (OPTIONS) => {
	const {
		inputData,
		containerEl,
		skipLeft,
		skipRight,
		cardTemplate,
		quantityOfCards = 3
	} = OPTIONS

	let currentIndex = 0

	const RENDER_OPTIONS = {
		container: containerEl,
		array: inputData,
		cardTemplate: cardTemplate,
		quantityOfCards: quantityOfCards,
	}


	skipRight.addEventListener('click', () => {
		currentIndex = handleRightClick(currentIndex, quantityOfCards, inputData)
		renderCards(RENDER_OPTIONS, currentIndex)
	})

	skipLeft.addEventListener('click', () => {
		currentIndex = handleLeftClick(currentIndex, quantityOfCards)
		renderCards(RENDER_OPTIONS, currentIndex)
	})
	renderCards(RENDER_OPTIONS, currentIndex)

}

const renderCards = (argumentsForRender, index) => {
	const {
		container,
		array,
		cardTemplate,
		cardsQuantity,
	} = argumentsForRender
	console.log(argumentsForRender, index)
	if (container && cardsQuantity) {
		container.innerHTML = ''

		for (let i = 0; i < cardsQuantity; i++) {
			const card = cardTemplate(array[index + i])
			container.appendChild(card)
		}
	}
}

const handleRightClick = (index, quantity, array) => {
	console.log(index, quantity, array)
	return index + quantity
}

const handleLeftClick = (index, quantity) => {
	index -= quantity
	if (index < 0) {
		index = 0
	}
	return index
}


export default toggleProjectsCards





