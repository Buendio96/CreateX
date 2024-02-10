import STORE from '@js-store/store'
import { YYYY_MM_DD, setNeededMonth } from '@js-utilities/dateFormatter'
import fetchData from '@js-utilities/getData'
import sortByDate from '@js-utilities/sortByDate'


const initGetFilteredData = async (from, to = 3) => {
	try {
		const FROM_DATE = YYYY_MM_DD(from)
		const TO_DATE = setNeededMonth(to)
		const PROJECTS_API =
			`http://localhost:4100/projects?date_gte=${TO_DATE}&date_lte=${FROM_DATE}`
		const data = await fetchData(PROJECTS_API)
		STORE.PROJECTS.byDateProjects = sortByDate(data)
	} catch (error) {
		console.error(error)
	}
}
const initGetRelatedData = async (dataType) => {
	try {
		const RELATED_PROJECTS_API =
			`http://localhost:4100/projects?dataType=${dataType}`
		const data = await fetchData(RELATED_PROJECTS_API)
		STORE.PROJECTS.relatedProjects[dataType] = data
	} catch (error) {
		console.error(error)

	}
}
export { initGetFilteredData, initGetRelatedData }

