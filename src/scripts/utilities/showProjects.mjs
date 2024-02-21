import { initGetAllData } from '@js-api/getProjectsData'
import STORE from '@js-store/store'
import createPortfolioCard from '@js-templates/portfolioCard'


const getFilterType = (event) => {
	var element = event.target.closest('button')
	if (!element) return null

	var filterType = element.getAttribute('data-filter')
	return filterType
}


const renderProjects = (container, data) => {
	for (let i = 0; i < data.length; i++) {
		container.appendChild(createPortfolioCard(data[i]))
	}
}

const showMore = async (container, data, start) => {
	let end = start + 9
	await initGetAllData(start, end)
	renderProjects(container, data)
}

const initShowProjects = (container, button) => {

	let start = 9
	renderProjects(container, STORE.PROJECTS.allProjects)
	if (button && !button.hasEventListener) {
		button.hasEventListener = true
		button.addEventListener('click', async () => {
			await showMore(container, STORE.PROJECTS.allProjects, start)
			start += 9
		})
	}
}


export { getFilterType, initShowProjects }

