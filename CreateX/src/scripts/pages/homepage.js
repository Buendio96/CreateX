import player from "@js-modules/videoPlayer";
import isValidate from '@js-modules/validator';

const videoBox = document.getElementById('homepageVideoBox');
player(videoBox);

const newForm = document.getElementById('questionForm');
const successEl = document.getElementById('questionSuccess');
const closeBtn = document.getElementById('questionClose');

isValidate(newForm, successEl, closeBtn);