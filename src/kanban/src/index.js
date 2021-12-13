import './styles.css';
import './header/createProfileDropDown.js';
import './main/createStartBlocklist.js';
import {getKey,replaceInputWithTask,loadArrayDataInLocalStorage,setStartTasksBeforeWork} from './main/createNewList';

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

  
window.onclick = (event) => {
  const input = document.getElementById('input-task');
  const dropdown = document.getElementById('dropdown-task');
  const list = document.getElementById('profile-list');
  const imageArrow = document.getElementById('img-arrow');

  if (!event.target.matches('.button-profile')) {
    if (!event.target.matches('img')) {
      if (!event.target.matches('div')) {
        if (list != null) {
          list.remove();
          imageArrow.src = 'assets/arrow_down.svg';
        }
      }
    }
  }
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