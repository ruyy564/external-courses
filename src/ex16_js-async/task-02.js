const debounce = (callback, ms) => {
  let isCooldown = false;

  return () => {
    if (isCooldown) return;

    isCooldown = true;
    setTimeout(() => {
      callback.apply(this);
      isCooldown = false;
    }, ms);
  };
};

const writeInInput = (span, input) => () => {
  const currentSpan = span;
  currentSpan.innerHTML = input.value;
};

const input = document.querySelector('input');
const span = document.querySelector('span');
const debounceWrite = debounce(writeInInput(span, input), 1000);

input.addEventListener('input', () => {
  debounceWrite();
});
