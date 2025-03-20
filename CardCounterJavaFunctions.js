//java functions for the cardcounter application
//*MDG 3/19/25 - Created

const deckNum = []
let plusCard,minusCard,midCard,totalCard,trueCount,runCount = 0

/*
Description: Use to update counts based on the cards
Parameters:
    - cardType (I,Req) = The value of the given card. Possible values are low (0; plusCard), mid (1; midCard), and face(2; minusCard)
*/
function updateCounts(cardType) {
    //based on card type, update counts
    switch(cardType) {
        case "0": //plusCard
            plusCard -= 1
            runCount += 1
            break;
        case "1": //midCard
            midCard -= 1
            break;
        case "2": //minusCard
            minusCard -= 1
            runCount -= 1
            break;
    }
 
    //update overall items,checking to see if the round is OVER
    if (totalCard == 0) {
        window.location.href = "MainPage.html"
        return exitApp('outOfCards')
    } else {
        totalCard -= 1
        let decksLeft = totalCard / deckNum[0]
        trueCount = (runCount/decksLeft).toFixed(2)
    }

    //update display
    document.getElementById("runCount").innerText = "Running Count: " + runCount;
    document.getElementById("trueCount").innerText = "True Count: " + trueCount;
}

//Use this function to save the deck count. Also sets up other global variables
function saveDecks() {
    if (deckNum[1] == "set") {
        alert("The Deck Count has already been set to "+deckNum[0]+". Exit and start a new session to change the number of decks.")
    } else {
        deckNum[1] = "set"
        deckNum[0] = parseInt(document.getElementById("decks").value)
        plusCard = deckNum[0] * 20
        minusCard = deckNum[0] * 20
        midCard = deckNum[0] * 12
        totalCard = deckNum[0] * 52
        document.getElementsByClassName("deckInput").innerText = '<h>Deck Count Selected</h>'
    }
}

//Use this function to exit to the main screen
function exitApp(exitType) {
    switch(exitType) {
        case "playerExit":
            alert("Session information has now been cleared. I hope you enjoyed playing!");
            break;
        case "outOfCards":
            alert("The shoe is empty! Session information has been cleared, please start a new session if you wish to continue playing")
            break;
    }
}