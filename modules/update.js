import readline from 'readline';

const update = function(){
    const readIdPromise = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Enter the student ID you want to update: ", (id) => {
            rl.close();
            if (!isNaN(Number(id))){
                resolve(id);
            } else {
                reject("ID is invalid.");
            }
        })
    });
    
    readIdPromise.then(id => console.log(id));
    readIdPromise.catch(err => console.log(err));
}

update()