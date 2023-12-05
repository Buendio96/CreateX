import player from "@js-modules/videoPlayer";
import isValidate from '@js-modules/validator';
import bgImageServices from '@images/homepage-services';
import { PROJECTS_STORE, initGetData } from "@js-store/projectsStore";
import Handlebars from "handlebars";
import { createCardNode } from '@js-templates/work-item'
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
const containerElement = document.getElementById('our-work-container');
const todayIs = new Date();
await initGetData(todayIs); //As the second argument can be the Number for the date range

const data = {
	name: "dasd",
	description: "asdas"
}

const FILTRED_STORE = PROJECTS_STORE.byDateProjects

FILTRED_STORE.forEach(item => {
	const card = createCardNode(item);
	console.log(card)
	containerElement.appendChild(card)
})

console.log(FILTRED_STORE)