            var Scores = JSON.parse(localStorage.getItem('score'));
            if(Scores == null)
            {
                Scores = {
                    Win: 0,
                    Lose: 0,
                    Tie: 0
                };
            }
            UpdateScoreElement();
            
            let isAutoPlaying = true;
            let intervalId;
            function Play(sec)
            {    
                isAutoPlaying = !isAutoPlaying;               
                if(!isAutoPlaying)
                {
                    let rnd = Math.random();
                    AutoPlay(rnd);
                    intervalId = setInterval(() => {
                        rnd = Math.random();
                        AutoPlay(rnd);
                    }, secToMili(sec));
                }
                else{
                    clearInterval(intervalId);
                }
            }
            function secToMili(seconds)
            {
                return seconds * 1000;
            }
            function AutoPlay(rnd)
            {                
                let choice = '';
                if(rnd <= 1/3) choice = 'rock';
                else if(rnd <= 2/3 && rnd > 1/3) choice = 'paper';
                else choice = 'scissors';
                Game(choice);
                
            }
            function Game(choice)
            {
                var compChoice;
                var rnd = Math.random();
                var result;
                
                
                if(rnd <= 1/3) compChoice = 'rock';
                else if(rnd <= 2/3 && rnd > 1/3) compChoice = 'paper';
                else compChoice = 'scissors';
                
                if(compChoice === choice){
                    result = 'Tie';
                }
                else if(choice === 'rock' && compChoice === 'paper') {
                    result = 'You Lost';                    
                } 
                else if(choice === 'rock' && compChoice === 'scissors'){
                    result = 'You Won';                    
                }
                else if(choice === 'paper' && compChoice === 'rock'){
                    result = 'You Won';                    
                }
                else if(choice === 'paper' && compChoice === 'scissors'){
                    result = 'You Lost';                    
                } 
                else if(choice === 'scissors' && compChoice === 'rock'){
                    result = 'You Lost';                    
                }
                //else if(choice === 'Scissors' && compChoice === 'paper'){
                else {
                    result = 'You Won';                    
                } 
                UpdateScore(result);
                //if(choice)
                document.querySelector('.js-result').innerHTML = result;
                //document.querySelector('.js-moves').innerHTML = `Your choice: ${choice}, Comp Choice: ${compChoice}`;

                document.querySelector('.js-moves').innerHTML = `You
                <img class="move-icon" src="images/rock-paper-scissors/${choice}-emoji.png" alt="">
                <img class="move-icon" src="images/rock-paper-scissors/${compChoice}-emoji.png" alt="">
                Computer`;

                UpdateScoreElement();
            }
            function UpdateScore(result)
            {
                if(result === 'You Won') Scores.Win++;
                else if(result === 'You Lost') Scores.Lose++;
                else Scores.Tie++;
                localStorage.setItem('score', JSON.stringify(Scores));       
            }
            function UpdateScoreElement()
            {
                document.querySelector('.js-score').innerHTML = `Win: ${Scores.Win}, Lose: ${Scores.Lose}, Tie: ${Scores.Tie}`;
            }
            function ResetScore()
            {
                Scores.Win = Scores.Lose = Scores.Tie = 0;
                localStorage.removeItem('score');
                document.querySelector('.js-result').innerHTML = '';
                document.querySelector('.js-moves').innerHTML = '';
                UpdateScoreElement();
            }