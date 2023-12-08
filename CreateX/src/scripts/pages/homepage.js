import player from "@js-modules/videoPlayer";
import isValidate from '@js-modules/validator';
import addBackground from '@js-modules/addBackground';
import bgImageServices from '@images/homepage-services';
import bgImageSupport from '@images/homepage-support';
import { PROJECTS_STORE, initGetFiltredData } from "@js-store/projectsStore";
import { OPINIONS_STORE, initGetOpinionData } from "@js-store/opinionsStore";
import showCards from '@js-modules/renderCards'
import showOpinion from '@js-modules/showOpinion'
//============================================================
const videoBox = document.getElementById('homepageVideoBox');
if (videoBox && player) player(videoBox);
//============================================================
const newForm = document.getElementById('questionForm');
const successEl = document.getElementById('questionSuccess');
const closeBtn = document.getElementById('questionClose');

if (newForm) isValidate(newForm, successEl, closeBtn);
//============================================================
addBackground('ourServicesBg', bgImageServices);
addBackground('supportBoxBg', bgImageSupport);

const imageBlocks = [
	'service-one',
	'service-two',
	'service-three',
	'service-four'
];
const bgImages = [
	require('@images/home-serv-item-0'),
	require('@images/home-serv-item-1'),
	require('@images/home-serv-item-2'),
	require('@images/home-serv-item-3')
];
imageBlocks.forEach((blockId, index) => {
	addBackground(blockId, bgImages[index])
});

//============================================================
const todayIs = new Date();
await initGetFiltredData(todayIs); //As the second argument can be the Number for the date range

const WORK_PARAMS = {
	array: PROJECTS_STORE.byDateProjects,
	containerElement: document.getElementById('our-work-container'),
	skipLeft: document.getElementById('our-work-go-left'),
	skipRight: document.getElementById('our-work-go-right'),
	/* quantityOfCards: 3 */  //This is an optional option to increase the output cards
};
showCards(WORK_PARAMS);
//============================================================
await initGetOpinionData();
const opinionElement = document.getElementById('opinion')
showOpinion(opinionElement)


