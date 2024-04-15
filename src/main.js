document.addEventListener("DOMContentLoaded", () => {
  const inputBill = document.querySelector(".inputBill");
  const inputPeople = document.querySelector(".inputPeople");
  const tipButton = document.querySelectorAll(".tipButton");
  const tipButtonCustom = document.querySelector(".tipButtonCustom");
  const tipDollar = document.querySelector(".tip_dollar");
  const totalDollar = document.querySelector(".total_dollar");
  const resetButton = document.querySelector(".resetButton");
  const errorMsg = document.querySelectorAll(".errorMsg");
  const errorPeople = document.getElementById("errorPeople");
  const errorBill = document.getElementById("errorBill");

  tipButton.forEach((button) => {
    button.addEventListener("click", getBill);
    button.addEventListener("click", showError);
    button.addEventListener("click", tipButtonClicked);
  });

  tipButtonCustom.addEventListener("input", getBillCustom);
  tipButtonCustom.addEventListener("click", getBillCustomClicked);
  tipButtonCustom.addEventListener("input", getBillCustomShowError);

  inputBill.addEventListener("input", removeErrorInput);
  inputPeople.addEventListener("input", removeErrorInput);

  resetButton.addEventListener("click", resetInput);

  inputBill.addEventListener("input", resetButtonActive);
  inputPeople.addEventListener("input", resetButtonActive);

  function getBill(event) {
    let tipPercentage = event ? event.target.value : document.querySelector(".tipButton-active").value;
    let tipAmount = inputBill.value * (tipPercentage / 100);
    let totalBill = parseFloat(inputBill.value) + tipAmount;
    let tipAmountPerPerson = tipAmount / inputPeople.value;
    let totalBillPerPerson = totalBill / inputPeople.value;

    tipDollar.innerHTML = tipAmountPerPerson.toFixed(2);
    totalDollar.innerHTML = totalBillPerPerson.toFixed(2);
  }

  function showError() {
    if (inputBill.value == "" && inputPeople.value == "") {
      inputBill.classList.add("inputBill-active");
      inputPeople.classList.add("inputPeople-active");
      errorMsg.forEach((error) => {
        error.classList.add("errorMsg-active");
        error.innerHTML = "Can't be zero";
      });
      tipDollar.innerHTML = "$0.00";
      totalDollar.innerHTML = "$0.00";
    } else if (inputBill.value >= 0 && inputPeople.value >= 0) {
      inputBill.classList.remove("inputBill-active");
      inputPeople.classList.remove("inputPeople-active");
      errorMsg.forEach((error) => {
        error.classList.remove("errorMsg-active");
        error.innerHTML = "";
      });
    }

    if (inputBill.value >= 0 && inputPeople.value == "") {
      inputPeople.classList.add("inputPeople-active");
      errorPeople.classList.add("errorMsg-active");
      errorPeople.innerHTML = "Can't be zero";
      tipDollar.innerHTML = "$0.00";
      totalDollar.innerHTML = "$0.00";
    } else {
      inputPeople.classList.remove("inputPeople-active");
      errorPeople.classList.remove("errorMsg-active");
      errorPeople.innerHTML = "";
    }

    if (inputPeople.value >= 0 && inputBill.value == "") {
      inputBill.classList.add("inputBill-active");
      errorBill.classList.add("errorMsg-active");
      errorBill.innerHTML = "Can't be zero";
      tipDollar.innerHTML = "$0.00";
      totalDollar.innerHTML = "$0.00";
    } else {
      inputBill.classList.remove("inputBill-active");
      errorBill.classList.remove("errorMsg-active");
      errorBill.innerHTML = "";
    }
  }

  function tipButtonClicked(event) {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains("tipButton-active")) {
      tipButton.forEach((button) => {
        button.classList.remove("tipButton-active");
      });
    }
    clickedElement.classList.add("tipButton-active");
  }

  function getBillCustom() {
    let tipAmount = inputBill.value * (tipButtonCustom.value / 100);
    let totalBill = parseFloat(inputBill.value) + tipAmount;
    let tipAmountPerPerson = tipAmount / inputPeople.value;
    let totalbillPerPerson = totalBill / inputPeople.value;

    tipDollar.innerHTML = tipAmountPerPerson.toFixed(2);
    totalDollar.innerHTML = totalbillPerPerson.toFixed(2);
  }

  function getBillCustomClicked() {
    tipButton.forEach((button) => {
      button.classList.remove("tipButton-active");
    });
  }

  function getBillCustomShowError() {
    if (inputBill.value >= 0 && inputPeople.value == "") {
      inputPeople.classList.add("inputPeople-active");
      errorPeople.classList.add("errorMsg-active");
      errorPeople.innerHTML = "Can't Be Zero";
      tipDollar.innerHTML = "$0.00";
      totalDollar.innerHTML = "$0.00";
    } else {
      inputPeople.classList.remove("inputPeople-active");
      errorPeople.classList.remove("errorMsg-active");
      errorPeople.innerHTML = "";
    }

    if (inputPeople.value >= 0 && inputBill.value == "") {
      inputBill.classList.add("inputBill-active");
      errorBill.classList.add("errorMsg-active");
      errorBill.innerHTML = "Can't Be Zero";
      tipDollar.innerHTML = "$0.00";
      totalDollar.innerHTML = "$0.00";
    } else {
      inputBill.classList.remove("inputBill-active");
      errorBill.classList.remove("errorMsg-active");
      errorBill.innerHTML = "";
    }
  }

  function removeErrorInput() {
    if (inputBill.value > 0 || inputPeople.value > 0) {
      inputBill.classList.remove("inputBill-active");
      inputPeople.classList.remove("inputPeople-active");
      errorMsg.forEach((error) => {
        error.classList.remove("errorMsg-active");
        error.innerHTML = "";
      });
      tipButton.forEach((button) => {
        button.classList.remove("tipButton-active");
      });
    }
  }

  function resetInput() {
    inputBill.value = "";
    inputPeople.value = "";
    tipButtonCustom.value = "";
    tipDollar.innerHTML = "$0.00";
    totalDollar.innerHTML = "$0.00";

    if (inputBill.value == 0 && inputPeople.value == 0) {
      resetButton.classList.remove("resetButton-active");
    }

    tipButton.forEach((button) => {
      button.classList.remove("tipButton-active");
    });

    inputBill.classList.remove("inputBill-active");
    inputPeople.classList.remove("inputPeople-active");

    errorMsg.forEach((error) => {
      error.classList.remove("errorMsg-active");
      error.innerHTML = "";
    });
  }

  if (inputBill.value >= 0 && inputPeople.value >= 0) {
    resetButton.classList.add("resetButton-active");
  }

  getBill();

  function resetButtonActive() {
    resetButton.classList.add("resetButton-active");
  }
});
