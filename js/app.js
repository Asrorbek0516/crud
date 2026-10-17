import { users } from "./data.js";


const userWrapper  = document.querySelector('.user-wrapper')
// console.log(userWrapper.innerHTML);
window.deletUser = function(id){
    let findindex = users.findIndex((usr)=> usr.id ===id)
    users.splice(findindex,1)
    readData(users)
}


export function readData(arr){
    userWrapper.innerHTML = "";
    arr.forEach((user) => {

    userWrapper.innerHTML += `

    <div class="user">
                <h1>Name: ${user.name}</h1>
                <h2>Lastname: ${user.lastName}</h2>
                <p>age: ${user.age}</p>
                <p>job: ${user.job}</p>
                <p>email: ${user.email}</p>
                <p>password: ${user.password}</p>

                <button onclick="deletUser(${users.id})" class ="delete-btn">delete</button>
            </div>

    `;
});
}

readData(users)


// userFormEl.addEventListener('submit',(e) => {
//     e.preventDefault();
// })

