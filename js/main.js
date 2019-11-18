function calculateLeave() {

  const baseEntitlement = document.querySelector('input[name="service-length"]:checked').value;
  const weeklyHours = document.getElementById('contracted-hours').value;

  const fte = weeklyHours / 37.5;

  document.getElementById('result-fte').innerHTML = fte.toFixed(2);
  document.getElementById('result-days').innerHTML = (fte * baseEntitlement).toFixed(2);
  document.getElementById('result-hours').innerHTML = (fte * baseEntitlement * 7.5).toFixed(2);

  console.log(baseEntitlement * weeklyHours);
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
