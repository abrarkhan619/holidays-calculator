function storeInput() {

  const baseEntitlement = document.querySelector('input[name="service-length"]:checked').value;

  sessionStorage.setItem('entitlement', baseEntitlement);
  console.log(sessionStorage.getItem('fullYear'));
  console.log(sessionStorage.getItem('entitlement'));

  window.location.assign("./contracted-weekly-hours.html");

}

function goBack() {
  window.history.back();
}

function registerListeners() {
  const continueButton = document.getElementById("continue-button");
  continueButton.addEventListener("click", storeInput);

  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", goBack)
}

window.addEventListener("load", registerListeners);
