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
            const autoPlayButton = document.querySelector('.autoplay-button');
            const resetScoreButton = document.querySelector('.reset-score-button');

            autoPlayButton.addEventListener('click', () => Play(1));
            resetScoreButton.addEventListener('click', () => resetConfirmation());

            document.body.addEventListener('keydown', (event) => {
                if(event.key === 'a')
                    Play(1);
            });

            document.body.addEventListener('keydown', (event) => {
                if(event.key === 'Backspace')
                    ResetConfirmation();
            });
            
            function Play(sec)
            {    
                isAutoPlaying = !isAutoPlaying;               
                if(!isAutoPlaying)
                {
                    autoPlayButton.innerHTML = 'Stop Playing';
                    let rnd = Math.random();
                    AutoPlay(rnd);
                    intervalId = setInterval(() => {
                        rnd = Math.random();
                        AutoPlay(rnd);
                    }, secToMili(sec));
                }
                else{
                    autoPlayButton.innerHTML = 'Auto Play';
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
            
            function resetConfirmation()
            {
                const confirmContainer = document.querySelector('.js-confirmation');
                confirmContainer.innerHTML = `Are you sure you want to reset it? 
                <button class="confirmation-buttons conf-yes">Yes</button>
                <button class="confirmation-buttons conf-no">No</button>`;
                
                const yesButton = document.querySelector('.conf-yes');
                const noButton = document.querySelector('.conf-no');

                yesButton.addEventListener('click', () => {
                    confirmContainer.innerHTML = '';
                    ResetScore();
                });
                noButton.addEventListener('click', () => {
                    confirmContainer.innerHTML = '';
                });            
            }
            function ResetScore()
            {
                Scores.Win = Scores.Lose = Scores.Tie = 0;
                localStorage.removeItem('score');
                document.querySelector('.js-result').innerHTML = '';
                document.querySelector('.js-moves').innerHTML = '';
                UpdateScoreElement();
            }