const users = [
	{ name: 'Kings', premium: true },
	{ name: 'Chisom', premium: false },
	{ name: 'Chinaza', premium: true },
	{ name: 'Okechukwu', premium: true },
	{ name: 'Denzel', premium: false }
];

const getPremUsers = users => {
	return users.filter(user => user.premium);
};

const getPremUsers1 = users => {
	return users.filter(user => user.premium === false);
};
// const getNames = users => {
// 	return users.forEach(user => user.name);
// };

export { getPremUsers, getPremUsers1, users as default };
