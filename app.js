var count = 0;
var val = "0x64";

function clicker() {
  while (count <= parseInt(val)) {
    const divN = document.getElementById("insert");
    paragraph = document.createElement("p");
    text = document.createTextNode(`Number: ${count}`);
    paragraph.appendChild(text);
    divN.appendChild(paragraph);
    paragraph.setAttribute("id", "pgrap");
    count++;
  }
  setTimeout(() => {
    location.reload();
  }, 3000);
}
