function changeUniversalStyles() {
  // Get all elements in the document
  var allElements = document.querySelectorAll("*");
  let obj = document.getElementById("dm");
  switch (obj.textContent) {
    case "Dark Mode":
      allElements.forEach(function (element) {
        console.log(element);
        element.style.backgroundColor = "black";
        element.style.color = "white";
      });
      obj.textContent = "Normal Mode";
      break;
    case "Normal Mode":
      location.reload();
      obj.textContent = "Dark Mode";

    default:
      break;
  }
}
