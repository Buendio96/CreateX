import { initGetAllData } from '@js-api/getProjectsData'
import setDataToLocalStor from '@js-store/handlersLocalStorage'
import STORE from '@js-store/store'
import createPortfolioCard from '@js-templates/portfolioCard'

const STORE_KEY = 'WorkProjects'

const getFilterType = (event) => {
	if (!event || !event.target.closest('button')) {
		return null
	}
	var filterType = event.target.closest('button').getAttribute('data-filter')
	return filterType !== null ? filterType : null
}

const render = (container, data, filter = false) => {
	if (!(container || data)) {
		console.error('Container for render or data not found')
		return
	}
	if (filter) {
		container.innerHTML = ''
	}
	for (let i = 0; i < data.length; i++) {
		container.appendChild(createPortfolioCard(data[i]))
	}
}

const getMoreData = async (from, filter = null) => {
	let end = from + 9
	if (filter === null) {
		await initGetAllData(from, end)
	} else {
		await initGetAllData(from, end, filter)
	}
	return
}
const dataFromLocalStore = (key, startId, endId) => {
	const storedData = JSON.parse(localStorage.getItem(key)) || []
	return storedData.filter(item => item.id >= startId && item.id <= endId)
}


const initShowProjects = async (container, button, quantityOfCards = 9, boxOfFilters = null) => {
	let from = 0
	let to = from + quantityOfCards - 1

	const RANGED_LOCAL_DATA = dataFromLocalStore(STORE_KEY, from, to)

	if (RANGED_LOCAL_DATA.length > 0) {
		render(container, RANGED_LOCAL_DATA)
		from += quantityOfCards
		to = from + quantityOfCards - 1

	} else {
		await getMoreData(from)
		setDataToLocalStor(STORE.PROJECTS.allProjects, STORE_KEY)
		render(container, STORE.PROJECTS.allProjects)
		from += quantityOfCards
		to = from + quantityOfCards - 1
	}

	if (button && !button.hasEventListener) {
		button.hasEventListener = true
		button.addEventListener('click', async () => {
			const RANGED_LOCAL_DATA = dataFromLocalStore(STORE_KEY, from, to)

			if ((STORE.PROJECTS.allProjects.length || RANGED_LOCAL_DATA.length) <= 0) {
				button.disabled = true
				return
			}

			if (RANGED_LOCAL_DATA.length > 0) {
				render(container, RANGED_LOCAL_DATA)
				from += quantityOfCards
				to = from + quantityOfCards - 1
				return
			}

			await getMoreData(from)
			render(container, STORE.PROJECTS.allProjects)
			setDataToLocalStor(STORE.PROJECTS.allProjects, STORE_KEY)
			from += quantityOfCards
			to = from + quantityOfCards - 1
		})
	}
}


export default initShowProjects

