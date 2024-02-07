
const keyframeProgressBar = (id, from, to) => {
	return `
	@keyframes draw-${id} {
		from {
			stroke-dashoffset: ${from}px;
		}
		to {
			stroke-dashoffset: calc(${from}px - ${to}px);
		}
	}
`};

export default keyframeProgressBar;