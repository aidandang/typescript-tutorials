export const dateStringToDate = (dataString: string): Date => {
	// 28/10/2018
	const dateParts = dataString.split('/').map((value: string): number => {
		return parseInt(value);
	});

	return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
