const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const formKey = 'feedback-form-state';

form.addEventListener('input', handleInput);
function handleInput(e) {
  if (!e.target.name) {
    return;
  }
  formData[e.target.name] = e.target.value;
  localStorage.setItem(formKey, JSON.stringify(formData));
}
document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
function handleDOMContentLoaded() {
  const savedData = localStorage.getItem(formKey);

  if (!savedData) {
    return;
  }
  const userData = JSON.parse(savedData);
  form.elements.email.value = userData.email || '';
  form.elements.message.value = userData.message || '';

  formData.email = userData.email || '';
  formData.message = userData.message || '';
}
form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(formKey);
  formData.email = '';
  formData.message = '';
  form.reset();
}
