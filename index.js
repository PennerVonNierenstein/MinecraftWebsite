function refresh_clock() {
  let jetzt = new Date();
  let month = jetzt.getMonth() + 1;
  let day = jetzt.getDate();
  let hour = jetzt.getHours();
  let minutes = jetzt.getMinutes();
  let seconds = jetzt.getSeconds();
  let monthlist = [31,30,23];
  let remaining_month = 0;
  let showmonth;
  const check = document.getElementById("monthshow");


  if(check.checked){
    showmonth = true;
  }

  let display = monthlist[month - 6];

  let remain = "";
  let monthgroup = 0;



  if(monthlist[month - 5] !== undefined){
   display = display + monthlist[month - 5];

  }

  if(monthlist[month - 4] !== undefined){
   display = display + monthlist[month - 4];

  } 

  if((display - day) - 30 > 1){
     remain = "1 Monat ";
    monthgroup = 30;
  }

  if((display - day) - 60 > 1){
     remain = "2 Monate ";
     monthgroup = 60;
  }
  
  if(showmonth == true){
  display = remain + String((display - day) - monthgroup) + " Tage: " + String(24 - hour) + ":" + String((60 - minutes) + 7) + ":" + String(60 - seconds);
  }
  else{
  display = String(display - day) + " Tage: " + String(24 - hour) + ":" + String(60 - minutes) + ":" + String(60 - seconds);
  }

  updateLabel("UHR", display);
}

function updateLabel(obj, content) {
  document.getElementById(obj).innerHTML = content;
}

setInterval(refresh_clock, 500);

//jetzt.getMonth() + 1