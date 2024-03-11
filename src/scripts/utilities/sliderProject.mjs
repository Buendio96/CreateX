
const initSliderProject = (mainImage, toLeft, toRight, imagesContainer) => {
	let counter = 1
	let newPath
	let blur = 4

	setBlurEffect(imagesContainer, mainImage, blur)

	if (imagesContainer) {
		imagesContainer.addEventListener('click', event => {
			newPath = getImagesPath(event)
			counter = getNumber(event)

			if (newPath !== null) {
				mainImage.src = newPath
				setBlurEffect(imagesContainer, mainImage, blur)
			}
		})
	}

	if (toLeft) {
		toLeft.addEventListener('click', () => {
			counter -= 1

			if (counter < 1) counter = 6
			updateMainImage(mainImage, counter)
			setBlurEffect(imagesContainer, mainImage, blur)
		})
	}

	if (toRight) {
		toRight.addEventListener('click', () => {
			counter += 1

			if (counter > 6) counter = 1
			updateMainImage(mainImage, counter)
			setBlurEffect(imagesContainer, mainImage, blur)
		})
	}
}

const updateMainImage = (mainImage, counter) => {
	const newImage = document.querySelector(`[data-numberOfImage="${counter}"]`)

	if (newImage) {
		mainImage.src = newImage.getAttribute('src')
	}
}


const getImagesPath = (event) => {
	if (!event || !event.target.closest('img')) {
		return null
	}
	var pathToImage = event.target.closest('img').getAttribute('src')
	return pathToImage
}

const getNumber = (event) => {
	if (!event || !event.target.closest('img')) {
		return null
	}
	var numberOfImage = event.target.closest('img').getAttribute('data-numberOfImage')
	return Number(numberOfImage)
}

const setBlurEffect = (container, mainImage, blurValue) => {
	let mainImageSrc = mainImage.src

	container.querySelectorAll('img').forEach(img => {
		img.style.filter = 'blur(0)'

		if (mainImageSrc !== img.src) {
			img.style.filter = `blur(${blurValue}px)`
		}
	})
}



export default initSliderProject