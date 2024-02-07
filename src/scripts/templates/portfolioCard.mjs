const createPortfolioCard = (item) => {
	const htmlString = `
	  <div class="portfolio-card card">
		<div class="portfolio-card__img">
		  <img class="image-adaptive" src="assets/static-images/portfolio/${item.imageName}" alt="The picture with ${item.name}">
		</div>
		<div class="portfolio-card__box">
		  <h3 class="portfolio-card__box-title">
			${item.name}
		  </h3>
		  <h3 class="portfolio-card__box-subtitle">
			${item.description}
		  </h3>
		  <a href="#" class="portfolio-card__box-btn outline-regular-btn">
			View Project
		  </a>
		</div>
	  </div>
	`

	const tempContainer = document.createElement('div')
	tempContainer.innerHTML = htmlString

	return tempContainer.firstElementChild
}

export default createPortfolioCard 