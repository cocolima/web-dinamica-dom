function randomBagel() {
  const MAX_IMG = 6;
  const MIN_IMG = 1;
  randomNum = Math.floor(Math.random() * (MAX_IMG - MIN_IMG + 1) + MIN_IMG);
  document.getElementById("randomBagel").src = `/public/bagel0${[randomNum]}.jpg`;
}
document.getElementById("randomBagel").addEventListener("click", randomBagel);

//averiguar cuantas filas hay
console.log(document.getElementsByTagName("tr").length);
//las filas van en el ultimo lugar del padre table

function tableAddRow() {
  newRow = document.createElement("tr");
  newRow.innerHTML = "<tr> <td> columna nueva</td><td>columnata nueva</td><td>columnata nueva</td><td>columnata nueva</td></tr>";
  placeNewRow = document.getElementById("table");
  placeNewRow.appendChild(newRow);
  //averiguar cuantas filas hay
console.log(document.getElementsByTagName("tr").length);
}
document.getElementById("tableButton").addEventListener("click", tableAddRow);
