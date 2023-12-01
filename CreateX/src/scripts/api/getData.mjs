const fetchData = async (apiUrl, method = 'GET', data = null) => {
	const options = {
		method,
		headers: {
			'Conent-Type': 'applications/json'
		}
	};
	if (method === 'POST' && data) {
		options.body = JSON.stringify(data);
	}
	try {
		const response = await fetch(apiUrl, options);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export default fetchData;