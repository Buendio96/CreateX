import fetchData from '@js-utilities/getData'
import sortByDate from '@js-utilities/sortByDate'

let OPINIONS_STORE = [

]

const initGetOpinionData = async () => {
	try {
		const OPINIONS_API = 'http://localhost:4100/opinions'
		const DATA = await fetchData(OPINIONS_API)
		OPINIONS_STORE = sortByDate(DATA)

	} catch (error) {
		console.log(error)
	}
}

export { OPINIONS_STORE, initGetOpinionData }

