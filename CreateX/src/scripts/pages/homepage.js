import bgImageServices from '@images/homepage-services'
import bgImageSupport from '@images/homepage-support'
import addBackground from '@js-modules/addBackground'
import showProgress from "@js-modules/progressRing"
import showNews from '@js-modules/showNews'
import { initShowOpinion, toLeft, toRight } from '@js-modules/showOpinion'
import showCards from '@js-modules/showPortfolio'
import isValidate from '@js-modules/validator'
import player from "@js-modules/videoPlayer"
import showComments from '@js-modules/showComments'
import { NEWS_STORE, initGetRecentNewsData } from "@js-store/newsStore"
import { OPINIONS_STORE, initGetOpinionData } from "@js-store/opinionsStore"
import { PROJECTS_STORE, initGetFilteredData } from "@js-store/projectsStore"
import '/src/createX.hbs'

//DATA ACQUISITION==========================================
const todayIs = new Date()
await initGetFilteredData(todayIs) //As the second argument can be the Number for the date range
await initGetOpinionData()
await initGetRecentNewsData() //The argument can be the number of news required(3 by default)
//BACKGROUND ADDITION========================================
addBackground('ourServicesBg', bgImageServices)
addBackground('supportBoxBg', bgImageSupport)


const imageBlocks = [
	'service-one',
	'service-two',
	'service-three',
	'service-four'
]
const bgImages = [
	require('@images/home-serv-item-0'),
	require('@images/home-serv-item-1'),
	require('@images/home-serv-item-2'),
	require('@images/home-serv-item-3')
]
imageBlocks.forEach((blockId, index) => {
	addBackground(blockId, bgImages[index])
})

//WE-ARE=====================================================
const videoBox = document.getElementById('homepageVideoBox')
if (videoBox && player) player(videoBox)
//OUR-CORE===================================================
const newForm = document.getElementById('questionForm')
const successEl = document.getElementById('questionSuccess')
const closeBtn = document.getElementById('questionClose')

if (newForm) isValidate(newForm, successEl, closeBtn)
//OUR-WORK===================================================
const PORTFOLIO_DOM_ELEMENTS = {
	array: PROJECTS_STORE.byDateProjects,
	containerElement: document.getElementById('our-work-container'),
	skipLeft: document.getElementById('our-work-go-left'),
	skipRight: document.getElementById('our-work-go-right'),
	/* quantityOfCards: 3 */  //This is an optional option to increase the output cards
}
if (PROJECTS_STORE.byDateProjects.length > 0) showCards(PORTFOLIO_DOM_ELEMENTS)
//SUPPORTED===================================================
const OPINION_DOM_ELEMENTS = {
	avatar: document.getElementById(`opinionBoxImg`),
	opinion: document.getElementById(`opinionText`),
	name: document.getElementById(`opinionUserName`),
	companyName: document.getElementById(`opinionUserJob`),
	workPositions: document.getElementById(`opinionUserPosition`),
}
if (OPINIONS_STORE.length > 0) {
	initShowOpinion(OPINION_DOM_ELEMENTS, OPINIONS_STORE)
	document.getElementById('opinionToLeft').addEventListener('click', () => toLeft(OPINION_DOM_ELEMENTS, OPINIONS_STORE))
	document.getElementById('opinionToRight').addEventListener('click', () => toRight(OPINION_DOM_ELEMENTS, OPINIONS_STORE))
}
//PROGRESS===================================================
const PROGRESS_EL = document.getElementById('progressBox')
const isElementInViewport = (element) => {
	const rect = element.getBoundingClientRect()
	return rect.top >= 0 && rect.bottom <= window.innerHeight
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
showNews(RECENT_EL, NEWS_STORE.recentNews)
const openCommentsButton = document.getElementById('openComments')
const commentsBlock = document.getElementById('commentsBlock')
console.log(openCommentsButton)
console.log(commentsBlock)
openCommentsButton.addEventListener('click', showComments(commentsBlock))