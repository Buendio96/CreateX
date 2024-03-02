import workTitleImage from '@images/bg-image-work'
import bgImageOpinion from '@images/homepage-support'
import initGetOpinionData from "@js-api/getOpinionsData"
import STORE from '@js-store/store'
import addBackground from '@js-utilities/addBackground'
import { initShowOpinion, toLeft, toRight } from '@js-utilities/showOpinion'
import initShowProjects from '@js-utilities/showProjects'
import '@s-pages/work'
//===================================================
await initGetOpinionData()

//===================================================
addBackground('workTitleImage', workTitleImage)
addBackground('supportBoxBg', bgImageOpinion)

const OPINION_EL = document.getElementById(`opinion`)
const OPINION_DOM_ELEMENTS = {
	avatar: document.getElementById(`opinionBoxImg`),
	opinion: document.getElementById(`opinionText`),
	name: document.getElementById(`opinionUserName`),
	companyName: document.getElementById(`opinionUserJob`),
	workPositions: document.getElementById(`opinionUserPosition`),
}
if (STORE.OPINIONS.length > 0 && OPINION_EL) {
	initShowOpinion(OPINION_DOM_ELEMENTS, STORE.OPINIONS)
	document.getElementById('opinionToLeft').addEventListener('click', () => toLeft(OPINION_DOM_ELEMENTS, STORE.OPINIONS))
	document.getElementById('opinionToRight').addEventListener('click', () => toRight(OPINION_DOM_ELEMENTS, STORE.OPINIONS))
} else {
	OPINION_EL.style.display = 'none'
	console.log('Opinion DOM Element or Data opinions nor found')
}
//===================================================
const CONTAINER_EL = document.getElementById('all-projects-container')
const SHOW_MORE_BUTTON = document.getElementById('show-more-projects')
const FILTERS_BOX = document.getElementById('projects-filter')

initShowProjects(CONTAINER_EL, SHOW_MORE_BUTTON, FILTERS_BOX)
//===================================================



