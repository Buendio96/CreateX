import STORE from '@js-store/store'
import fetchData from '@js-utilities/getData'
import sortByDate from '@js-utilities/sortByDate'

const initGetRecentNewsData = async (amount = 3) => {
	try {
		const NEWS_API = `http://localhost:4100/news?_sort=date&_order=desc&_limit=${amount}`
		const DATA = await fetchData(NEWS_API)
		STORE.NEWS.recentNews = sortByDate(DATA)
	} catch (error) {
		console.error(error)
	}
}

export default initGetRecentNewsData

