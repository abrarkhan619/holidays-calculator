function calculateEntitlement() {

  const baseEntitlement = document.querySelector('input[name="service-length"]:checked').value;
  const weeklyHours = document.getElementById('contracted-hours').value;
  let bankHolidays = document.getElementById('bank-holidays').value;

  const startDay = document.getElementById('start-day').value;
  const startMonth = document.getElementById('start-month').value - 1;
  const startYear = document.getElementById('start-year').value;

  const startDate = new Date(startYear, startMonth, startDay);
  const oneDay = 1000 * 60 * 60 * 24;
  let endYear = startDate.getFullYear();

  if (startDate.getMonth() >= 3) {
    endYear++;
  }

  const endDate = new Date(endYear, 3, 1);
  const dateDifference = Math.ceil((endDate - startDate) / oneDay);
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







function addEventListenerIfElementExists(elementId, eventType, eventFunction) {
  const element = document.getElementById(elementId);

  if (element != null) {
    element.addEventListener(eventType, eventFunction);
  }
}

function registerListeners() {
  addEventListenerIfElementExists("calculate-button", "click", calculateEntitlement);
}

window.addEventListener("load", registerListeners);
