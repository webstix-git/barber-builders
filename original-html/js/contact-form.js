(() => {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const alertBox = form.querySelector('.form-alert');
  const fields = [...form.querySelectorAll('[required]')];
  let submitted = false;

  form.noValidate = true;

  // Service page links pass ?project=... so the matching project type is preselected.
  const project = new URLSearchParams(location.search).get('project');
  const projectSelect = form.querySelector('#project');
  if (project && projectSelect) {
    const option = [...projectSelect.options].find((o) => o.text === project);
    if (option) projectSelect.value = option.value;
  }

  const messageFor = (field) => {
    if (field.validity.typeMismatch) return 'Please enter a valid email address.';
    return field.dataset.error;
  };

  const errorFor = (field) => {
    const id = `${field.id}-error`;
    let error = document.getElementById(id);
    if (!error) {
      error = document.createElement('p');
      error.className = 'form-error';
      error.id = id;
      field.closest('.form-field').append(error);
    }
    return error;
  };

  const check = (field) => {
    const valid = field.checkValidity();
    const error = errorFor(field);
    error.textContent = valid ? '' : messageFor(field);
    error.hidden = valid;
    if (valid) {
      field.removeAttribute('aria-invalid');
      field.removeAttribute('aria-describedby');
    } else {
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', error.id);
    }
    return valid;
  };

  const showAlert = (invalid) => {
    if (!invalid.length) {
      alertBox.hidden = true;
      return;
    }
    const empty = fields.every((field) => !field.value.trim());
    const message = empty
      ? 'Please fill out the form before sending. Fields marked with an asterisk (*) are required.'
      : `Please complete the ${invalid.length === 1 ? 'highlighted field' : `${invalid.length} highlighted fields`} below before sending.`;
    // Rewriting identical text would make screen readers re-announce the alert on every keystroke.
    if (alertBox.textContent !== message) alertBox.textContent = message;
    alertBox.hidden = false;
  };

  form.addEventListener('submit', (event) => {
    submitted = true;
    const invalid = fields.filter((field) => !check(field));
    showAlert(invalid);
    if (!invalid.length) {
      // The mailto action hands the message to the email app without leaving the page, so show the thank-you page next.
      setTimeout(() => {
        location.href = 'thank-you.html';
      }, 600);
      return;
    }
    event.preventDefault();
    invalid[0].focus({ preventScroll: true });
    alertBox.scrollIntoView({ block: 'center' });
  });

  fields.forEach((field) => {
    const update = () => {
      if (!submitted) return;
      check(field);
      showAlert(fields.filter((f) => !f.checkValidity()));
    };
    field.addEventListener('input', update);
    field.addEventListener('change', update);
  });
})();
