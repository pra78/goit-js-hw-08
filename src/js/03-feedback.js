/*
В 3 - коли в тебе є форма тобі не потрібно вішати на кожен 
інпут подію, ти можешь просто повісити подію на форму.
+ в тому що ти отримуєш 1 елемент с дому і більше гнучко 
можешь розробляти інтерфейс, наприклад в майбутньому в тебе 
зʼявиться додатковий інпут. І тобі не потрібно буде вішати 
обробник на нього бо він на формі.
Перероби на подію інпут на формі."
*/

import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.email
const messageInput = form.message
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