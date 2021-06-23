class ToDo{
    constructor(title,discription,deudate,priority)
    {
        this.title = title;
        this.discription = discription;
        this.deudate =deudate;
        this.priority = priority;
        this.isCompleted = false;
    }
    getData(){
        return {
            title,
            discription,
            deudate,
            priority,
            isCompleted,
        }
    }
}

export default ToDo;