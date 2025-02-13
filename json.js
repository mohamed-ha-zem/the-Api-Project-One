function posts(userId){
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    .then((response) => {
        let posts = response.data
            document.getElementById("big-child").innerHTML = ""
        for(i=0; i<posts.length; i++){
            document.getElementById("big-child").innerHTML += `
            <div class="p" id="p">
                <h2 id="para">${posts[i].title}</h2>
                <hr>
                <p>${posts[i].body}</p>
            </div>
            `
        }
    })

}
function users(){
    return new Promise(function(resolve , reject){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            let users = response.data
            document.getElementById("small-child").innerHTML = ""
            for(i=0; i< users.length; i++){
            document.getElementById("small-child").innerHTML += `
            <div class="p" id="p" onclick="clicked(${users[i].id} , this)">
                <h2 id="para">${users[i].name}</h2>
                <hr>
                <p>${users[i].email}</p>
            </div>
            `
            }
            resolve()
        })
        .catch((error) => {
            console.log("error")
            reject(error)
        })
    });
}

function clicked(id , el){
    posts(id)
    let selects = document.getElementsByClassName("select")
    for(i=0; i< selects.length; i++){
        selects[i].classList.remove("select")
    }
    document.getElementById("big-child").addEventListener("click" , function(){
        el.classList.remove("select")
    })
    el.classList.add("select")
}
users().then(() => {
    posts(1)
})
// function posts(userId){
//     let request = new XMLHttpRequest()
//     request.open("GET" , `https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     request.responseType = "json"
//     request.send()
//     request.onload = function(){
//         document.getElementById("big-child").innerHTML = ""
//         if(request.status >= 200 && request.status < 300){
//             let posts = request.response
//             for(i=0; i<posts.length; i++){
//             document.getElementById("big-child").innerHTML += `
//             <div class="p" id="p">
//                 <h2 id="para">${posts[i].title}</h2>
//                 <hr>
//                 <p>${posts[i].body}</p>
//             </div>
//             `
//             }
//         }
//     }
// }
// function users(id){
//     let request = new XMLHttpRequest()
//     request.open("GET" , `https://jsonplaceholder.typicode.com/users`)
//     request.responseType = "json"
//     request.send()
//     request.onload = function(){
//         document.getElementById("small-child").innerHTML = ""
//         if(request.status >= 200 && request.status < 300){
//             let users = request.response
//             for(i=0; i<users.length; i++){
//             document.getElementById("small-child").innerHTML += `
//             <div class="p" id="p" onclick="clicked(${users[i].id}, this)">
//                 <h2 id="para">${users[i].name}</h2>
//                 <hr>
//                 <p>${users[i].email}</p>
//             </div>
//             `
//             }
//         }
//     }
// }
// function clicked(id , el){
//     posts(id)
//     let selects = document.getElementsByClassName("select")    
//     for(i=0 ; i<selects.length; i++){
//         selects[i].classList.remove("select")
//     }
//     el.classList.add("select")
// }

// document.getElementById("big-child").onclick = function(ev){
//     let selects = document.getElementsByClassName("select")  
//     for(i=0 ; i<selects.length; i++){
//         selects[i].classList.remove("select")
//     }
// }


// function posts(userId){
//     let request = new XMLHttpRequest() 
//     request.open("GET" , "https://jsonplaceholder.typicode.com/posts?userId=" + userId)
//     request.responseType = "json"
//     request.send()
//     request.onload = function(){
//         document.getElementById("big-child").innerHTML = ""
//         if(request.status >=200 && request.status < 300){
//             let posts = request.response
//             for(i=0; i<posts.length; i++){
//             document.getElementById("big-child").innerHTML += `
//             <div class="p" id="p">
//                 <h2 id="para">${posts[i].title}</h2>
//                 <hr>
//                 <p>${posts[i].body}</p>
//             </div>
//             `
//             }
//         }
//     }
// }
// function users(){
//     let request = new XMLHttpRequest() 
//     request.open("GET" , "https://jsonplaceholder.typicode.com/users")
//     request.responseType = "json"
//     request.send()
//     request.onload = function(){
//         document.getElementById("small-child").innerHTML = ""
//         if(request.status >=200 && request.status < 300){
//             let users = request.response
//             for(i=0; i< users.length; i++){
//             document.getElementById("small-child").innerHTML += `
//             <div class="p" id="p" onclick="clicked(${users[i].id} , this)">
//                 <h2 id="para">${users[i].name}</h2>
//                 <hr>
//                 <p>${users[i].email}</p>
//             </div>
//             `
//             }
//         }
//     }
// }
// function posts(userId){
//     fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
//     .then((response) => response.json())
//     .then((posts) => {
//         document.getElementById("big-child").innerHTML = ""
//         for(i=0; i<posts.length; i++){
//             document.getElementById("big-child").innerHTML += `
//             <div class="p" id="p">
//                 <h2 id="para">${posts[i].title}</h2>
//                 <hr>
//                 <p>${posts[i].body}</p>
//             </div>
//             `
//             }
        
//     });
// }
// function users(){
//     return new Promise(function(resolve , reject){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {
//             if(response.ok){
//                 return response.json()
//             }else{
//                 alert("Error")
//             }
//         })
//         .then((users) => {
//             document.getElementById("small-child").innerHTML = ""
//             for(i=0; i< users.length; i++){
//             document.getElementById("small-child").innerHTML += `
//             <div class="p" id="p" onclick="clicked(${users[i].id} , this)">
//                 <h2 id="para">${users[i].name}</h2>
//                 <hr>
//                 <p>${users[i].email}</p>
//             </div>
//             `
//             }
//             resolve()
//         });
//     })
// }

// function clicked(id , el){
//     posts(id)
//     let selects = document.getElementsByClassName("select")
//     for(i=0; i< selects.length; i++){
//         selects[i].classList.remove("select")
//     }
//     el.classList.add("select")
// }
// users().then(() => {
//     posts(1)
// })




