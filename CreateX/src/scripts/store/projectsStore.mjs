import fetchData from '@js-api/getData';
import { YYYY_MM_DD, filterByDate } from '@js-modules/filterByDate';


const PROJECTS_STORE = {
	allProjects: [],
	byDateProjects: []
};

const initGetData = async (from, to = 3) => {
	try {
		if (filterByDate !== undefined) {
			const FROM_DATE = YYYY_MM_DD(from);
			const TO_DATE = filterByDate(to);
			const PROJECTS_API = `http://localhost:4100/projects?date_gte=${TO_DATE}&date_lte=${FROM_DATE}`;
			const DATA = await fetchData(PROJECTS_API);
			PROJECTS_STORE.byDateProjects = DATA;
		};
	} catch (error) {
		console.log(error)
	}
};

export { PROJECTS_STORE, initGetData };