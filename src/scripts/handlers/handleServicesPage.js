import serviceTitleImage from '@images/bg-image-service'
import image0 from '@images/services-0'
import image1 from '@images/services-1'
import image2 from '@images/services-2'
import image3 from '@images/services-3'
import addBackground from '@js-utilities/addBackground'
import addServicesBackground from '@js-utilities/addServicesBg'
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
const SERVICES_TEMPLATE_OPTION = {
	title: 'Related projects',
	id: 'related-projects',
	modClass: null,
}

const relatedProjectsContainer = document.getElementById('related-projects')
if (relatedProjectsContainer) {
	const dataType = relatedProjectsContainer.getAttribute('data-related-projects')
	const renderHTML = sliderTemplate(SERVICES_TEMPLATE_OPTION)
	relatedProjectsContainer.innerHTML = renderHTML
}
