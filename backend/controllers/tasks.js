/**
 * database access of to-do list funtions
 * 
 **/



//Enum states - Open/Completed
const State = {
    OPEN:0,
    COMPLETED:1,
};
Object.freeze(State);

//Retrive the tasks records from db
const getTasks = (req,res) => {
    //TO-DO: connect to 'db'
    //get records
    
    //send html table back to client
    res.status(200).render("index");
 
}

//Add new task record to db
const addTask = (req,res) => {
    //get parse body
    //TO-DO: connect to 'db'
    // add new task name & default state: OPEN
    
    //send html table back to client order:DSC
    res.status(200).render("index");
}

//Update a task's status & name
const updateTask = (req,res) => {
    //TO-DO: connect to 'db'
    //get records
    
    //send html table back to client
    res.status(200).render("index");
 
}

module.export = {
    getTasks,
    addTask,
    updateTask
}
