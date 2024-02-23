import { initGetAllData } from '@js-api/getProjectsData'
import STORE from '@js-store/store'
import createPortfolioCard from '@js-templates/portfolioCard'


const getFilterType = (event) => {
	if (!event || !event.target.closest('button')) {
		return null
	}
	var filterType = event.target.closest('button').getAttribute('data-filter')
	return filterType !== null ? filterType : null
}

const renderProjects = (container, data) => {
	for (let i = 0; i < data.length; i++) {
		container.appendChild(createPortfolioCard(data[i]))
	}
}

const renderFilteredProjects = (container, data) => {
	container.innerHTML = ''
	for (let i = 0; i < data.length; i++) {
		container.appendChild(createPortfolioCard(data[i]))
	}
}
const showMore = async (from, filter = null) => {
	let start = from
	let end = start + 9
	if (!filter) {
		await initGetAllData(from, end)
	} else {
		await initGetAllData(from, end, filter)
	}
	return STORE.PROJECTS.allProjects
}

const initShowProjects = (container, showMoreBtn, quantityOfCards = 9, boxOfFilters = null) => {
	let from = quantityOfCards
	let data = STORE.PROJECTS.allProjects
	let actualFilterType = null

	renderProjects(container, data)

	if (boxOfFilters !== null) {
		boxOfFilters.addEventListener('click', async event => {
			let filterValue = getFilterType(event)
			actualFilterType = filterValue

			if (filterValue !== null) {
				let actualFilteredData = data.filter(item => item.dataType === filterValue)
				renderFilteredProjects(container, actualFilteredData)
				from = quantityOfCards
			} if (filterValue === 'all') {
				renderFilteredProjects(container, data)
				from = quantityOfCards

			}
		})
	} else {
		console.log('--boxOfFilters-- not found')
	}


	if (showMoreBtn && !showMoreBtn.hasEventListener) {
		showMoreBtn.hasEventListener = true

		showMoreBtn.addEventListener('click', async () => {
			let actualData = await showMore(from)

			if (actualData.length <= 0) {
				showMoreBtn.disabled = true
				return
			} else if (actualFilterType !== null) {
				actualData = await showMore(from, actualFilterType)
				renderProjects(container, actualData)
				from += quantityOfCards
			}
			else {
				renderProjects(container, actualData)
				from += quantityOfCards
			}
		})
	} else {
		console.log('--showMoreBtn-- not found')
	}
}


export default initShowProjects

