import player from "@js-modules/videoPlayer";
import isValidate from '@js-modules/validator';
import bgImageServices from '@images/homepage-services';
import { PROJECTS_STORE, initGetFiltredData } from "@js-store/projectsStore";
import showCards from '@js-modules/renderCards'
//============================================================
const videoBox = document.getElementById('homepageVideoBox');
if (videoBox) player(videoBox);

//============================================================
const newForm = document.getElementById('questionForm');
const successEl = document.getElementById('questionSuccess');
const closeBtn = document.getElementById('questionClose');

if (newForm) isValidate(newForm, successEl, closeBtn);

//============================================================
const targetBlock = document.getElementById('ourServicesBg');
if (targetBlock && bgImageServices) targetBlock.src = bgImageServices;

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
	const serviceBox = document.getElementById(blockId);
	if (serviceBox) {
		serviceBox.src = bgImages[index];
	}
});
//============================================================
const todayIs = new Date();
await initGetFiltredData(todayIs, 6); //As the second argument can be the Number for the date range

const PARAMS = {
	array: PROJECTS_STORE.byDateProjects,
	containerElement: document.getElementById('our-work-container'),
	skipLeft: document.getElementById('our-work-go-left'),
	skipRight: document.getElementById('our-work-go-right'),
	/* quantityOfCards: 3 */  //This is an optional option to increase the output cards
};
showCards(PARAMS);




