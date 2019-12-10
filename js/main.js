function calculateEntitlement() {

  const baseEntitlement = document.querySelector('input[name="service-length"]:checked').value;
  const weeklyHours = document.getElementById('contracted-hours').value;
  let bankHolidays = document.getElementById('bank-holidays').value;

  let startDay = document.getElementById('start-day').value;
  let startMonth = document.getElementById('start-month').value - 1;
  let startYear = parseInt(document.getElementById('start-year').value);

  const useDefaultStartDate = document.getElementById('startdate-opt2').checked;

  if (useDefaultStartDate) {
    startDay = 1;
    startMonth = 3;
    startYear = 2019; // TODO: get current year programatically.
  }

  const startDate = new Date(Date.UTC(startYear, startMonth, startDay));

  let endDay = document.getElementById('end-day').value;
  let endMonth = document.getElementById('end-month').value - 1;
  let endYear = document.getElementById('end-year').value;

  const useDefaultEndDate = document.getElementById('enddate-opt2').checked;

  if (useDefaultEndDate) {
    endDay = 31;
    endMonth = 2;

    if (startMonth >= 3) {
      endYear = startYear + 1;
    } else {
      endYear = startYear;
    }
  }

  const endDate = new Date(Date.UTC(endYear, endMonth, endDay));

  const oneDay = 1000 * 60 * 60 * 24;
  const dateDifference = Math.ceil(((endDate - startDate) / oneDay)+1);

  //TODO: remove when finished
  console.log(startDate)
  console.log(endDate)
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
