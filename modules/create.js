import { readFile, writeFile } from 'fs';
import readline from 'readline';

const createStudent = function(){
    readFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/school-crud/db/db.txt", "utf-8", (err, data) => {
        if (err){
            console.log(err);
            return;
        }
        const newStudent = {}
        let file;
        if (data){
            file = JSON.parse(data);
            newStudent["id"] = file[0].id + 1;
        } else {
            file = [];
            newStudent["id"] = 0;
        }       
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Enter name: ', function(name){
            newStudent["name"] = name;
            rl.question('Enter grade: ', function(grade){
                newStudent["grade"] = grade;
                rl.close();
                file.unshift(newStudent);
                writeFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/school-crud/db/db.txt", JSON.stringify(file), () => {});
            })
        })
    })
}


createStudent()

export default createStudent;
