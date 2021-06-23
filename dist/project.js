let todolist = [];

init();
function init() {
    let maincontent = document.querySelector("#maincontent");
    maincontent.innerHTML = "";
    console.log(localStorage.getItem('todolist') != null);
    if (localStorage.getItem('todolist') != null) {
        todolist = JSON.parse(localStorage.getItem('todolist'));
        console.log(todolist);
        for (let i = 0; i < todolist.length; i++) {
            const elm = todolist[i];
            console.log(JSON.stringify(elm));
            console.log(JSON.parse(JSON.stringify(elm)));
            if (elm.projectList.length != 0) {
                let title = document.createElement("h2");
                title.style.marginLeft = "20px";
                title.innerText = elm.projectName;
                maincontent.appendChild(title);
                let presentlist = document.createElement("div");
                presentlist.className = "todoshelf";
                presentlist.innerHTML = "";
                let j = 0;
                elm.projectList.forEach(element => {
                    const div = document.createElement('div');
                    div.className = "todo";
                    if (element.isCompleted) {
                        div.className += " completed";
                    }
                    div.innerHTML =
                        `<h4>
                            Title : ${element.title}<br>
                            Discription : ${element.discription}<br>
                            Deu Date : ${element.deudate}<br>
                            Priority : ${element.priority}<br>
                        </h4>`

                    if (element.isCompleted) {
                        div.innerHTML +=
                            `<div style="margin-bottom: 10px;">
                                <button onclick="deleteToDo('${i}','${j}')" style="width: 100px; height: 50px; background-color: pink; color: black;" >Delete</button>
                            </div>`
                    }else{
                        div.innerHTML +=
                            `<div style="margin-bottom: 10px;">
                                <button onclick="markAs('${i}','${j}')" style="width: 100px; height: 50px; background-color: greenyellow; color: black;" >Done</button>
                                <button onclick="deleteToDo('${i}','${j}')" style="width: 100px; height: 50px; background-color: pink; color: black;" >Delete</button>
                            </div>`
                    }
                    presentlist.appendChild(div);
                    j++;
                })
                maincontent.appendChild(presentlist);
            }
        }
    } else {
        let title = document.createElement("h2");
        title.style.marginLeft = "20px";
        title.innerText = "No ToDo's Added !!!...";
        title.style.color = "red";
        maincontent.appendChild(title);
    }
}
function markAs(i, j) {
    todolist[i].projectList[j].isCompleted = true;
    localStorage.setItem('todolist', JSON.stringify(todolist));
    init();
}
function deleteToDo(i, j) {
    todolist[i].projectList.splice(j, 1);
    localStorage.setItem('todolist', JSON.stringify(todolist));
    init();
}