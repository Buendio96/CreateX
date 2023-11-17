const showError = (input) => {
	input.classList.add('error__box');
	input.parentElement.classList.add('error');
};
const hideError = (input) => {
	input.classList.remove('error__box');
	input.parentElement.classList.remove('error');
};

function regexCheck(field) {
	const value = field.value.trim();
	const dataType = field.getAttribute('data-typecheck');
	const regexPatterns = {
		'letters': /^[a-zA-Z]+$/,
		'numbers': /^[+]?\d+$/,
		'email': /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	};
	return regexPatterns[dataType] ? regexPatterns[dataType].test(value) : true;
}

const emptyFieldsCheck = (field) => {
	const value = field.value.trim();
	if (value === '') {
		return false;
	} else {
		return true
	}
};

const isValidate = (form) => {
	const requiredInputs = form.querySelectorAll('[data-required="true"]');
	const regexInputs = form.querySelectorAll('[data-typecheck]');
	const checkboxEl = form.querySelector('input[type="checkbox"]');

	regexInputs.forEach(field => {
		field.addEventListener('input', () => {
			if (field.value.trim() === '' || regexCheck(field)) {
				hideError(field);
			} else {
				showError(field);
			}
		});
	});
	checkboxEl.addEventListener('change', () => {
		hideError(checkboxEl);
	});
	form.addEventListener('submit', e => {
		e.preventDefault();
		const testCheckbox = () => {
			if (checkboxEl.checked) {
				hideError(checkboxEl);
				return true
			} else {
				showError(checkboxEl);
				return false
			}
		}
		const testRequired = () => {
			let result = true;
			Array.from(requiredInputs).forEach(field => {
				if (emptyFieldsCheck(field)) {
					hideError(field);
				} else {
					showError(field);
					result = false;
				}
			});
			return result;
		};
		if (testRequired() && testCheckbox()) {
			alert('Please expect our consultant to contact you shortly')
			form.reset()
		}
		else alert('Something is wrong, please check all fields with the data and try again. If the error occurs again, please contact our consultant using the contacts at the top of the page')
	})


}
export default isValidate;
