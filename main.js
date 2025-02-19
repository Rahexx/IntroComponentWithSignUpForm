const form = document.querySelector('.form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.querySelectorAll('.form__input').forEach((input) => {
    const formField = input.closest('.form__field');

    if (
      !input.value.trim() ||
      (input.name === 'email' && !emailRegex.test(input.value.trim()))
    ) {
      formField.classList.add('form__field--error');
    } else {
      formField.classList.remove('form__field--error');
    }
  });
});
