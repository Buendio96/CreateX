import Handlebars from 'handlebars';

const source = `
  <div class="portfolio-card">
    <div class="portfolio-card__img">
      <img class="image-adaptive" src="assets/{{imageName}}" alt="The picture with {{name}}">
    </div>
    <div class="portfolio-card__box">
      <h3 class="portfolio-card__box-title">
        {{name}}
      </h3>
      <h3 class="portfolio-card__box-subtitle">
        {{description}}
      </h3>
      <a href="#" class="portfolio-card__box-btn outline-regular-btn">
        View Project
      </a>
    </div>
  </div>
`;

const template = Handlebars.compile(source);

export const createCardNode = (item) => {
	const html = template(item);
	const tempContainer = document.createElement('div');
	tempContainer.innerHTML = html;
	return tempContainer.firstElementChild;
};
