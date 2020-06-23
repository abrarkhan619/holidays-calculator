function showHideEndDate() {
  const endDateInputField = document.getElementById('end-date-input');
  const endDateCurrentYear = document.getElementById('enddate-opt1');
  const endDateInputDate = document.getElementById('enddate-opt2');

  if (endDateCurrentYear.checked == true){
    endDateInputField.style.display = "none";
  } else if (endDateInputDate.checked == true){
    endDateInputField.style.display = "block";
  }
}

function storeInput() {

  const useInputEndDate = document.getElementById('enddate-opt2').checked;

  if (useInputEndDate) {
    let endDay = document.getElementById('end-day').value;
    let endMonth = document.getElementById('end-month').value - 1;
    let endYear = document.getElementById('end-year').value;

    const endDate = new Date(Date.UTC(endYear, endMonth, endDay));
    sessionStorage.setItem('endDate', endDate);
  }

  window.location.assign("./length-of-nhs-service.html");
}

function goBack() {
  window.history.back();
}


function registerListeners() {
  const continueButton = document.getElementById("continue-button");
  continueButton.addEventListener("click", storeInput);

  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", goBack);

  const showDateInput = document.getElementById("enddate-opt2");
  showDateInput.addEventListener("click", showHideEndDate);

  const hideDateInput = document.getElementById("enddate-opt1");
  hideDateInput.addEventListener("click", showHideEndDate);

}

window.addEventListener("load", registerListeners);
