const changeClassBlueBackground = function() {
  const bodyElement = document.body;
  bodyElement.classList.add("red-background");
};

const attachEvenToChangeColorButton = function() {
  const changeColorButton = document.getElementById("change-background-button");
  changeColorButton.addEventListener("click", function() {
    changeClassBlueBackground();
  });
};
