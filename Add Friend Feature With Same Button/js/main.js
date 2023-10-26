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
  }else{
    add
  }
})

remove.addEventListener("click", function(){

})