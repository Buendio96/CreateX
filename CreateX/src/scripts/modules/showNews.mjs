import createNewsCard from '@js-templates/newsCard'

const showNews = (container, data) => {
	container.innerHTML = ''
	data.forEach(element => {
		const card = createNewsCard(element)
		container.appendChild(card)
	})
}

export default showNews