export const getPlayers = (url) => {
	try {
		const response = url;
		if (!response) {
			throw new Error('Something went wrong');
		}
		return response;
	} catch (error) {
		console.error(`error ${error}`);
	}
};
