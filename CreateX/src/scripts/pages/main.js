import title from '@images/bg-image'
import '@js-api/scrollHandler'
import addBackground from '@js-modules/addBackground'
import addServicesBackground from '@js-modules/addServicesBg'
import '@js-modules/scrollToTop'
import '@js-store/projectsStore'
import '@js-templates/discuss'
import '@js-templates/header'
import '@styles/createX'
const imageBlocks = [
	'service-one',
	'service-two',
	'service-three',
	'service-four'
]
addServicesBackground(imageBlocks, addBackground)
addBackground('titleImage', title)




