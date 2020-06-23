function storeInput() {

  let bankHolidays = document.getElementById('bank-holidays').value;

  if (bankHolidays.length == 0) {
    bankHolidays = 8;
  }

  sessionStorage.setItem('bankHolidays', bankHolidays);

  window.location.assign("/annual-leave-calculator/output");
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
