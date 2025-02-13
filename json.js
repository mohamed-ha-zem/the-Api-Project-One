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




