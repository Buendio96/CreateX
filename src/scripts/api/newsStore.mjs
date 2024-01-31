import fetchData from '@js-utilities/getData'
import sortByDate from '@js-utilities/sortByDate'

const NEWS_STORE = {
	recentNews: [],
	allNews: [],
}

const initGetRecentNewsData = async (amount = 3) => {
	try {
		const NEWS_API = `http://localhost:4100/news?_sort=date&_order=desc&_limit=${amount}`
		const DATA = await fetchData(NEWS_API)
		NEWS_STORE.recentNews = sortByDate(DATA)
	} catch (error) {
		console.error(error)
	}
}

export { NEWS_STORE, initGetRecentNewsData }

