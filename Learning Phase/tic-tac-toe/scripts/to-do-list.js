var toDoList = JSON.parse(localStorage.getItem('todos')) || [];
ShowTheList();
controlCheck();

function AddToTheList()
{
    const inputVal = document.querySelector(".js-input");
    const dateVal = document.querySelector(".js-date");
    var name = inputVal.value;
    var date = dateVal.value;
    if(name !== '' && date !== '')
    {
        toDoList.push({
            check: false,
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
        <input class="box-check" type="checkbox">
        <div class="event-input">${toDoList[i].name}</div>
        <div class="event-input">${toDoList[i].date}</div>
        <button class="delete-button buttons">Delete</button>
        `;
    }
    resultHTML.innerHTML = htmlEl;
    const btnsDelete = document.querySelectorAll('.delete-button');
    btnsDelete.forEach((btnDelete, index) => {
        btnDelete.addEventListener('click', () => {
            toDoList.splice(index, 1);
            ShowTheList();
            localStorage.setItem('todos', JSON.stringify(toDoList));
        }); 
    });
    checkThing();
}
function checkThing()
{
    let boxes = document.querySelectorAll('.box-check');    
    let evs = document.querySelectorAll('.event-input');
    if(boxes.length > 0)
    {
        boxes.forEach((box, index) => {
            box.addEventListener('click', () => {
                toDoList[index].check = box.checked;
                if(toDoList[index].check)
                {
                    evs[index * 2].style.textDecoration = "line-through";
                    evs[index * 2].style.textDecorationColor = "black";
                    evs[index * 2].style.textDecorationThickness = "3px";
                    
                    evs[index * 2 + 1].style.textDecoration = "line-through";
                    evs[index * 2 + 1].style.textDecorationColor = "black";
                    evs[index * 2 + 1].style.textDecorationThickness = "3px";
                }
                else{
                    evs[index * 2].style.textDecoration = "none";
                    evs[index * 2 + 1].style.textDecoration = "none";
                }
                localStorage.setItem('todos', JSON.stringify(toDoList));
            });
        });
    }        
}
function controlCheck()
{
    let boxes = document.querySelectorAll('.box-check');  
    let inputs = document.querySelectorAll('.event-input');
    toDoList.forEach((todo, i) => {
        boxes[i].checked = todo.check;
        if(todo.check)
        {
            inputs[i * 2].style.textDecoration = "line-through";
            inputs[i * 2].style.textDecorationColor = "black";
            inputs[i * 2].style.textDecorationThickness = "3px";
            
            inputs[i * 2 + 1].style.textDecoration = "line-through";
            inputs[i * 2 + 1].style.textDecorationColor = "black";
            inputs[i * 2 + 1].style.textDecorationThickness = "3px";
        }
    });
}
// toDoList.forEach((element, index) => {
//     if(index === 1)
//         element.check = true;
// });