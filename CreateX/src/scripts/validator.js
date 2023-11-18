
//Error toggle
const showError = (input) => {
	input.classList.add('error__box');
	input.parentElement.classList.add('error');
};
const hideError = (input) => {
	input.classList.remove('error__box');
	input.parentElement.classList.remove('error');
};

//Helped function
const convertToText = (field) => {
	if (field)
		return field.value.trim()
	else console.log('Field not found')
};
const clearElements = (element) => {
	element.addEventListener('change', () => {
		hideError(element)
	})
};
const regexCheck = (field, dataType) => {
	const regexPatterns = {
		'letters': /^[a-zA-Z\s]+$/,
		'numbers': /^[+]?\d+$/,
		'email': /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	};
	return regexPatterns[dataType] ? regexPatterns[dataType].test(convertToText(field)) : true;
};
const emptyFieldsCheck = (field) => {
	if (convertToText(field) === '') {
		return false;
	} else {
		return true
	}
};

//Main function
const checkRegexInputs = (fields) => {
	fields.forEach(field => {
		field.addEventListener('change', () => {
			if (convertToText(field) === ''
				|| regexCheck(field, field.getAttribute('data-typecheck'))
			) {
				hideError(field);
			} else {
				showError(field);
			}
		});
	});
};
const checkRequiredInputs = (fields) => {
	let result = true;
	fields.forEach(field => {
		if (emptyFieldsCheck(field)) {
			hideError(field);
		} else {
			showError(field);
			result = false;
		}
	});
	console.log(result)
	return result;
};
const checkCheckbox = (element) => {
	let result = true;
	if (element.checked) {
		hideError(element)
	} else {
		showError(element);
		result = false;
	};
	console.log(result)

	return result;
};

//Init function
const isValidate = (form, successBlock, closeButton) => {
	const requiredInputs = form.querySelectorAll('[data-required="true"]');
	const regexInputs = form.querySelectorAll('[data-typecheck]');
	const checkboxEl = form.querySelector('input[type="checkbox"]');
	checkRegexInputs(regexInputs)
	clearElements(checkboxEl)
	form.addEventListener('submit', e => {
		e.preventDefault();
		requiredInputs.forEach(field => {
			clearElements(field)
		})
		checkCheckbox(checkboxEl)
		checkRequiredInputs(requiredInputs)
		checkRegexInputs(regexInputs)
		if (checkRequiredInputs(requiredInputs) && checkCheckbox(checkboxEl)) {
			successBlock.style.display = 'flex';
			closeButton.addEventListener('click', () => {
				successBlock.style.display = 'none';
			});
			form.reset()
		};
	});
};


export default isValidate;
