class Project{
    constructor(projectName,projectList)
    {
        this.projectName = projectName;
        this.projectList = projectList;
    }
    getData(){
        return {
            projectName,
            projectList,
        }
    }
}

export default Project;