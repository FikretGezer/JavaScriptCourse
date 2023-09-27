const resultElement = document.querySelector('.js-result');
var result = '';
function WriteNumbers(number)
{    
    //result += `${number}`;
    result += `${number}`;
    resultElement.innerHTML = `${Number(result)}`;
}