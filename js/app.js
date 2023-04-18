const endDate = "31 December 2023 12:00:00 AM";

document.querySelector("#end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
//   console.log(diff);

  if(diff < 0) return;

  // converted into days--
  inputs[0].value = Math.floor(diff / 3600 / 24);
  // converted into hours--
  inputs[1].value = Math.floor(diff / 3600) % 24;
  // converted into minutes--
  inputs[2].value = Math.floor(diff / 60) % 60;
//   converted into seconds--
  inputs[3].value = Math.floor(diff) % 60;
}

// initial call--
clock();

/*
-> 1day = 24hours
-> 1hour = 60minutes
-> 60hour = 3600seconds
*/

setInterval(() => {
    clock();
}, 1000);