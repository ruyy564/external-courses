const boardsMocks = [
  {
    title: 'backlog',
    issues: [
      {
        id: 'task1',
        name: 'Sleep',
      },
    ],
  },
  {
    title: 'ready',
    issues: [
      {
        id: 'task1',
        name: 'Lunch',
      },
    ],
  },
  {
    title: 'inProgress',
    issues: [
      {
        id: 'task1',
        name: 'Nervous breakdown',
      },
    ],
  },
  {
    title: 'finished',
    issues: [
      {
        id: 'task1',
        name: 'Visit to the psychiatric hospital',
      },
    ],
  },
];
const key = getKey(boardsMocks);
const buttonBacklog = document.getElementById('button-backlog');
const buttonReady = document.getElementById('button-ready');
const buttonInProgress = document.getElementById('button-inProgress');
const buttonFinished = document.getElementById('button-finished');
const arrayButtons = [buttonBacklog, buttonReady, buttonInProgress, buttonFinished];

loadArrayDataInLocalStorage(boardsMocks);
setStartTasksBeforeWork(key, arrayButtons);
buttonBacklog.addEventListener('click', addInput);
buttonReady.addEventListener('click', createDropdown);
buttonInProgress.addEventListener('click', createDropdown);
buttonFinished.addEventListener('click', createDropdown);
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
