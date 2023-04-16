export async function loadJSON(url) {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		const data = await res.json();
		return data?.players;
	} catch (err) {
		console.error('Error fetching JSON: ', err);
		return null;
	}
}

export const getStatValueByName = (stats, name) => {
	const stat = stats.find((s) => s.name === name);
	if (!stat) {
		return '';
	}
	return stat.value;
};

export function createImgElement(players, selectedValue) {
	const selectedPlayer = players.find((player) => player.player.id === selectedValue);
	if (!selectedPlayer) {
		return;
	}

	const { first, last } = selectedPlayer.player.name;
	const id = selectedPlayer.player.id;
	const media = document.querySelector('.stats-card-image');
	let img = media.querySelector('img');
	if (!img) {
		img = document.createElement('img');
		media.appendChild(img);
	}
	img.src = `./img/assets/p${id}.png`;
	img.alt = `profile picture of ${first} ${last}`;
	return img;

	// const selectedPlayer = players.find((data) => data.player.id === selectedValue);
	// if (selectedPlayer) {
	// 	const {
	// 		player: {
	// 			name: { first, last },
	// 			id,
	// 		},
	// 	} = selectedPlayer;
	// 	const media = document.querySelector('.stats-card-image');
	// 	const existingImage = media.querySelector('img');
	// 	if (existingImage) {
	// 		existingImage.src = `./img/assets/p${id}.png`;
	// 		existingImage.alt = `profile picture of ${first} ${last}`;
	// 	} else {
	// 		const newElement = document.createElement('img');
	// 		newElement.src = `./img/assets/p${id}.png`;
	// 		newElement.alt = `profile picture of ${first} ${last}`;
	// 		media.appendChild(newElement);
	// 	}
	// 	return existingImage;
	// }
}

export const updatePlayerStats = (player) => {
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
	assists.textContent = `${getStatValueByName(stats, 'appearances')}`;
	goalsPerMatch.textContent = `${getStatValueByName(stats, 'goals')}`;
	assistsPerMatch.textContent = `${CalPassesPerMinute(stats)}`;
};

export function calculatePassesPerMinute(player) {
	const backward = player.find((s) => s.name === 'backward_pass').value;
	const fwd = player.find((s) => s.name === 'fwd_pass').value;
	const minsPlayed = player.find((s) => s.name === 'mins_played').value;
	const passesPerMinute = (backward + fwd) / minsPlayed;
	return passesPerMinute.toFixed(2);
}

export function calculateGoalsPerMatch(player) {
	const { goals, losses, wins, draws } = player.reduce((accumulator, stat) => {
		accumulator[stat.name] = stat.value;
		return accumulator;
	}, {});

	const totalMatches = losses + wins + draws;
	const goalsPerMatch = totalMatches === 0 ? 0 : goals / totalMatches;
	return goalsPerMatch.toFixed(2);
}

// function createImgElement(players, selectedValue) {
// 	const selectedPlayer = players.find((data) => data.player.id === selectedValue);
// 	if (selectedPlayer) {
// 		const {
// 			player: {
// 				name: { first: firstName, last: lastName },
// 				id,
// 			},
// 		} = selectedPlayer;
// 		// const element = document.createElement('img');
// 		let element = document.querySelector('.stats-card-image');
// 		// element.src = `./img/assets/p${id}.png`;
// 		// element.alt = `profile picture of ${firstName} ${lastName}`;
// 		// element.setAttribute('id', `${id}`);
// 		element.innerHTML = `<img src="./img/assets/p${id}.png" alt="profile picture of ${firstName} ${lastName}">`;
// 		console.log('element', element);
// 		return element;
// 	}
// }
