import { initGetRelatedData } from '@js-api/getProjectsData'
import STORE from '@js-store/store'
import createPortfolioCard from '@js-templates/portfolioCard'
import carousel from '@js-utilities/carousel'
import sliderTemplate from '@p-temp/slider'


const similarProjectsContainer = document.getElementById('similar-projects')

if (similarProjectsContainer) {
	const dataType = similarProjectsContainer.getAttribute('data-similar-projects')
	await initGetRelatedData(dataType)

	const SERVICES_TEMPLATE_OPTIONS = {
		title: 'Similar projects',
		id: 'similar-projects',
		modClass: '',
	}

	const renderHTML = sliderTemplate(SERVICES_TEMPLATE_OPTIONS)
	similarProjectsContainer.innerHTML = renderHTML

	const RELATED_PROJECTS_OPTIONS = {
		inputData: STORE.PROJECTS.relatedProjects[dataType],
		containerEl: document.getElementById('similar-projects-container'),
		skipLeft: document.getElementById('similar-projects-skip-left'),
		skipRight: document.getElementById('similar-projects-skip-right'),
		cardTemplate: createPortfolioCard,
	}

	if (
		STORE.PROJECTS.relatedProjects[dataType] &&
		STORE.PROJECTS.relatedProjects[dataType].length > 0) {
		carousel(RELATED_PROJECTS_OPTIONS)
	} else {
		console.log('Similar projects store not found')
	}
}