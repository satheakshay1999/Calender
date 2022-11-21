const date = new Date();

function getmonth(){
  let selectmonth = document.querySelector('#selectMonth');
  return selectmonth.value;
}

function getyear(){
  let selectyear = document.querySelector('#selectYear');
  return selectyear.value;
}


const renderCalendar = () => {
  date.setDate(1);

 const monthDays = document.querySelector(".days");

   let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".selectMonth").addEventListener("select", () => {
  setmonth(date.getMonth() - 1);
  renderCalendar();
});
Footer