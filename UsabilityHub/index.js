function changeUniversalStyles() {
  // Get all elements in the document
  var allElements = document.querySelectorAll("*");
  let obj = document.getElementById("dm");
  switch (obj.textContent) {
    case "Dark Mode":
      allElements.forEach(function (element) {
        element.style.backgroundColor = "black";
        element.style.color = "white";
      });
      obj.textContent = "Normal Mode";
      obj.transform.rotate = "rotate(360deg)";
      break;
    case "Normal Mode":
      allElements.forEach(function (element) {
        element.style.backgroundColor = "white";
        element.style.color = "black";
      });
      obj.textContent = "Dark Mode";

    default:
      break;
  }
}
