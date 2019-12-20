function storeInput() {

  const weeklyHours = document.getElementById('contracted-hours').value;

  sessionStorage.setItem('contractedHours', weeklyHours);

  if (weeklyHours < 37.5) {
    window.location.assign("/questions/bank-holidays-in-leave-period.html");
  } else {
    window.location.assign("/output.html");
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
