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
	return filterType !== null ? filterType : null
}

const render = (container, data, filter = false) => {
	if (!container || !data) {
		console.error('Container for render or data not found')
		return
	}
	if (filter) {
		container.innerHTML = ''
	}
	data.forEach(item => {
		container.appendChild(createPortfolioCard(item))
	})
}

const getMoreData = async (from, filter = null) => {
	let end = from + QUANTITY_OF_DATA
	if (filter === null) {
		await initGetAllData(from, end)
	} else {
		await initGetAllData(from, end, filter)
	}
	return
}

const dataFromLocalStore = (key, startID) => {
	let endID = startID + QUANTITY_OF_DATA
	const storedData = JSON.parse(localStorage.getItem(key)) || []
	return storedData.filter(item => item.id >= startID && item.id < endID)
}

const getAndRenderData = async (localData, container, startWith) => {
	if (localData.length > 0) {
		render(container, localData)
	} else {
		await getMoreData(startWith)
		setDataToLocalStor(STORE.PROJECTS.allProjects, STORE_KEY)
		render(container, STORE.PROJECTS.allProjects)
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


	const INIT_LOCAL_DATA = dataFromLocalStore(STORE_KEY, startWith)

	await getAndRenderData(INIT_LOCAL_DATA, container, startWith)
	startWith += QUANTITY_OF_DATA

	if (button && !button.hasEventListener) {
		button.hasEventListener = true

		button.addEventListener('click', async () => {
			const LOCAL_DATA = dataFromLocalStore(STORE_KEY, startWith)

			await getAndRenderData(LOCAL_DATA, container, startWith)
			startWith += QUANTITY_OF_DATA

			if (LOCAL_DATA.length === 0 && STORE.PROJECTS.allProjects.length === 0) {
				button.disabled = true
			}
		})
	}

	if (boxOfFilters && !boxOfFilters.hasEventListener) {
		boxOfFilters.hasEventListener = true

		boxOfFilters.addEventListener('click', async (target) => {
			const filterType = getFilterType(target)
			setNewURL(filterType)
		})
	}

}
export default initShowProjects
