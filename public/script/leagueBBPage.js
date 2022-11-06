// Changement de style pour les boutons "Récapitulatif" et "Règles"

document
	.getElementById("buttonRule")
	.addEventListener("click",function() {
		document.getElementById("rules").style.display = "block"
		document.getElementById("buttonRule").className = "buttonActif"

		document.getElementById("sponsor").style.display = "none"
		document.getElementById("buttonSponsor").className = "buttonNonActif"
	});

document
	.getElementById("buttonSponsor")
	.addEventListener("click",function(){
		document.getElementById("rules").style.display = "none"
		document.getElementById("buttonRule").className = "buttonNonActif"
		
		document.getElementById("sponsor").style.display = "block"
		document.getElementById("buttonSponsor").className = "buttonActif"
	});


// Changement de style pour les boutons "Tour"

document
	.getElementById("buttonTour1")
	.addEventListener("click",function() {
		document.getElementById("tableTour1").style.display = "block"
		document.getElementById("buttonTour1").className = "buttonActif"

		document.getElementById("tableTour2").style.display = "none"
		document.getElementById("buttonTour2").className = "buttonNonActif"

		document.getElementById("tableTour3").style.display = "none"
		document.getElementById("buttonTour3").className = "buttonNonActif"		
	});

document
	.getElementById("buttonTour2")
	.addEventListener("click",function() {
		document.getElementById("tableTour1").style.display = "none"
		document.getElementById("buttonTour1").className = "buttonNonActif"

		document.getElementById("tableTour2").style.display = "block"
		document.getElementById("buttonTour2").className = "buttonActif"

		document.getElementById("tableTour3").style.display = "none"
		document.getElementById("buttonTour3").className = "buttonNonActif"		
	});

document
	.getElementById("buttonTour3")
	.addEventListener("click",function() {
		document.getElementById("tableTour1").style.display = "none"
		document.getElementById("buttonTour1").className = "buttonNonActif"

		document.getElementById("tableTour2").style.display = "none"
		document.getElementById("buttonTour2").className = "buttonNonActif"

		document.getElementById("tableTour3").style.display = "block"
		document.getElementById("buttonTour3").className = "buttonActif"		
	});



