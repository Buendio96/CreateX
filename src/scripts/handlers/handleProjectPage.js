import { initGetRelatedData } from '@js-api/getProjectsData'
import STORE from '@js-store/store'
import createPortfolioCard from '@js-templates/portfolioCard'
import carousel from '@js-utilities/carousel'
import initGetQueryParams from '@js-utilities/getQueryParams'
import initShowSelectedProject from '@js-utilities/showSelectedProject'
import initSliderProject from '@js-utilities/sliderProject'
import sliderTemplate from '@p-temp/slider'
import '@s-pages/project'

const PROJECT_ID = initGetQueryParams('id')
const containerElement = document.getElementById('selected-project')
const similarProjectsContainer = document.getElementById('similar-projects')

const dataType = await initShowSelectedProject(PROJECT_ID, containerElement)

if (similarProjectsContainer) {
	await initGetRelatedData(dataType)

	const SERVICES_TEMPLATE_OPTIONS = {
		title: 'Similar projects',
		id: 'similar-projects',
		modClass: '',
	}

	const renderHTML = sliderTemplate(SERVICES_TEMPLATE_OPTIONS)
	similarProjectsContainer.innerHTML = renderHTML
}
if (STORE.PROJECTS.relatedProjects && STORE.PROJECTS.relatedProjects.length > 0) {

	const RELATED_PROJECTS_OPTIONS = {
		inputData: STORE.PROJECTS.relatedProjects,
		containerEl: document.getElementById('similar-projects-container'),
		skipLeft: document.getElementById('similar-projects-skip-left'),
		skipRight: document.getElementById('similar-projects-skip-right'),
		cardTemplate: createPortfolioCard,
	}

	carousel(RELATED_PROJECTS_OPTIONS)
}

const mainImage = document.getElementById('project-main-image')
const imagesContainer = document.getElementById('project-secondary-image')
const swapLeft = document.getElementById('project-swap-left')
const swapRight = document.getElementById('project-swap-right')

initSliderProject(mainImage, swapLeft, swapRight, imagesContainer)
