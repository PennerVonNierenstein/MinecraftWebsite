
const timelabel = document.getElementById("timelabel");

function updateLabel() {
    window.location.reload();
}

setInterval(updateLabel, 30000);
  const date = new Date();
  let hours =  24 - date.getHours();
  timelabel.textContent = 98 - date.getDate() + " TAGE UND " + hours + " STUNDEN NOCH!";

