import { YYYY_MM_DD, setNeededMonth } from '@js-utilities/dateFormatter'
import fetchData from '@js-utilities/getData'
import sortByDate from '@js-utilities/sortByDate'

const PROJECTS_STORE = {
	allProjects: [
	],
	byDateProjects: [

	]
}



const initGetFilteredData = async (from, to = 3) => {
	try {
		const FROM_DATE = YYYY_MM_DD(from)
		const TO_DATE = setNeededMonth(to)
		const PROJECTS_API = `http://localhost:4100/projects?date_gte=${TO_DATE}&date_lte=${FROM_DATE}`
		const DATA = await fetchData(PROJECTS_API)
		PROJECTS_STORE.byDateProjects = sortByDate(DATA)
	} catch (error) {
		console.error(error)
	}
}

export { PROJECTS_STORE, initGetFilteredData }

