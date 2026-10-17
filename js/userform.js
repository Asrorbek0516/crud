import { users } from "./data.js";
import {readData} from "./app.js"
const userFormEl = document.querySelector('#user-form')
console.log(userFormEl);

function addUser(newUser){
    users.push(newUser);
    readData(users)
}
userFormEl.addEventListener('submit',(e) => {
    e.preventDefault();

    let formdata = new FormData(userFormEl);

    let newUser = {
        id: users.length === 0? 1: users.at(-1).id+1,
        name: formdata.get('name'),
        lastName: formdata.get("lastName"),
        age: formdata.get('age'),
        job: formdata.get('email'),
        password: formdata.get('password'),
    };

    console.log(newUser);
    
})