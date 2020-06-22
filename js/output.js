// function calculateEntitlement(startDate, endDate, fte, baseEntitlement) {
//   const oneDay = 1000 * 60 * 60 * 24;
//   const dateDifference = Math.ceil(((endDate - startDate)) / oneDay)+1;
//   const entitlementDays = Math.round((dateDifference / 365) * fte * baseEntitlement);

//   return entitlementDays;
// }

// module.exports = {calculateEntitlement};

//////////////////////////////////////////////////////////////////////////////////////////////
let bankHolidays = sessionStorage.getItem('bankHolidays');

const startDate = Date.parse(sessionStorage.getItem('startDate'));

const endDate = Date.parse(sessionStorage.getItem('endDate'));

const oneDay = 1000 * 60 * 60 * 24;
const dateDifference = Math.ceil(((endDate - startDate)) / oneDay)+1;

const weeklyHours = sessionStorage.getItem('contractedHours');
const baseEntitlement = sessionStorage.getItem('entitlement');

function calculateEntitlement() {

  if (weeklyHours >= 37.5) {
    bankHolidays = 8
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

///////////////////


window.addEventListener("load", calculateEntitlement);
