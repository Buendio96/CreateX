const showProjects = (container, data, button, cardTemplate) => {
	if (!container || !Array.isArray(data) || data.length === 0) {
		console.log('Container for render or data of projects not found or is empty')
		return
	}

	let currentIndex = 0
	const quantityOfCards = 9

	const renderProjects = () => {
		for (let i = 0; i < quantityOfCards; i++) {
			let index = currentIndex + i
			if (data.length > index) {
				container.appendChild(cardTemplate(data[index]))
			} else {
				button.disabled = true
				button.style.color = '#DC143C'
				button.innerText = 'No more projects'
			}
		}
		currentIndex += quantityOfCards
	}

	if (button) {
		button.addEventListener('click', () => {
			renderProjects()
		})
	}
	renderProjects()
}

export default showProjects