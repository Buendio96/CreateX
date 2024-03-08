const addBackground = (idOfElement, imageEl) => {
	const targetElement = document.getElementById(`${idOfElement}`)
	if (targetElement && imageEl) targetElement.src = imageEl
}

export default addBackground
