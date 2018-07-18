var modal = document.querySelector(".modal");
document.querySelector("#OpenModal").onclick = function(){
  modal.style.display = "flex";
}
document.querySelector("#CloseModal").onclick = function(){
  modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}