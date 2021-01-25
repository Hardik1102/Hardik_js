alert('hello')

// Challenge 1
function ageInDays() {
    var birthYear = prompt("What is your birth year.");
    var ageInDayss = (2020-birthYear)*365;
    // console.log(ageInDayss);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are "+ageInDayss+ " days old");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();

}

// Challenge 2


function catGenerator(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Challenge 3


function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice ;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer selected "+botChoice);
    results = decideWinner(humanChoice,botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}


function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock':{'rock':0.5,'paper':0,'scissors':1},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'rock':0,'paper':1,'scissors':0.5}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];
}


function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){                                       //'5'==5 => True      '5'===5 => False
        return {'message':'You Lost!','color':'red'};
    }
    else if(computerScore === 0){
        return {'message':'You Won!','color':'green'};
    }
    else{
        return {'message':'You Tied!','color':'yellow'};
    }
}



function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
        var imagesDatabase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src
        }

        // let's remove all the images
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();


        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div');

        // console.log(imagesDatabase['rock']);
        // console.log(imagesDatabase[humanImageChoice]);
        humanDiv.innerHTML = "<img src='" +  imagesDatabase[humanImageChoice]   + "'height=150 width=150 style='box-shadow : 0px 10px 50px rgba(37,50,233,1);'>";
        //  console.log(humanImageChoice);
        // humanDiv.innerHTML = "<img src='"+ humanImageChoice.src+ "'height=150 width=150>";
        document.getElementById('flex-box-rps-div').appendChild(humanDiv);


        // console.log(finalMessage['message']);
        // var finalText = document.createTextNode(finalMessage['message']);
        // console.log(finalText)
        messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size : 60px; padding:30px,'>" + finalMessage['message'] + "</h1>"
        // messageDiv.innerHTML = finalMessage['message'] + "<style = 'finalMessage['color']' >";
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);

        botDiv.innerHTML =  "<img src='" +  imagesDatabase[botImageChoice]   + "'height=150 width=150 style='box-shadow : 0px 10px 50px rgba(243,38,24,1);'>"
        document.getElementById('flex-box-rps-div').appendChild(botDiv);

        
}

//     document.getElementById('flex-box-rps-div').remove();
//     var image = document.createElement('img');
//     image.setAttribute('id',this);
//     image.src=document.getElementById('');
//     var div = document.getElementById('flex-box-rps-div');
//     div.appendChild(image);


// Challenge 4

var allButtons = document.getElementsByTagName("button");
console.log(allButtons);

let copyAllButtons = [];

for(let i=0 ;i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}
console.log(copyAllButtons);

// choice = random,red,green,reset
// function buttonColorChange(buttonThingy){
//     console.log(buttonThingy.value);
//     if(buttonThingy.value === 'red'){
//         for(let i=0;i < allButtons.length;i++){
//             allButtons[i].classList.remove('btn-*');
//             allButtons[i].classList.add('btn-danger');
//         }
//     } else if(buttonThingy.value === 'green'){
//         for(let i=0;i < allButtons.length;i++){
//             allButtons[i].classList.remove('btn-*');
//             allButtons[i].classList.add('btn-success');
//         }
//     } 
// }

function buttonColorChange(buttonThingy){
    console.log(buttonThingy.value);
    if(buttonThingy.value === 'red'){
        buttonRed();
    } else if(buttonThingy.value === 'green'){
        buttonGreen();
    } else if(buttonThingy.value === 'reset'){
        buttonColorReset();
    } else if(buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonRed(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');  
    }
}
function buttonGreen(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');  
    }
}

function buttonColorReset(){
    for(let i=0;i<allButtons.length;i++){
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(copyAllButtons[i]);  
    }
}

function randomColors(){
    let choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    for(let i=0;i<allButtons.length;i++){
        let randomNumber = Math.floor(Math.random()*4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);  
    }
    
}


// Challenge 5
// let url = '/challenges/ch1/static/images/Q.png';
// let width = 150;
// let height = 150;

let blackjackGame = {
    'you': {'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer': {'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','J','K','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'K':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('/ch1/static/sounds/swish.m4a');
const winSound = new Audio('/ch1/static/sounds/cash.mp3');
const lossSound = new Audio('/ch1/static/sounds/aww.mp3');


document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);


function blackjackHit(){
    if(blackjackGame['isStand'] === false ){
    let card = randomCard();
    console.log(card);
    showCard(card,YOU); 
    // showCard(card,DEALER);
    updateScore(card,YOU);
    console.log('Your score is :'+YOU['score']);
    showScore(YOU);
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card,activePlayer){
    if(activePlayer['score']<=21) {
        let cardImage = document.createElement('img');
        //  cardImage.innerHTML= '<img src="' + url + '" width="' + width + '" height="' + height + '" />';
        // cardImage.innerHTML = "<img src='/challenges/ch1/static/images/Q.png'  'height=50%' 'width=50%'; >"
        cardImage.src = `/ch1/static/images/${card}.png`;
        cardImage.height = 140;
        cardImage.width = 140;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    if (blackjackGame['turnsOver'] === true){
        blackjackGame['isStand'] = false;
    // showResult(computeWinner());
    // let winner1 = computeWinner();
    // showResult(winner1);
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    // console.log(yourImages);
    for(let i=0;i<yourImages.length;i++)
    {
        yourImages[i].remove();
    }
    for(let i=0;i<dealerImages.length;i++)
    {
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;

    document.querySelector('#your-blackjack-result').style.color = 'white';
    document.querySelector('#dealer-blackjack-result').style.color = 'white';
    
    document.querySelector('#blackjack-result').textContent = "Let's play";
    document.querySelector('#blackjack-result').style.color = 'black';

    blackjackGame['turnsOver'] = true;
    }
}

function updateScore(card,activePlayer){
    // If adding 11 keeps me below 21,add 11 .Otherwise add 1.
    if(card=='A'){
        if(activePlayer['score']+blackjackGame['cardsMap'][card][1]<=21){
            activePlayer['score']+= blackjackGame['cardsMap'][card][1];
        }
        else{
            activePlayer['score']+= blackjackGame['cardsMap'][card][0];
        }
    }
    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic(){
    blackjackGame['isStand'] = true;

    while(DEALER['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(card,DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
        // console.log(blackjackGame['turnsOver']);
        // showTable(winner);

}

// function computeWinner(){
//     let winner;
//     if(((YOU['score'] <= 21) && (YOU['score'] > DEALER['score'])) || (DEALER['score'] > 21)) {
//         console.log('You Won!');
//         winner = YOU;
//     }
//     else if (((DEALER['score'] <= 21) && (DEALER['score'] > YOU['score'])) || (YOU['score'] > 21)) {
//         console.log('You Lost!');
//         winner = DEALER;
//     }
//     else if(((YOU['score'] > 21) && (DEALER['score'] > 21)) || (YOU['score'] === DEALER['score'])) 
//     {
//         console.log('You Drew!');
//     }
//     console.log('Winner is',winner);
//     return winner;
//     }


function computeWinner(){
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            blackjackGame['wins']++;
            console.log('You Won!');
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            console.log('You Lost!');
            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
            console.log('You Drew!');
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
            blackjackGame['losses']++;
            console.log('You Lost!');
            winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;
        console.log('You Drew!');
    }
    console.log('Winner is',winner);
    return winner;
}

function showResult(winner){

    let message,messageColor ;

    if(blackjackGame['turnsOver'] === true){

    if(winner === YOU){
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        message = 'You Won!';
        messageColor = 'green';
        winSound.play();
    } else if (winner === DEALER) {
        document.querySelector('#losses').textContent = blackjackGame['losses'];
        message = 'You Lost!';
        messageColor = 'red';
        lossSound.play();
    } else{
        document.querySelector('#draws').textContent = blackjackGame['draws'];
        message = 'You Drew!';
        messageColor = 'black';
    }
    
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
    }
}

    // if (winner == YOU){
    //     document.querySelector('#blackjack-result').textContent = 'You Won!';
    //     document.querySelector('#blackjack-result').style.color = 'green';
    //     winSound.play();

    // }

    // else if (winner == DEALER){
    //     document.querySelector('#blackjack-result').textContent = 'You Lost!';
    //     document.querySelector('#blackjack-result').style.color = 'red';
    //     lossSound.play();
    // }
    // else {
    //     document.querySelector('#blackjack-result').textContent = 'You Drew!';
    //     document.querySelector('#blackjack-result').style.color = 'yellow';
    // }



// function showTable(winner){
//     if (winner == YOU) {
//         document.querySelector('#wins').textContent = 1;
//     }
//     else if(winner == DEALER){
//         document.querySelector('#losses').textContent = 1;
//     }
//     else{
//         document.querySelector('#draws').textContent = 1;
//     }
// }   
