import { readFile } from "fs";

const read = function(){
    readFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/school-crud/db/db.txt", "utf-8", (err, data) => {
        if (err){
            console.log(err);
            return;
        }
        if (!data){
            console.log("The student list is empty.")
            return
        }
        const file = JSON.parse(data);
        console.log(file);
    })
}

read()