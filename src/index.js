import ToDo from './todo';
import Project from './project';

let todolist = [];

init();
function init() {
    if (localStorage.getItem('todolist') != null) {
        todolist = JSON.parse(localStorage.getItem('todolist'));
        console.log(localStorage.getItem('todolist'));
    }
    if (todolist.length == 0) {
        todolist.push(new Project('Default', []));
    }
    console.log(todolist);
    let project = document.querySelector("#project");
    project.innerHTML = "";
    for (let i = 0; i < todolist.length; i++) {
        const element = todolist[i];
        let option = document.createElement("option");
        option.value = i;
        option.innerText = element.projectName;
        project.appendChild(option);
    }
}

let addprojectbtn = document.querySelector("#addprojectbtn");
addprojectbtn.onclick = () => {
    let projectname = document.querySelector("#projectname").value;
    todolist.push(new Project(projectname,[]));
    localStorage.setItem('todolist',JSON.stringify(todolist));
    document.querySelector("#projectname").value = "";
    init();
}


let additembtn = document.querySelector("#additembtn");
additembtn.onclick = () => {
    let title = document.querySelector("#title").value;
    let discription = document.querySelector("#discription").value;
    let deudate = document.querySelector("#deudate").value;
    let priority = document.querySelector("#priority").value;
    let project = document.querySelector("#project").value;
    let item = new ToDo(title, discription, deudate, priority);
    console.log(item);
    console.log(project);
    todolist[project].projectList.push(item);
    console.log(todolist);
    document.querySelector("#title").value = "";
    document.querySelector("#discription").value = "";
    document.querySelector("#deudate").value = "";
    document.querySelector("#priority").value = "1";
    document.querySelector("#project").value = "0";
    localStorage.setItem('todolist',JSON.stringify(todolist));
}