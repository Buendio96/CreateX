import { MM_DD_YYYY } from '@js-modules/dateFormatter'

const dateToStroke = (date) => MM_DD_YYYY(new Date(date))


const createComment = (comment) => {
	const htmlComment = `<div class="comment">
					<div class="comment__image">
						<img src="assets/static-images/opinion/${comment.imageName}.png"class="image-adaptive" alt="User Photo">
					</div>
					<div class="comment__info">
						<h4 class="comment__info-name">${comment.name}</h4>
						<p class="comment__info-text">${comment.text}</p>
						<h4 class="comment__info-date">${dateToStroke(comment.date)}</h4>
					</div>
				</div>`
	return htmlComment
}

const createCommentsBlock = (comments = []) => {
	let commentsHTML = ''

	comments.forEach(comment => {
		commentsHTML += createComment(comment)
	})

	const htmlCommentsBlock = `
		<div id="commentsBlock" class="news-card__comments-box">
			${commentsHTML}
		</div>`

	return htmlCommentsBlock
}

export default createCommentsBlock