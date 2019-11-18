function calculateLeave() {

  const baseEntitlement = document.querySelector('input[name="service-length"]:checked').value;
  const weeklyHours = document.getElementById('contracted-hours').value;
  let daysRemaining = document.getElementById('days-remaining').value;

  if (daysRemaining.length == 0) {
    daysRemaining = 365;
  }

  const fte = weeklyHours / 37.5;
  const entitlementDays = ((daysRemaining / 365) * fte * baseEntitlement);
  const entitlementHours = entitlementDays * 7.5;

  document.getElementById('result-days').innerHTML = entitlementDays.toFixed(2);
  document.getElementById('result-hours').innerHTML = entitlementHours.toFixed(2);
  document.getElementById('result-fte').innerHTML = fte.toFixed(2);
}







function addEventListenerIfElementExists(elementId, eventType, eventFunction) {
  const element = document.getElementById(elementId);

  if (element != null) {
    element.addEventListener(eventType, eventFunction);
  }
}

function registerListeners() {
  addEventListenerIfElementExists("calculate-button", "click", calculateLeave);
}

window.addEventListener("load", registerListeners);
