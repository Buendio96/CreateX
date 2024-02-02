import fetchData from '@js-utilities/getData'
import sortByDate from '@js-utilities/sortByDate'
import STORE from '@js-store/store'

const initGetOpinionData = async () => {
	try {
		const OPINIONS_API = 'http://localhost:4100/opinions'
		const DATA = await fetchData(OPINIONS_API)
		STORE.OPINIONS = sortByDate(DATA)

	} catch (error) {
		console.log(error)
	}
}

export default initGetOpinionData

