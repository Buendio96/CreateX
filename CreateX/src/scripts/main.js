import homepageTitleImage from '@images/bg-image'
import serviceTitleImage from '@images/bg-image-service'
import '@js-api/scrollHandler'
import addBackground from '@js-modules/addBackground'
import addServicesBackground from '@js-modules/addServicesBg'
import '@js-modules/scrollToTop'
import '@js-store/projectsStore'
import '@js-templates/discuss'
import '@js-templates/header'
import '@styles/createX'
//========================================================
//========================================================
addBackground('titleImage', homepageTitleImage)
addBackground('serviceTitleImage', serviceTitleImage)

const firstServicesBlock = document.getElementById('homepage-serviceBlock')
const secondServicesBlock = document.getElementById('services-serviceBlock')
if ((firstServicesBlock || secondServicesBlock) !== null) {
	const imageBlocks = [
		'service-one',
		'service-two',
		'service-three',
		'service-four'
	]
	addServicesBackground(imageBlocks, addBackground)
}