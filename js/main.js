function calculateEntitlement() {

  const baseEntitlement = document.querySelector('input[name="service-length"]:checked').value;
  const weeklyHours = document.getElementById('contracted-hours').value;
  let bankHolidays = document.getElementById('bank-holidays').value;

  const startDay = document.getElementById('start-day').value;
  const startMonth = document.getElementById('start-month').value - 1;
  const startYear = parseInt(document.getElementById('start-year').value);

  const endDay = document.getElementById('end-day').value;
  const endMonth = document.getElementById('end-month').value - 1;
  const endYear = document.getElementById('end-year').value;

  let startDate = new Date(startYear, startMonth, startDay);
  let endDate = new Date(endYear, endMonth, endDay);
  const oneDay = 1000 * 60 * 60 * 24;

  const defaultStartDate = document.getElementById('startdate-opt2').checked;

  if (defaultStartDate == true && endDate.getMonth() <= 2) {
    startDate = new Date(endYear-1, 3, 1);
  } else if (defaultStartDate == true && endDate.getMonth() >= 3) {
    startDate = new Date (endYear, 3, 1);
  } else {
    startDate = new Date (startYear, startMonth, startDay);
  }
  console.log(startDate)

  const defaultEndDate = document.getElementById('enddate-opt2').checked;

  if (defaultEndDate == true && startDate.getMonth() >= 3) {
    endDate = new Date(startYear+1, 2, 31);
  } else if (defaultEndDate == true && startDate.getMonth() <= 2) {
    endDate = new Date (startYear, 2, 31);
  } else {
    endDate = new Date (endYear, endMonth, endDay);
  }
  console.log(endDate)

  const dateDifference = Math.ceil(((endDate - startDate) / oneDay)+1);
  console.log(dateDifference);

  if (bankHolidays.length == 0) {
    bankHolidays = 8;
  }

  const fte = weeklyHours / 37.5;
  const entitlementDays = ((dateDifference / 365) * fte * baseEntitlement);
  const entitlementHours = entitlementDays * 7.5;
  const entitlementDaysProRata = fte * bankHolidays;
  const entitlementHoursProRata = entitlementDaysProRata * 7.5;

  document.getElementById('result-days').innerHTML = entitlementDays.toFixed(2);
  document.getElementById('result-hours').innerHTML = entitlementHours.toFixed(2);
  document.getElementById('result-fte').innerHTML = fte.toFixed(2);
  document.getElementById('pro-rata-days').innerHTML = entitlementDaysProRata.toFixed(2);
  document.getElementById('pro-rata-hours').innerHTML = entitlementHoursProRata.toFixed(2);
}


function showHideDate() {

  const startDateInput = document.getElementById('start-date-input');
  const startDateCurrentYear = document.getElementById('startdate-opt1')
  const endDateInput = document.getElementById('end-date-input');
  const endDateCurrentYear = document.getElementById('enddate-opt1');

  if (startDateCurrentYear.checked == true){
    startDateInput.style.display = "block";
  } else {
    startDateInput.style.display = "none";
  }

  if (endDateCurrentYear.checked == true){
    endDateInput.style.display = "block";
  } else {
    endDateInput.style.display = "none";
  }
}



function addEventListenerIfElementExists(elementId, eventType, eventFunction) {
  const element = document.getElementById(elementId);

  if (element != null) {
    element.addEventListener(eventType, eventFunction);
  }
}

function registerListeners() {
  addEventListenerIfElementExists("calculate-button", "click", calculateEntitlement);
  addEventListenerIfElementExists("startdate-opt1", "click", showHideDate)
  addEventListenerIfElementExists("startdate-opt2", "click", showHideDate)
  addEventListenerIfElementExists("enddate-opt1", "click", showHideDate)
  addEventListenerIfElementExists("enddate-opt2", "click", showHideDate)

}

window.addEventListener("load", registerListeners);
