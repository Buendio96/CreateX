import workTitleImage from '@images/bg-image-work'
import bgImageOpinion from '@images/homepage-support'
import initGetOpinionData from "@js-api/getOpinionsData"
import { initGetAllData } from '@js-api/getProjectsData'
import STORE from '@js-store/store'
import createPortfolioCard from '@js-templates/portfolioCard'
import addBackground from '@js-utilities/addBackground'
import { initShowOpinion, toLeft, toRight } from '@js-utilities/showOpinion'
import showProjects from '@js-utilities/showProjects'
import '@s-pages/work'
//===================================================
await initGetOpinionData()
await initGetAllData()
console.log(STORE.PROJECTS.allProjects)
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
const ALL_PROJECTS = STORE.PROJECTS.allProjects

if (ALL_PROJECTS.length > 0 && CONTAINER_EL) {
	showProjects(CONTAINER_EL, ALL_PROJECTS, SHOW_MORE_BUTTON, createPortfolioCard)
} else {
	console.log('Projects data not found. \n', 'data:', STORE.PROJECTS.allProjects, '\n Container:', CONTAINER_EL)
}