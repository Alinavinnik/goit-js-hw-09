const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const formKey = 'feedback-form-state';

form.addEventListener('input', handleInput);
function handleInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(formKey, JSON.stringify(formData));
}
document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
function handleDOMContentLoaded() {
  const userData = JSON.parse(localStorage.getItem(formKey)) || {};
  form.elements.email.value = userData.email ?? '';
  form.elements.message.value = userData.message ?? '';
}
form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(formKey);
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  form.reset();
}
