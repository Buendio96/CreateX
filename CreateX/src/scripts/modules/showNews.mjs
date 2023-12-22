import createNewsCard from '@js-templates/newsCard'

const showNews = (container, data, page) => {
	container.innerHTML = ''
	data.forEach(element => {
		const card = createNewsCard(element, page)
		container.appendChild(card)
	})
}

export default showNews