import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = "feedback-form-state";

form.addEventListener("submit", onSubmitButtonPressed);
emailInput.addEventListener("input", throttle(saveMessageToLocalStorage, 500));
messageInput.addEventListener("input", throttle(saveMessageToLocalStorage, 500));

restoreMessageFromLocalStorage();

function saveMessageToLocalStorage() {
    const state = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(storageKey, JSON.stringify(state));
}

function restoreMessageFromLocalStorage() {
  const state = JSON.parse(localStorage.getItem(storageKey));
  if (state) {
    emailInput.value = state.email || "";
    messageInput.value = state.message || "";
  }
}

function clearStateFromLocalStorage() {
  localStorage.removeItem(storageKey);
}

function onSubmitButtonPressed(evt) {
  evt.preventDefault();

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  clearStateFromLocalStorage();
  emailInput.value = "";
  messageInput.value = "";
}