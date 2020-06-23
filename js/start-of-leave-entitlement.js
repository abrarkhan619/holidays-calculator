function showHideStartDate() {
  const startDateInputField = document.getElementById('start-date-input');
  const startDateCurrentYear = document.getElementById('startdate-opt1');
  const startDateInputDate = document.getElementById('startdate-opt2');

  if (startDateCurrentYear.checked == true){
    startDateInputField.style.display = "none";
  } else if (startDateInputDate.checked == true){
    startDateInputField.style.display = "block";
  }
}

function storeInput() {

  const useInputStartDate = document.getElementById('startdate-opt2').checked;
  const useDefaultStartDate = document.getElementById('startdate-opt1').checked;

  if (useInputStartDate) {
    let startDay = document.getElementById('start-day').value;
    let startMonth = document.getElementById('start-month').value - 1;
    let startYear = document.getElementById('start-year').value;

    const startDate = new Date(Date.UTC(startYear, startMonth, startDay));
    sessionStorage.setItem('startDate', startDate);

  } else if (useDefaultStartDate) {
    const startYear = new Date().getFullYear();
    const startDate = new Date(Date.UTC(startYear, 3, 1));
    sessionStorage.setItem('startDate', startDate);


  }

  window.location.assign("./end-of-leave-entitlement.html");
}

function goBack() {
  window.history.back();
}


function registerListeners() {
  const continueButton = document.getElementById("continue-button");
  continueButton.addEventListener("click", storeInput);

  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", goBack);

  const showDateInput = document.getElementById("startdate-opt2");
  showDateInput.addEventListener("click", showHideStartDate);

  const hideDateInput = document.getElementById("startdate-opt1");
  hideDateInput.addEventListener("click", showHideStartDate);

}

window.addEventListener("load", registerListeners);
