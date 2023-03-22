import { getPlayers } from './utils.js';
const playerData = require('../src/player-stats.json');
const badges = require('../img/assets/badges_sprite.png');
const dropdown = require('../img/assets/dropdown_icon.png');

function dropDownCreate() {
	const statsContainer = getPlayers(playerData);
	const { players } = statsContainer;
	console.log('players', players);
	players.filter((player) => {
		const {
			player: {
				name: { first: firstName, last: lastName },
				id,
			},
		} = player;
		const name = `${firstName} ${lastName}`;
		const element = document.createElement('option');
		element.textContent = name;
		element.value = id;
		console.log('element', element);
	});
}
dropDownCreate();

function createImgElements() {
	const statsContainer = getPlayers(playerData);
	const { players } = statsContainer;
	players.filter((player) => {
		const {
			player: {
				name: { first: firstName, last: lastName },
				id,
			},
		} = player;
		const name = `${firstName} ${lastName}`;
		const element = document.createElement('img');
		element.className = 'card__img';
		element.src = `assets/p${id}.png`;
		console.log('element', element);
	});
}
createImgElements();