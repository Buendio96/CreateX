import STORE from '@js-store/store'
import { YYYY_MM_DD, setNeededMonth } from '@js-utilities/dateFormatter'
import fetchData from '@js-utilities/getData'
import sortByDate from '@js-utilities/sortByDate'


const initGetFilteredData = async (from, to = 3) => {
	try {
		const FROM_DATE = YYYY_MM_DD(from)
		const TO_DATE = setNeededMonth(to)
		const data = await fetchData(`http://localhost:4100/projects?date_gte=${TO_DATE}&date_lte=${FROM_DATE}`)
		STORE.PROJECTS.byDateProjects = sortByDate(data)
	} catch (error) {
		console.error(error)
	}
}
const initGetRelatedData = async (dataType) => {
	try {
		const data = await fetchData(`http://localhost:4100/projects?dataType=${dataType}`)
		STORE.PROJECTS.relatedProjects[dataType] = data
	} catch (error) {
		console.error(error)
	}
}

const initGetAllData = async (start = 0, end = 9) => {
	try {
		const data = await fetchData(`http://localhost:4100/projects?_start=${start}&_end=${end}`)
		STORE.PROJECTS.allProjects = data
	} catch (error) {
		console.log(error)
	}
}

export { initGetAllData, initGetFilteredData, initGetRelatedData }

