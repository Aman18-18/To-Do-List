const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [{
    task : 'Study Web Dev',
    duedate : '2025-10-05'
},                  //an array object with task and due date is cretaed in first step
{
    task : 'Study Java',
    duedate : '2025-10-05'
}];

renderToDoList();

function renderToDoList(){
    let toDoListHTML = '';

    for(let  i = 0;i<toDoList.length;i++){
        const todoObject = toDoList[i]; //putting vlaue of the index at the insance in todoObject

        const {task,duedate} = todoObject;  //desstructuring the object and extracting value to use it to display

        const html= `
                        <div>${task}</div>
                        <div>${duedate}</div>
                <button onclick= "
                   toDoList.splice(${i},1);
                   localStorage.setItem('toDoList',JSON.stringify(toDoList));
                   renderToDoList();
                " class = "delete">Delete</button>` ;

                toDoListHTML +=html;


    }

    document.querySelector(`.js-todo-list`)
    .innerHTML = toDoListHTML;
}

function addToDo(){
    const inputElement = document.querySelector(`.js-input-task`);
    const task = inputElement.value;

    const inputDate = document.querySelector(`.js-input-date`);
    const duedate = inputDate.value;

    toDoList.push({task,duedate}); //inserting an obejct inside array

    inputElement.value = '';
    localStorage.setItem('toDoList',JSON.stringify(toDoList));
    renderToDoList();
}