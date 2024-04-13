const cardNumberText = document.getElementById("card-number");
const holderNameText = document.getElementById("holder-name-text");
const expirationDate = document.getElementById("exp-date");
const cvcText = document.getElementById("cvc-text");
const cardForm = document.getElementById("card-form");
const holderNameInput = document.getElementById("holder-name-input");
const holderError = document.getElementById("holder-error");
const holderCardNumberInput = document.getElementById("card-number-input");
const cardNumberError = document.getElementById("number-error");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dateError = document.getElementById("date-error");
const cvcInput = document.getElementById("cvc");
const cvcError = document.getElementById("cvc-error");
const successDialog = document.getElementById("success-dialog");
const continueBtn = document.getElementById("continue-btn");

const nameValidation = () => {
    let isNameValid = true;
    let isNumberValid = true;
    let isDateValid = true;
    let isCvcValid = true;
    let isFormValid;

    const holderName = holderNameInput.value;
    const cvc = cvcInput.value;
    const holderNumber = holderCardNumberInput.value;

    const nameRegex = /[0-9]+/i;
    const numberRegex = /[0-9]+/i;

    if (nameRegex.test(holderName)) {
        holderError.innerText = "Wrong format, text only";
        isNameValid = false;
    } if (!holderName) {
        holderError.innerText = "Can't be blank";
        isNameValid = false;
    }


    if (!numberRegex.test(holderNumber)) {
        cardNumberError.innerText = "Wrong format, numbers only";
        isNumberValid = false;
    }
    if (!holderNumber) {
        cardNumberError.innerText = "Can't be blank";
        isNumberValid = false;
    }

    if (!numberRegex.test(month.value) || !numberRegex.test(year.value)) {
        dateError.innerText = "Wrong format, numbers only";
    }
    if (!month.value || !year.value) {
        dateError.innerText = "Can't be blank";
        isDateValid = false;
    }

    if (!cvc) {
        cvcError.innerText = "Can't be blank";
        isCvcValid = false;
    }

    if (isCvcValid && isDateValid && isNameValid && isNumberValid) {
        isFormValid = true;
    } else {
        isFormValid = false;
    }
    return isFormValid;
}

cardForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nameValidation()) {
        holderNameText.innerText = holderNameInput.value;
        expirationDate.innerText = `${monthInput.value}/${yearInput.value}`;
        cvcText.innerText = cvcInput.value;
        const holderCardNumber = holderCardNumberInput.value.replace(" ", "").match(/.{1,4}/g).join(" ");
        cardNumberText.innerText = holderCardNumber;
        cardForm.classList.add("hidden");
        successDialog.classList.remove("hidden");
    } else {
        alert("Please fill the form properly.");
        return;
    }
})

continueBtn.addEventListener("click", () => {
    successDialog.classList.add("hidden");
    cardForm.classList.remove("hidden");
})
