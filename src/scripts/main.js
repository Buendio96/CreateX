import homepageTitleImage from '@images/bg-image'
import serviceTitleImage from '@images/bg-image-service'
import image0 from '@images/services-0'
import image1 from '@images/services-1'
import image2 from '@images/services-2'
import image3 from '@images/services-3'
import '@js-templates/discuss'
import '@js-templates/header'
import addBackground from '@js-utilities/addBackground'
import addServicesBackground from '@js-utilities/addServicesBg'
import '@js-utilities/scrollHandler'
import '@js-utilities/scrollToTop'
import '@styles/createX'
//========================================================
//========================================================
addBackground('titleImage', homepageTitleImage)
addBackground('serviceTitleImage', serviceTitleImage)

const firstServiceBlock = document.getElementById('homepage-serviceBlock')
const secondServiceBlock = document.getElementById('services-serviceBlock')
if ((firstServiceBlock || secondServiceBlock) !== null) {
	const targetElementsName = ['service-0', 'service-1', 'service-2', 'service-3']
	const imagesBlock = [image0, image1, image2, image3]
	addServicesBackground(targetElementsName, imagesBlock)
}