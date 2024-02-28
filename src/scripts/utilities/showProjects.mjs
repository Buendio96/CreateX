import { initGetAllData } from '@js-api/getProjectsData'
import setDataToLocalStor from '@js-store/handlersLocalStorage'
import STORE from '@js-store/store'
import createPortfolioCard from '@js-templates/portfolioCard'

const STORE_KEY = 'WorkProjects'
const QUANTITY_OF_DATA = 9
const URL = window.location.href

const getFilterType = (event) => {
	if (!event || !event.target.closest('button')) {
		return null
	}
	var filterType = event.target.closest('button').getAttribute('data-filter')
	return filterType === null ? null : filterType
}

const render = (container, data, filter = null) => {
	if (!container || !data) {
		console.error('Container for render or data not found')
		return
	}
	if (filter !== null) {
		container.innerHTML = ''
	}
	data.forEach(item => {
		container.appendChild(createPortfolioCard(item))
	})
}

const getMoreData = async (from) => {
	let end = from + QUANTITY_OF_DATA
	await initGetAllData(from, end)
	return STORE.PROJECTS.allProjects
}

const getDataFromLocalStore = (startID, endIDFilter, filter = null) => {
	const storedData = JSON.parse(localStorage.getItem(STORE_KEY)) || []
	let endID = startID + QUANTITY_OF_DATA

	if (filter === null) {
		return storedData.filter(item => item.id >= startID && item.id < endID)
	} else {
		return storedData.filter(item => item.id >= startID && item.id < endIDFilter && item.dataType === filter)
	}
}

const setNewURL = (value) => {
	if (value !== null) {
		var newUrl = URL + `&filters=${value}`
		window.history.replaceState({}, document.title, newUrl)
	}
}

const initShowProjects = async (container, button, boxOfFilters = null) => {
	let startWith = 0
	let maxFilteredItems = 9
	let filterType = null
	let localData = getDataFromLocalStore(startWith, maxFilteredItems, filterType)
	console.log(startWith)

	if (localData.length === 0) {
		const getData = await getMoreData(startWith)
		setDataToLocalStor(getData, STORE_KEY)
		localData = getDataFromLocalStore(startWith, maxFilteredItems, filterType)
	}

	render(container, localData, filterType)
	startWith += QUANTITY_OF_DATA
	console.log(startWith)

	if (button && !button.hasEventListener) {
		button.hasEventListener = true

		button.addEventListener('click', async () => {
			startWith += QUANTITY_OF_DATA
			maxFilteredItems += QUANTITY_OF_DATA
			if (localData.length === 0) {
				const getData = await getMoreData(startWith)
				setDataToLocalStor(getData, STORE_KEY)
				localData = getDataFromLocalStore(startWith, maxFilteredItems, filterType)
			}

			render(container, localData, filterType)


			if (localData.length === 0 && STORE.PROJECTS.allProjects.length === 0) {
				button.disabled = true
			}
		})
	}

	if (boxOfFilters && !boxOfFilters.hasEventListener) {
		boxOfFilters.hasEventListener = true

		boxOfFilters.addEventListener('click', async (target) => {
			filterType = getFilterType(target)
			const FILTERED_LOCAL_DATA = getDataFromLocalStore(0, maxFilteredItems, filterType)
			/* setNewURL(filterType) */
			render(container, FILTERED_LOCAL_DATA, filterType)
		})
	}

}
export default initShowProjects
