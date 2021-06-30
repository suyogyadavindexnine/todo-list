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
                title.style.marginTop = "20px";
                title.innerText = elm.projectName;
                maincontent.appendChild(title);
                let presentlist = document.createElement("div");
                presentlist.className = "row";
                presentlist.innerHTML = "";
                let j = 0;
                elm.projectList.forEach(element => {
                    const parentdiv = document.createElement('div');
                    parentdiv.className = "col-md-3"
                    const div = document.createElement('div');
                    div.className = "card";
                    div.style.marginTop = "20px";
                    div.style.padding = "12px 12px 12px 14px";
                    div.innerHTML =
                        `<h5>
                            Title : ${element.title}<br>
                            Discription : ${element.discription}<br>
                            Deu Date : ${element.deudate}<br>
                            Priority : ${element.priority}<br>
                        </h5>`

                    if (element.isCompleted) {
                        div.className += " completed";
                        div.innerHTML +=
                            `<div class="text-center" style="margin-bottom: 10px; margin-top: 10px;">
                                <button class="btn btn-danger" onclick="deleteToDo('${i}','${j}')" >Delete</button>
                            </div>`
                    }else{
                        div.innerHTML +=
                            `<div class="text-center" style="margin-bottom: 10px; margin-top: 10px;">
                                <button class="btn btn-primary" onclick="markAs('${i}','${j}')"  >Done</button>
                                <button class="btn btn-danger" onclick="deleteToDo('${i}','${j}')" >Delete</button>
                            </div>`
                    }
                    parentdiv.appendChild(div);
                    presentlist.appendChild(parentdiv);
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
    console.log("Length = "+todolist[i].projectList.length);
    if (todolist[i].projectList.length == 0) {
        todolist.splice(i,1);
    }
    console.log(todolist);
    localStorage.setItem('todolist', JSON.stringify(todolist));
    init();
}