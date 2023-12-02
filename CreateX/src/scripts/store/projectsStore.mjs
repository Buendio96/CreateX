import fetchData from '@js-api/getData';
import { YYYY_MM_DD, filterByDate } from '@js-modules/filterByDate';


const PROJECTS_STORE = {
	allProjects: [],
	byDateProjects: []
};

if (filterByDate !== undefined) {
	const todayIs = new Date();
	const FROM_DATE = YYYY_MM_DD(todayIs);
	const TO_DATE = filterByDate();
	const PROJECTS_API = `http://localhost:4100/projects?date_gte=${TO_DATE}&date_lte=${FROM_DATE}`;
	PROJECTS_STORE.byDateProjects = await fetchData(PROJECTS_API);
}





