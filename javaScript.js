let name = prompt("lütfen adınızı giriniz: ")
let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} <small style="color:#e98208 "> ${name}</small>`

function showTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = today.getDay();

  switch(day){
  case 1:
  day = "Pazartesi";
  break;

  case 2:
  day = "salı";
  break;

  case 3:
  day ="çarşamba";
  break;

  case 4:
  day = "perşembe";
  break;

  case 5:
  day = "cuma";
  break;

  case 6:
  day = "cumartesi";
  break;

  case 7:
  day = "pazar";
  break;
}
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + day;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;
  

  setTimeout(showTime, 1000);
}
showTime();




