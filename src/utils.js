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

// const playerList = document.querySelector('.player-list');
// const statsCard = document.querySelector('.stats-card');
// const playerName = document.querySelector('.stats-card__title');
// const playerImage = document.querySelector('.stats-card__image');
// const goals = document.querySelector('.stats-card__value--goals');
// const assists = document.querySelector('.stats-card__value--assists');
// const gamesPlayed = document.querySelector('.stats-card__value--games-played');

// playerList.addEventListener('click', function (event) {
// 	if (event.target.tagName === 'LI') {
// 		// get player data from data attributes
// 		const playerData = event.target.dataset;

// 		// update stats card with player data
// 		playerName.textContent = playerData.name;
// 		playerImage.src = playerData.image;
// 		goals.textContent = playerData.goals;
// 		assists.textContent = playerData.assists;
// 		gamesPlayed.textContent = playerData.gamesPlayed;
// 	}
// });

// const playerSelect = document.getElementById('player-select');
// const points = document.getElementById('points');
// const assists = document.getElementById('assists');
// const rebounds = document.getElementById('rebounds');

// playerSelect.addEventListener('change', function () {
// 	const selectedPlayer = playerSelect.value;
// 	// You would replace the following code with your own code to retrieve the player's stats from a database or API
// 	if (selectedPlayer === 'player1') {
// 		points.innerText = '20';
// 		assists.innerText = '5';
// 		rebounds.innerText = '10';
// 	} else if (selectedPlayer === 'player2') {
// 		points.innerText = '15';
// 		assists.innerText = '8';
// 		rebounds.innerText = '7';
// 	} else if (selectedPlayer === 'player3') {
// 		points.innerText = '25';
// 		assists.innerText = '3';
// 		rebounds.innerText = '12';
// 	} else {
// 		points.innerText = '';
// 		assists.innerText = '';
// 		rebounds.innerText = '';
// 	}
// });

const playerSelect = document.getElementById('player-select');
const statsCard = document.getElementById('stats-card');
const playerName = document.getElementById('player-name');
const playerImage = document.getElementById('player-image');
const playerPoints = document.getElementById('player-points');
const playerAssists = document.getElementById('player-assists');
const playerRebounds = document.getElementById('player-rebounds');

const players = {
	'lebron-james': {
		name: 'LeBron James',
		image: 'lebron-james.jpg',
		points: 27.3,
		assists: 7.4,
		rebounds: 8.2,
	},
	'stephen-curry': {
		name: 'Stephen Curry',
		image: 'stephen-curry.jpg',
		points: 30.4,
		assists: 5.8,
		rebounds: 5.5,
	},
	'kevin-durant': {
		name: 'Kevin Durant',
		image: 'kevin-durant.jpg',
		points: 28.3,
		assists: 5.0,
		rebounds: 7.1,
	},
};

function updateStatsCard() {
	const selectedPlayer = players[playerSelect.value];
	playerName.innerText = selectedPlayer.name;
	playerImage.src = selectedPlayer.image;
	playerPoints.innerText = selectedPlayer.points;
	playerAssists.innerText = selectedPlayer.assists;
	playerRebounds.innerText = selectedPlayer.rebounds;
}

// function updateStatsCard() {
// 	const playerSelect = document.getElementById('player-select');
// 	const selectedPlayer = players.find((player) => player.name === playerSelect.value);
// 	document.getElementById('goals').textContent = selectedPlayer.stats.goals;
// 	document.getElementById('assists').textContent = selectedPlayer.stats.assists;
// 	document.getElementById('yellow-cards').textContent = selectedPlayer.stats.yellowCards;
// 	document.getElementById('red-cards').textContent = selectedPlayer.stats.redCards;
// }

playerSelect.addEventListener('change', updateStatsCard);
// document.getElementById('player-select').addEventListener('change', updateStatsCard);
