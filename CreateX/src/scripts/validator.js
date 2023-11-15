
const showError = (input) => {
	input.classList.add('error__box');
	input.parentElement.classList.add('error');
}
const hideError = (input) => {
	input.classList.remove('error__box');
	input.parentElement.classList.remove('error');
}

function regexCheck(fields) {
	for (let fild of fields) {
		if (fild.value !== "") {
			fild.addEventListener('input', () => {
				hideError(fild);
			});
			const value = fild.value.trim()
			const dataType = fild.getAttribute('data-typecheck');
			switch (dataType) {
				case 'letters':
					if (!/^[a-zA-Z]+$/.test(value)) {
						showError(fild);
						return false;
					}
					break;
				case 'numbers':
					if (!/^[+]?\d+$/.test(value)) {
						showError(fild);
						return false;
					}
					break;
				case 'email':
					if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
						showError(fild);
						return false;
					}
					break;
				default:
					hideError(input);
					return true;
			}
		}
	}
	return true
}
const emptyFields = (fields) => {
	let result = true;
	for (let fild of fields) {
		fild.addEventListener('input', () => {
			hideError(fild);
		});
		if (fild.value.trim() === '') {
			showError(fild);
			result = false;
		}
	}
	return result;
}

const checkbox = (input) => {
	input.addEventListener('input', () => {
		hideError(input);
	});
	input.checked ? hideError(input) : showError(input)
}
const isValidate = (form, dataType) => {
	form.addEventListener('submit', e => {
		e.preventDefault();
		const requiredInputs = form.querySelectorAll(`[data-${dataType}="true"]`);
		const regexInputs = form.querySelectorAll('[data-typecheck]')
		const checkboxEl = form.querySelector('input[type="checkbox"]');
		checkbox(checkboxEl)
		if (emptyFields(requiredInputs) && regexCheck(regexInputs))
			alert('Ok!')
	});
}

export default isValidate;

//Finish style and logics in validator