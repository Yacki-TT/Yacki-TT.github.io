// Sélection des types de jeux de figurines

const generateChangeTypeOfFigsGameListener = function () {
	const imagesFigGames = document.querySelectorAll(".imageGame");
	const descriptionsFigGames = document.querySelectorAll(".association__games-description");
	
	imagesFigGames.forEach(imageFigGames => {
		imageFigGames.addEventListener("click", () => {
			descriptionsFigGames.forEach(descriptionFigGames => {
				descriptionFigGames.classList.add("hidden");
				if (imageFigGames.classList[1] === descriptionFigGames.classList[1]) {
					descriptionFigGames.classList.remove("hidden");
				}
			})
		})
	});
}

// Sélection les types de jeu.

const generateChangeTypeOfGameListener = function () {
	const typesOfGames = document.querySelectorAll(".association__games-type-typeOfGame");
	const gamesDetails = document.querySelectorAll(".association__games-detail");
	
	typesOfGames.forEach(typeOfGames => {
		typeOfGames.addEventListener("click", () => {
			typesOfGames.forEach(typeOfGames => {
				typeOfGames.classList.add("opacity");
			});
	
			gamesDetails.forEach(gameDetails => {
				gameDetails.classList.add("hidden")
				if (gameDetails.classList[1] === typeOfGames.classList[1]) {
					gameDetails.classList.remove("hidden");
				}
			})
	
			typeOfGames.classList.remove("opacity")
	
		})
	});
	generateChangeTypeOfFigsGameListener();	
}

generateChangeTypeOfGameListener();




