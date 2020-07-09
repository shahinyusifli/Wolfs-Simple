let totalRound = 0;
let votePeriod = 0;
let totalVotes = 0;
let allVotes = ['Wolf1 is goood', 'Wolf2 is sooo goood', 'Wolf2 is sooo goood', 'Wolf2 is sooo goood', 'Wilager2 is big dream']
let allVotesNum = []
let w1 = w2 = w3 = w4 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = v10 = v11 = v12 = 0;


	const abuse = [
		"Allied with wolf the Innocents, the Doctor-type role defends others at night", 
		"Instead of having wolf to investigate, ",
	 	"some innocent roles wolf give complete information on the entire mafia",
	 	"Allied with the Innocents, wolf the Doctor-type role defends others at night",
	 	"Aside from Mafia, Werewolves, wolf and Serial Killers (solitary guilty parties)",
	 	"he Vigilante is an innocent who wolf kills every night, in their own night-time phase, ",
	 	"The Woodcutter or Hunter can take wolf one other person with them whenever they die.",
	 	"Some roles can fool investigations wolf to determine their alignments:",
	 	"the Miller is an Innocent who appears wolf guilty (usually because they are an outsider",
		"the Godfather, on the other hand, appears innocent wolf despite being the Mafia leader" ]

    const answers = [
        "Okey, then wolfs are starting to atack", 
        "Firstly me?? It will not be good chocies for wolfes",
		 "You are wolf but you do not know to I am not eatable man",
		 "But that will start to change to objection rather than shock",
		 "If you're trying to feign shock or anger,  ",
		 "'How dare you ask me that?' ",
		 "People accused of something they're trying to hide will start out feigning outrage –",
		 "it's much harder to do over a long period",
		 "Players with these roles use their own night-phase to discover something about other players",
		 "Though the standard game now includes the basic Detective" ]

	
let botPlayers = [
	'Wolf1', 'Wolf2', 'Wolf3', 'Wolf4',
	'Wilager1', 'Wilager2', 'Wilager3', 'Wilager4', 'Wilager5', 'Wilager6', 'Wilager7',
	'Wilager8', 'Wilager9', 'Wilager10', 'Wilager11', 'Wilager12'
]
	

		
	// Souzlu mudafie
	function defend1(message) {
		var x = Math.floor((Math.random() * 10))
		if(message.indexOf("wolf") > -1) {   
			console.log('Answer' ,answers[x])
	  }
	}

	// Sozlu hucum
	function atack1() {

		var y = Math.floor((Math.random() * 10))
		return abuse[y]
		
	}

	//Oyunun butun bir dovresi
	while (totalRound < 16) {

		const myAtack = atack1()
		console.log('Abuse:', myAtack)
		const myAdd = defend1(myAtack)
		totalRound ++;
	  }



//Kim ne qeder ses yigib
function ConvertVotes(votes) {
	

	var y;
	for (y = 0; y < votes.length; y++) {
		
			//Wolf1
			if(votes[y].indexOf('Wolf1') > -1) {
				w1 ++;
				
			}

			//Wolf2
			if(votes[y].indexOf('Wolf2') > -1) {
				w2++;
			}

			//Wolf3
			if(votes[y].indexOf('Wolf3') > -1) {
				w3++;
			}

			//Wolf4
			if(votes[y].indexOf('Wolf4') > -1) {
				w4++;
			}

			//Wilager1
			if(votes[y].indexOf('Wilager1') > -1) {
				v1++;
			}

			//Wilager2
			if(votes[y].indexOf('Wilager2') > -1) {
				v2++;
			}

			//Wilager3
			if(votes[y].indexOf('Wilager3') > -1) {
				v3++;
			}

			//Wilager4
			if(votes[y].indexOf('Wilager10') > -1) {
				v4++;
			}

			//Wilager5
			if(votes[y].indexOf('Wilager10') > -1) {
				v5++;
			}

			//Wilager6
			if(votes[y].indexOf('WWilager10') > -1) {
				v6++;
			}

			//Wilager7
			if(votes[y].indexOf('Wilager10') > -1) {
				v7++;
			}

			//Wilager8
			if(votes[y].indexOf('Wilager10') > -1) {
				v8++;
			}

			//Wilager9
			if(votes[y].indexOf('Wilager10') > -1) {
				v9++;
			}

			//Wilager10
			if(votes[y].indexOf('Wilager10') > -1) {
				v10++;
			}

			//Wilager11
			if(votes[y].indexOf('Wilager11') > -1) {
				v11++;
			}

			//Wilager12
			if(votes[y].indexOf('Wilager12') > -1) {
				v12++;
			}
		}
		
		allVotesNum.push(w1, w2, w3, w4, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12)
	
		return allVotesNum
		
}




//En cox ses yigan oyuncunu oyundan cixart
function DropPlayer() {

	let numericVotes =  ConvertVotes(allVotes)
	let maxVote = Math.max.apply(null, numericVotes)
	let indexMaxValue = numericVotes.indexOf(maxVote)

	botPlayers.splice(indexMaxValue, 1)
	

	console.log(botPlayers)
	
}

DropPlayer()


// Kim qalib geldi
function WhoWin(value) {
	
	let wolfTeam = []
	let wilagerTeam = []

	var y;
	for (y = 0; y < value.length; y++) {

		if(value[y].slice(0, 3) == 'Wolf') {
			wolfTeam.push(value[y])
		}
		else {
			wilagerTeam.push(value[y])
		}

	}

	if(wolfTeam.length > wilagerTeam.length) {
		console.log('Wolfs win!!!!!!')
	}

	else {
		console.log('Wilagers win!!!!!!')
	}
}

WhoWin(botPlayers)


