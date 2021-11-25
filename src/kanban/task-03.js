function createTask(value, key) {
  const p = document.createElement('p');
  const buttonAdd = document.getElementById(`button-${key}`);

  p.className = 'name-task';
  p.innerHTML = value;
  buttonAdd.before(p);
}

function saveTask(key, value) {
  const data = JSON.parse(localStorage.getItem(key));

  data.issues.push({ id: `task${data.issues.length + 1}`, name: value });
  localStorage.setItem(key, JSON.stringify(data));
}

function loadDataInLocalStorage(data) {
  localStorage.setItem(data.title, JSON.stringify(data));
}

function loadArrayDataInLocalStorage(data) {
  for (let i = 0; i < data.length; i += 1) {
    if (localStorage.getItem(data[i].title) === null) {
      loadDataInLocalStorage(data);
    }
  }
}

function downloadDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function downloadArrayDataFromLocalStorage(arrayKey) {
  const data = [];

  for (let i = 0; i < arrayKey.length; i += 1) {
    data.push(downloadDataFromLocalStorage(arrayKey[i]));
  }

  return data;
}

function addTasksToBlock(key, tasks) {
  let task;

  for (let i = 0; i < tasks.length; i += 1) {
    task = document.getElementById(tasks[i].id);

    if (task === null) {
      createTask(tasks[i].name, key);
    }
  }
}

function setStartTasksBeforeWork(key) {
  const data = downloadArrayDataFromLocalStorage(key);

  for (let i = 0; i < key.length; i += 1) {
    addTasksToBlock(key[i], data[i].issues);
  }
}

function removeTask(block, index) {
  const task = document.getElementById(block).children[1].children[index];

  task.remove();
}

function getKey(data) {
  const key = [];

  for (let i = 0; i < data.length; i += 1) {
    key.push(data[i].title);
  }

  return key;
}

function addInput(event) {
  const input = document.createElement('input');

  input.id = 'input-task';
  event.target.before(input);
  input.focus();
}

function findBlockLeft(key, arrayKey) {
  const index = arrayKey.indexOf(key);

  return arrayKey[index - 1];
}

function findBlockRight(key, arrayKey) {
  const index = arrayKey.indexOf(key);

  return arrayKey[index + 1];
}

function disableButton() {
  const arrayKey = ['backlog', 'ready', 'inProgress', 'finished'];
  const data = downloadArrayDataFromLocalStorage(arrayKey);

  for (let i = 0; i < data.length - 1; i += 1) {
    const rightBlock = findBlockRight(arrayKey[i], arrayKey);
    const button = document.getElementById(`button-${rightBlock}`);

    if (data[i].issues.length === 0) {
      button.disabled = true;
      button.className = 'disable';
    } else {
      button.disabled = false;
      button.className = 'active';
    }
  }
}

function replaceInputWithTask(input) {
  const key = input.parentNode.parentNode.id;

  saveTask(key, input.value);
  createTask(input.value, key);
  input.remove();
  disableButton();
}

// eslint-disable-next-line no-unused-vars
function replaceDropdownWithTask(event) {
  const key = event.target.parentNode.parentNode.parentNode.id;
  const arrayKey = ['backlog', 'ready', 'inProgress', 'finished'];
  const leftBlock = findBlockLeft(key, arrayKey);
  const data = downloadDataFromLocalStorage(leftBlock);

  for (let i = 0; i < data.issues.length; i += 1) {
    if (data.issues[i].name === event.target.innerHTML) {
      data.issues.splice(i, 1);
      removeTask(leftBlock, i);
      break;
    }
  }
  loadDataInLocalStorage(data);
  saveTask(key, event.target.innerHTML);
  createTask(event.target.innerHTML, key);
  event.target.parentNode.remove();
  disableButton();
}

function createDropdown(event) {
  const dropdownlast = document.getElementById('dropdown-task');

  if (dropdownlast != null) {
    dropdownlast.remove();
  }

  const key = event.target.parentNode.parentNode.id;
  const arrayKey = ['backlog', 'ready', 'inProgress', 'finished'];
  const data = downloadDataFromLocalStorage(findBlockLeft(key, arrayKey));
  const dropdown = document.createElement('ul');
  let list = '';

  for (let i = 0; i < data.issues.length; i += 1) {
    list += `<li class="li-task" onclick=replaceDropdownWithTask(event)>${data.issues[i].name}</li>`;
  }
  dropdown.id = 'dropdown-task';
  dropdown.innerHTML = list;
  event.target.before(dropdown);
  dropdown.focus();
}

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
