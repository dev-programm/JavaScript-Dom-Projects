let istatus = document.querySelector("h3");
let add = document.querySelector("#addFriend");
let remove = document.querySelector("#removeFriend")
remove.style.display = "none"
let check = 0

add.addEventListener("click", function(){
  if(check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    add.innerHTML = "Remove"
    add.style.backgroundColor = "red"
    add.style.color = "white"
    remove.innerHTML = "Massage"
    remove.style.backgroundColor = "#0866ff"
    remove.style.color = "white"
    remove.style.display = "block"
    check = 1
  }else{
    add.innerHTML = "Add Friend"
    add.style.color = "white"
    add.style.backgroundColor = "#20b2aa"
    remove.style.display = "none"
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"



    check = 0
  }
})



