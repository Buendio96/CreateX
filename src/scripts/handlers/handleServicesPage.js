import serviceTitleImage from '@images/bg-image-service'
import image0 from '@images/services-0'
import image1 from '@images/services-1'
import image2 from '@images/services-2'
import image3 from '@images/services-3'
import { initGetRelatedData } from '@js-api/getProjectsData'
import STORE from '@js-store/store'
import createPortfolioCard from '@js-templates/portfolioCard'
import addBackground from '@js-utilities/addBackground'
import addServicesBackground from '@js-utilities/addServicesBg'
import carousel from '@js-utilities/carousel'
import sliderTemplate from '@p-temp/slider'
import '@s-pages/services'


const services = document.getElementById('services-serviceBlock')
const relatedServices = document.getElementById('related-serviceBlock')

addBackground('serviceTitleImage', serviceTitleImage)
if (services || relatedServices) {
	const targetElementsName = ['service-0', 'service-1', 'service-2', 'service-3']
	const imagesBlock = [image0, image1, image2, image3]
	addServicesBackground(targetElementsName, imagesBlock)
}
//======================================
const relatedProjectsContainer = document.getElementById('related-projects')

if (relatedProjectsContainer) {
	const dataType = relatedProjectsContainer.getAttribute('data-related-projects')
	await initGetRelatedData(dataType)

	const SERVICES_TEMPLATE_OPTIONS = {
		title: 'Related projects',
		id: 'related-projects',
		modClass: '',
	}

	const renderHTML = sliderTemplate(SERVICES_TEMPLATE_OPTIONS)
	relatedProjectsContainer.innerHTML = renderHTML

	const RELATED_PROJECTS_OPTIONS = {
		inputData: STORE.PROJECTS.relatedProjects[dataType],
		containerEl: document.getElementById('related-projects-container'),
		skipLeft: document.getElementById('related-projects-skip-left'),
		skipRight: document.getElementById('related-projects-skip-right'),
		cardTemplate: createPortfolioCard,
	}

	if (
		STORE.PROJECTS.relatedProjects[dataType] &&
		STORE.PROJECTS.relatedProjects[dataType].length > 0) {
		carousel(RELATED_PROJECTS_OPTIONS)
	} else {
		console.log('Related projects store store not found')
	}
}