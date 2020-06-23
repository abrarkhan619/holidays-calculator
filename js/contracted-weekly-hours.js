function storeInput() {

  const weeklyHours = document.getElementById('contracted-hours').value;

  sessionStorage.setItem('contractedHours', weeklyHours);

  if (weeklyHours < 37.5) {
    window.location.assign("./bank-holidays-in-leave-period");
  } else {
    window.location.assign("/annual-leave-calculator/output");
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
