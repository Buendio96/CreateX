import homepageTitleImage from '@images/bg-image'
import bgImageServices from '@images/homepage-services'
import bgImageSupport from '@images/homepage-support'
import image0 from '@images/services-0'
import image1 from '@images/services-1'
import image2 from '@images/services-2'
import image3 from '@images/services-3'
import initGetRecentNewsData from "@js-api/getNewsData"
import initGetOpinionData from "@js-api/getOpinionsData"
import initGetFilteredData from "@js-api/getProjectsData"
import STORE from '@js-store/store'
import createPortfolioCard from '@js-templates/portfolioCard'
import addBackground from '@js-utilities/addBackground'
import addServicesBackground from '@js-utilities/addServicesBg'
import showProgress from "@js-utilities/progressRing"
import showNews from '@js-utilities/showNews'
import { initShowOpinion, toLeft, toRight } from '@js-utilities/showOpinion'
import toggleProjectsCards from '@js-utilities/toggleCards'
import isValidate from '@js-utilities/validator'
import player from "@js-utilities/videoPlayer"
import sliderTemplate from '@p-temp/slider'
import '@s-pages/homepage'

//DATA ACQUISITION==========================================
const TODAY = new Date()
await initGetFilteredData(TODAY, 4) //As the second argument can be the Number for the date range
await initGetOpinionData()
await initGetRecentNewsData() //The argument can be the number of news required(3 by default)
//BACKGROUND ADDITION========================================
const homepageServices = document.getElementById('homepage-serviceBlock')
addBackground('titleImage', homepageTitleImage)
addBackground('ourServicesBg', bgImageServices)
addBackground('supportBoxBg', bgImageSupport)


if (homepageServices) {
	const targetElementsName = ['service-0', 'service-1', 'service-2', 'service-3']
	const imagesBlock = [image0, image1, image2, image3]
	addServicesBackground(targetElementsName, imagesBlock)
}
//WE-ARE=====================================================
const videoBox = document.getElementById('homepageVideoBox')
if (videoBox && player) player(videoBox)
//OUR-CORE===================================================
const newForm = document.getElementById('questionForm')
const successEl = document.getElementById('questionSuccess')
const closeBtn = document.getElementById('questionClose')

if (newForm) isValidate(newForm, successEl, closeBtn)
//OUR-WORK===================================================
const HOMEPAGE_TEMPLATE_OPTION = {
	title: 'Browse our selected projects and learn more about our work',
	id: 'selected-projects',
	modClass: ''
}
const selectedProjectsContainer = document.getElementById('selected-projects')
if (selectedProjectsContainer) {
	const renderHTML = sliderTemplate(HOMEPAGE_TEMPLATE_OPTION)
	selectedProjectsContainer.innerHTML = renderHTML
} else {
	console.log('--selectedProjectsContainer-- not found')
}

const SELECTED_PROJECTS_OPTIONS = {
	inputData: STORE.PROJECTS.byDateProjects,
	containerEl: document.getElementById('selected-projects-container'),
	skipLeft: document.getElementById('selected-projects-skip-left'),
	skipRight: document.getElementById('selected-projects-skip-right'),
	cardTemplate: createPortfolioCard,
}
if (STORE.PROJECTS.byDateProjects && STORE.PROJECTS.byDateProjects.length > 0) {
	toggleProjectsCards(SELECTED_PROJECTS_OPTIONS)
} else {
	console.log('Projects store not found')
}
//SUPPORTED===================================================
const OPINION_DOM_ELEMENTS = {
	avatar: document.getElementById(`opinionBoxImg`),
	opinion: document.getElementById(`opinionText`),
	name: document.getElementById(`opinionUserName`),
	companyName: document.getElementById(`opinionUserJob`),
	workPositions: document.getElementById(`opinionUserPosition`),
}
if (STORE.OPINIONS.length > 0) {
	initShowOpinion(OPINION_DOM_ELEMENTS, STORE.OPINIONS)
	document.getElementById('opinionToLeft').addEventListener('click', () => toLeft(OPINION_DOM_ELEMENTS, STORE.OPINIONS))
	document.getElementById('opinionToRight').addEventListener('click', () => toRight(OPINION_DOM_ELEMENTS, STORE.OPINIONS))
}
//PROGRESS===================================================
const PROGRESS_EL = document.getElementById('progressBox')
const isElementInViewport = (element) => {
	if (element) {
		const rect = element.getBoundingClientRect()
		return rect.top >= 0 && rect.bottom <= window.innerHeight
	}
}
const handleScroll = () => {
	if (isElementInViewport(PROGRESS_EL)) {
		setTimeout(() => {
			showProgress(document.getElementById('progressRingClients'), 98)
			showProgress(document.getElementById('progressRingExp'), 75)
			showProgress(document.getElementById('progressRingHours'), 82)
			showProgress(document.getElementById('progressRingProjects'), 100)
		}, 500)
	};
}
window.addEventListener('scroll', handleScroll)

//RECENT NEWS===================================================
const RECENT_EL = document.getElementById('recentBox')
if (RECENT_EL) showNews(RECENT_EL, STORE.NEWS.recentNews)

const showCommentsButton = document.querySelectorAll('#showComments')

if (showCommentsButton) {
	showCommentsButton.forEach(button => {
		button.addEventListener('click', () => {
			const parentBlock = button.closest('.news-card')
			const commentsBlock = parentBlock.querySelector('.news-card__comments-box')
			if (commentsBlock) commentsBlock.classList.toggle('showComments')
		})
	})
} 