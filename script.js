'use strict';


/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '✌hello'////icon click ( win + .)
 
document.querySelector('.number').textContent= 13;
document.querySelector ('.score').textContent =13;



document.querySelector('.guess').value =188;
console.log(document.querySelector('.guess').value);
*/



let secretNumber=Math.trunc(Math.random() *20 )+1;
let score = 20;
let highScore = 0;
const displaymassage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click' , () => {
        const gusess = Number( document.querySelector('.guess').value);

        // return a not number where a player a insert a not number
        if(!gusess){
            // document.querySelector('.message').textContent = '⛔ not Number'
            displaymassage('⛔ not Number')

            //where player win
        }else if (gusess === secretNumber ){
            // document.querySelector('.message').textContent  = 'correct number ✌👌'
            displaymassage('correct number ✌👌')
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector ('.number').style.widht = '30rem';

            if(score > highScore){
                highScore =score;
                document.querySelector('.highscore').textContent = highScore;
            }


            //win player is wrong
        }else if ( gusess !== secretNumber ){
             if(score > 1){
                // document.querySelector('.message').textContent =  gusess > secretNumber ? '📉 to high' 
                // : '📈 to low';
                displaymassage( gusess > secretNumber ? '📉 to high' : ' 📈 to low')
                score-- ;
                document.querySelector('.score').textContent = score; 
             } else  {
                // document.querySelector('.message').textContent  = 'your loser';
                displaymassage('your loser')
                document.querySelector('.score').textContent = 0 ;  }
             
        } 
        //  else if (gusess < secretNumber)  {
        //     if (score > 1){
        //         // gusess is too low
        //         document.querySelector('.message').textContent = ;
        //         score--;
        //         document.querySelector('.score').textContent = score;    
        //     }else{
        //         document.querySelector('.message').textContent = 'yourlose'
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
    })


    document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        secretNumber=Math.trunc(Math.random() *20 )+1;

        // document.querySelector('.message').textContent = 'start gusessing ...';
        displaymassage('start gusessing ...')
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';


        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector ('.number').style.widht = '15rem';







    })