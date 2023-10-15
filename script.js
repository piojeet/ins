let popcontainer = document.getElementById("popcontainer");
let popup = document.querySelector("#popup");
let cancel = document.querySelector("#cancel");
let body = document.getElementsByTagName("body")[0];
function openpopup(e) {
  popcontainer.style.display = "block";
  // body.style.overflow='hidden'
}
popcontainer.addEventListener("click", (e) => {
  if (e.target == popcontainer) popcontainer.style.display = "none";
});
cancel.addEventListener("click", (e) => {
  popcontainer.style.display = "none";
});

