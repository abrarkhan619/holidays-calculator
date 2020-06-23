function storeInput() {

  const calculateFullYear = document.getElementById('calculate-opt1').checked;

  sessionStorage.setItem('fullYear', calculateFullYear);

  const startYear = new Date().getFullYear();

  const startDate = new Date(Date.UTC(startYear, 3, 1));
  sessionStorage.setItem('startDate', startDate);

  const endDate = new Date(Date.UTC(startYear + 1, 2, 31));
  sessionStorage.setItem('endDate', endDate);

  if (calculateFullYear == true) {
  window.location.assign("./questions/length-of-nhs-service.html");
  } else {
    window.location.assign("./questions/start-of-leave-entitlement.html");
  }
}

function goBack() {
  window.history.back();
}

function registerListeners() {
  const continueButton = document.getElementById("continue-button");
  continueButton.addEventListener("click", storeInput);

  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", goBack);
}

window.addEventListener("load", registerListeners);
