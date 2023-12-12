import fetchData from '@js-api/getData';
import sortByDate from '@js-modules/sortByDate';

let OPINIONS_STORE = [];

const initGetOpinionData = async () => {
	try {
		const OPINIONS_API = 'http://localhost:4100/opinions';
		const NEW_DATA = await fetchData(OPINIONS_API);
		NEW_DATA.forEach(newItem => {
			const existingItemIndex = OPINIONS_STORE.some(item => item.id === newItem.id);
			if (!existingItemIndex) {
				OPINIONS_STORE.push(newItem);
			}
		});
		OPINIONS_STORE = sortByDate(OPINIONS_STORE);
	} catch (error) {
		console.log(error);
	}
};

export { OPINIONS_STORE, initGetOpinionData };