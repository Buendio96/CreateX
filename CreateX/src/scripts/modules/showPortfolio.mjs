import createPortfolioCard from '@js-templates/portfolioCard'

const showCards = ({
	array,
	quantityOfCards = 3,
	skipLeft,
	skipRight,
	containerElement
}) => {
	let currentIndex = 0
	const renderCards = () => {
		containerElement.innerHTML = ''
		for (let x = 0; x < quantityOfCards; x++) {
			const index = currentIndex + x
			if (index < array.length) {
				const card = createPortfolioCard(array[index])
				containerElement.appendChild(card)
			}
		}
	}


	const handleRightButtonClick = () => {
		currentIndex += quantityOfCards
		if (currentIndex >= array.length) {
			currentIndex = 0
		}
		renderCards()
	}

	const handleLeftButtonClick = () => {
		currentIndex -= quantityOfCards
		if (currentIndex < 0) {
			currentIndex = Math.max(0, array.length - quantityOfCards)
		}
		renderCards()
	}

	if (skipLeft) skipLeft.addEventListener('click', handleLeftButtonClick)
	if (skipRight) skipRight.addEventListener('click', handleRightButtonClick)

	renderCards()
}

export default showCards