
const timelabel = document.getElementById("timelabel");

function updateLabel() {
    //window.location.reload();
    console.log("refresh");
}

setInterval(updateLabel, 80000);
  const date = new Date();
  let hours =  24 - date.getHours();
  timelabel.textContent = 98 - date.getDate() + " TAGE UND " + hours + " STUNDEN NOCH!";

