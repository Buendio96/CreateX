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
	const data = STORE.PROJECTS.allProjects
	console.log('Get data')
	return data.length > 0 ? data : null
}


const setNewURL = (value) => {
	if (value !== null) {
		var newUrl = URL + `&filters=${value}`
		window.history.replaceState({}, document.title, newUrl)
	}
}

const getDataFromLocalStore = (startID = 0, endIDFilter, filter = null) => {
	const storedData = JSON.parse(localStorage.getItem(STORE_KEY)) || []
	let endID = startID + QUANTITY_OF_DATA

	if (filter === null) {
		return storedData.filter(item => item.id >= startID && item.id < endID)
	} else if (filter !== null && filter !== 'all') {
		return storedData.filter(item => item.id >= startID && item.id < endIDFilter && item.dataType === filter)
	} else if (filter === 'all') {
		return storedData.filter(item => item.id >= startID && item.id < endIDFilter)
	}
}

const setDataForRender = async (startWith, maxFilteredItems, filterType) => {
	let localData = getDataFromLocalStore(startWith, maxFilteredItems, filterType)

	if (localData.length === 0 && filterType === null) {
		const getData = await getMoreData(startWith)
		if (getData === null) return null
		setDataToLocalStor(getData, STORE_KEY)
		localData = getDataFromLocalStore(startWith, maxFilteredItems)
	} else if (localData.length === 0 && filterType !== null) {
		const getData = await getMoreData(startWith)
		if (getData === null) return null
		setDataToLocalStor(getData, STORE_KEY)
		localData = getDataFromLocalStore(undefined, maxFilteredItems, filterType)
	} else if (localData.length > 0 && filterType !== null) {
		localData = getDataFromLocalStore(0, maxFilteredItems, filterType)
	}
	return localData
}

const initShowProjects = async (container, button, boxOfFilters = null) => {
	let startWith = 0
	let maxFilteredItems = 9
	let filterType = null
	let localData = await setDataForRender(startWith, maxFilteredItems, filterType)
	render(container, localData, filterType)


	if (button && !button.hasEventListener) {
		button.hasEventListener = true

		button.addEventListener('click', async () => {
			startWith += QUANTITY_OF_DATA
			maxFilteredItems += QUANTITY_OF_DATA

			localData = await setDataForRender(startWith, maxFilteredItems, filterType)

			if (localData !== null) {
				render(container, localData, filterType)
			} else {
				button.disabled = true
				console.log('button was disablrd')
			}
		})
	}

	if (boxOfFilters && !boxOfFilters.hasEventListener) {
		boxOfFilters.hasEventListener = true

		boxOfFilters.addEventListener('click', async (target) => {
			filterType = getFilterType(target)
			localData = await setDataForRender(0, maxFilteredItems, filterType)
			/* setNewURL(filterType) */
			render(container, localData, filterType)
		})
	}

}
export default initShowProjects