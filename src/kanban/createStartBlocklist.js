createNewList('finished');
createNewList('inProgress');
createNewList('ready');
createNewList('backlog');
disableButton();
window.onclick = (event) => {
    const input = document.getElementById('input-task');
    const dropdown = document.getElementById('dropdown-task');
  
    if (input != null) {
      if (input !== document.activeElement) {
        if (input.value !== '') {
          replaceInputWithTask(input);
        } else {
          input.remove();
        }
      }
    }
  
    if (dropdown != null) {
      const content = event.target.parentNode.childNodes;
  
      if (content[content.length - 3] !== dropdown) {
        if (!event.target.matches('.li-task')) {
          dropdown.remove();
        }
      }
    }
  };
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const input = document.getElementById('input-task');
  
      if (input != null) {
        if (input.value !== '') {
          replaceInputWithTask(input);
        } else {
          input.remove();
        }
      }
    }
  });