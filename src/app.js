import {
	loadJSON,
	getStatValueByName,
	calculatePassesPerMinute,
	calculateGoalsPerMatch,
	createImgElement,
} from './utils.js';

const playerStatsUrl = '../src/player-stats.json';
const playerSelector = document.getElementById('player-select');
const playerName = document.querySelector('.stats-card-title');
const playerPosition = document.querySelector('.stats-card-subtitle');
const apperances = document.getElementById('appearances');
const goals = document.getElementById('goals');
const assists = document.getElementById('assists');
const goalsPerMatch = document.getElementById('goalsPerMatch');
const assistsPerMatch = document.getElementById('passes');

loadJSON(playerStatsUrl)
	.then((response) => {
		createPlayerDropdown(response);
		playerSelector.addEventListener('change', () => {
			const playerId = parseInt(playerSelector.value);
			const selectedPlayer = response.find((player) => player.player.id === playerId);
			updatePlayerStats(selectedPlayer);
			createImgElement(response, playerId);
		});
	})
	.catch((err) => {
		console.error('Error fetching JSON: ', err);
	});

function createPlayerDropdown(players) {
	players.forEach((player) => {
		const {
			player: {
				name: { first, last },
				id,
			},
		} = player;
		const name = `${first} ${last}`;
		const option = document.createElement('option');
		option.textContent = name;
		option.value = id;
		playerSelector.appendChild(option);
	});
}

function updatePlayerStats(player) {
	const {
		player: {
			name: { first, last },
			info: { positionInfo },
		},
		stats,
	} = player;

	playerName.textContent = `${first} ${last}`;
	playerPosition.textContent = positionInfo;
	apperances.textContent = `${getStatValueByName(stats, 'appearances')}`;
	goals.textContent = `${getStatValueByName(stats, 'goals')}`;
	assists.textContent = `${getStatValueByName(stats, 'goal_assist')}`;
	goalsPerMatch.textContent = `${calculateGoalsPerMatch(stats)}`;
	assistsPerMatch.textContent = `${calculatePassesPerMinute(stats)}`;
}
