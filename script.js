function bodyscroller() {
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
}
bodyscroller();





function scrollNumbers() {
  const button1 = document.getElementById('buttons-1');
  const button2 = document.getElementById('buttons-2');
  const flexDiv = document.getElementById('scroller');

  const labelWidth = 100;
  const numLabelsToShow = 3;
  const scrollDistance = labelWidth * numLabelsToShow;

  button1.addEventListener('click', () => {
    flexDiv.scrollLeft += scrollDistance;
  });

  button2.addEventListener('click', () => {
    flexDiv.scrollLeft -= scrollDistance;
  });
}

scrollNumbers();




const button1 = document.getElementById('button-1');
  const button2 = document.getElementById('button-2');
  const flexDiv = document.getElementById('off-img');

  const labelWidth = 100;
  const numLabelsToShow = 2;
  const scrollDistance = labelWidth * numLabelsToShow;

  button1.addEventListener('click', () => {
    flexDiv.scrollLeft += scrollDistance;
  });

  button2.addEventListener('click', () => {
    flexDiv.scrollLeft -= scrollDistance;
  });


