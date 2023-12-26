const buttons = document.querySelectorAll('.moves');
const moveSelect = document.querySelector('.move-container');
const buttonRestart = document.querySelector('.restart-button');

let result = false;

buttonRestart.addEventListener('click', () => restartGame());

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if(btn.innerHTML === '' && !result)
        {
            moveSelect.innerHTML = `Choose a move: 
            <button class="move-x">X</button> 
            <button class="move-o">O</button>`;

            const btnX = document.querySelector('.move-x');
            const btnO = document.querySelector('.move-o');
            btnX.addEventListener('click', () => {
                moveSelect.innerHTML = '';                
                btn.innerHTML = "X";
                printButtons();
            });
            btnO.addEventListener('click', () => {
                moveSelect.innerHTML = '';
                btn.innerHTML = "O"; 
                printButtons();
            });
        }            
    });
});
function printButtons()
{    
    if(buttons[0].innerHTML != '' && buttons[0].innerHTML === buttons[1].innerHTML && buttons[1].innerHTML === buttons[2].innerHTML)
        result = true;
    else if(buttons[3].innerHTML != '' && buttons[3].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[5].innerHTML)
        result = true;  
    else if(buttons[6].innerHTML != '' && buttons[6].innerHTML === buttons[7].innerHTML && buttons[7].innerHTML === buttons[8].innerHTML)
        result = true;  
    else if(buttons[0].innerHTML != '' && buttons[0].innerHTML === buttons[3].innerHTML && buttons[3].innerHTML === buttons[5].innerHTML)
        result = true;  
    else if(buttons[1].innerHTML != '' && buttons[1].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[7].innerHTML)
        result = true;  
    else if(buttons[2].innerHTML != '' && buttons[2].innerHTML === buttons[5].innerHTML && buttons[5].innerHTML === buttons[8].innerHTML)
        result = true;  
    else if(buttons[0].innerHTML != '' && buttons[0].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[8].innerHTML)
        result = true;  
    else if(buttons[2].innerHTML != '' && buttons[2].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML === buttons[6].innerHTML)
        result = true;  
    if(result) 
    {
        alert('Well Done');
    }
}
function restartGame()
{
    buttons.forEach((btn) => {
        btn.innerHTML = '';
    });
    result = false;
}
