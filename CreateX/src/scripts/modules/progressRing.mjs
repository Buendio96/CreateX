import keyframeProgressBar from '@js-templates/progressFrame'

const style = new CSSStyleSheet()
document.adoptedStyleSheets = [style]

const showProgress = (element, to) => {
	if (element) {
		const radius = element.r.baseVal.value
		const circumference = 2 * Math.PI * radius
		const toPercent = circumference / 100 * to

		const keyframeRule = keyframeProgressBar(element.id, circumference, toPercent)
		style.insertRule(keyframeRule)

		element.style.strokeDasharray = `${circumference} ${circumference}`
		element.style.animation = `draw-${element.id} 2s ease forwards`
	}
}

export default showProgress