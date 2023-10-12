var toDoList = JSON.parse(localStorage.getItem('todos')) || [];
ShowTheList();

function AddToTheList()
{
    const inputVal = document.querySelector(".js-input");
    const dateVal = document.querySelector(".js-date");
    var name = inputVal.value;
    var date = dateVal.value;
    if(name !== '' && date !== '')
    {
        toDoList.push({
            name,
            date
        });
        inputVal.value = '';
        localStorage.setItem('todos', JSON.stringify(toDoList));
        ShowTheList();    
    }    
}
function ShowTheList()
{
    const resultHTML = document.querySelector(".js-result");
    var htmlEl = '';
    for (let i = 0; i < toDoList.length; i++) {
        htmlEl += 
        `
        <div class="event-input">${toDoList[i].name}</div>
        <div class="event-input">${toDoList[i].date}</div>
        <button class="delete-button buttons" onclick="
            toDoList.splice(${i}, 1); 
            ShowTheList();
            localStorage.setItem('todos', JSON.stringify(toDoList));
        ">Delete</button>
        `;
    }
    resultHTML.innerHTML = htmlEl;
}