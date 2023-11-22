const playAndPause = (videoElement) => {
	videoElement.paused ? videoElement.play() : videoElement.pause();

};

const volumeMute = (videoElement) => {
	videoElement.muted = !videoElement.muted;
};

const volumeLvl = (videoElement, volumeControl) => {
	let v = volumeControl.value;
	videoElement.volume = v / 100;
};

const progress = (videoElement, progressControl) => {
	videoElement.addEventListener('timeupdate', () => {
		let d = videoElement.duration;
		let c = videoElement.currentTime;
		progressControl.value = (100 * c) / d;
	});
};

const rewide = (videoElement, progressControl, event) => {
	let w = progressControl.offsetWidth;
	let o = event.offsetX;
	progressControl.value = (100 * o) / w;
	videoElement.currentTime = videoElement.duration * (o / w);
};

const errorMessage = (elementName) => {
	console.error(`${elementName} isn't found`);
	alert('Something went wrong');
};

const setFunction = (control, func, targetElement) => {
	if (!control) {
		console.error(`${targetElement.id} - control not found`);
	} else {
		control.addEventListener('change' in control ? 'change' : 'click', (e) => {
			func(targetElement, control, e);
		});
	}
};

const player = (box) => {
	const videoElement = box.querySelector(`#${box.id}-video`);

	if (!videoElement) {
		errorMessage(`${box.id}-video`);
	} else {
		const playControl = box.querySelector(`#${box.id}-play`);
		const progressControl = box.querySelector(`#${box.id}-progress`);
		const muteControl = box.querySelector(`#${box.id}-mute`);
		const volumeControl = box.querySelector(`#${box.id}-volume`);

		setFunction(playControl, playAndPause, videoElement);
		setFunction(muteControl, volumeMute, videoElement);
		setFunction(volumeControl, volumeLvl, videoElement);
		setFunction(progressControl, rewide, videoElement);
		progress(videoElement, progressControl);
	}
};

export default player;
