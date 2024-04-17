let todo = [];

let req = prompt("Please Enter Your Request");

while(true) {
    if(req == "quit") {
        console.log("Quit App");
        break;
    }
    // List:
    if(req == "list") {
         console.log("-----------");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-----------");
    // Add:
    } else if(req == "add") {
        let task = prompt("Please Enter the Task you want to Add");
        todo.push(task);
        console.log("Task Added");
    // Delete:
    } else if(req == "delete") {
        let idx = prompt("Please Enter the Task Index");
        todo.splice(idx, 1); // idx = index
        console.log("Task Deleted");
    // Invalid Request:
    } else {
        console.log("Invalid Request");
    }

    req = prompt("Please Enter Your Request");
}