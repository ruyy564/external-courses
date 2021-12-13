export const saveTask = (key, value) => {
  const data = JSON.parse(localStorage.getItem(key));

  data.issues.push({ id: `task${data.issues.length + 1}`, name: value });
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadDataInLocalStorage = (data) => {
  localStorage.setItem(data.title, JSON.stringify(data));
};

export const loadArrayDataInLocalStorage = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    if (localStorage.getItem(data[i].title) === null) {
      loadDataInLocalStorage(data);
    }
  }
};

export const downloadDataFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const downloadArrayDataFromLocalStorage = (arrayKey) => {
  const data = [];

  for (let i = 0; i < arrayKey.length; i += 1) {
    data.push(downloadDataFromLocalStorage(arrayKey[i]));
  }

  return data;
};

export const setStartTasksBeforeWork = (key) => {
  const data = downloadArrayDataFromLocalStorage(key);

  for (let i = 0; i < key.length; i += 1) {
    addTasksToBlock(key[i], data[i].issues);
  }
};

const addTasksToBlock = (key, tasks) => {
  let task;

  for (let i = 0; i < tasks.length; i += 1) {
    task = document.getElementById(tasks[i].id);

    if (task === null) {
      createTask(tasks[i].name, key);
    }
  }
};
export const createTask = (value, key) => {
  const p = document.createElement('p');
  const buttonAdd = document.getElementById(`button-${key}`);

  p.className = 'name-task';
  p.innerHTML = value;
  buttonAdd.before(p);
};

const removeTask = (block, index) => {
  const task = document.getElementById(block).children[1].children[index];

  task.remove();
};

export const getKey = (data) => {
  const key = [];

  for (let i = 0; i < data.length; i += 1) {
    key.push(data[i].title);
  }

  return key;
};

const addInput = (event) => {
  const input = document.createElement('input');

  input.id = 'input-task';
  event.target.before(input);
  input.focus();
};

const findBlockLeft = (key, arrayKey) => {
  const index = arrayKey.indexOf(key);

  return arrayKey[index - 1];
};

const findBlockRight = (key, arrayKey) => {
  const index = arrayKey.indexOf(key);

  return arrayKey[index + 1];
};

export const disableButton = () => {
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
};

export const replaceInputWithTask = (input) => {
  const key = input.parentNode.parentNode.id;

  saveTask(key, input.value);
  createTask(input.value, key);
  input.remove();
  disableButton();
};

export const replaceDropdownWithTask = (event) => {
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
};

const createDropdown = (event) => {
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
    list += `<li class="li-task">${data.issues[i].name}</li>`;
  }
  dropdown.id = 'dropdown-task';
  dropdown.innerHTML = list;
  event.target.before(dropdown);
  dropdown.focus();
  
  for(let i=0; i< document.getElementById('dropdown-task').childNodes.length; i++) {
   document.getElementById('dropdown-task').children[i].addEventListener('click', (event)=>replaceDropdownWithTask(event));
  }
  
};

const createBlock= (id)=>{
  const block=`<div class="task" id="${id}">
  <div class="task-header">
    <h2>${id.charAt(0).toUpperCase() + id.slice(1)}</h2>
    <div class="task-settings">
      <img src="assets/dot.svg" alt="" />
    </div>
  </div>
  <div class="task-content">
    <button class="active" id="button-${id}">
      <img src="assets/plus.svg" alt="" />
      Add card
    </button>
  </div>
</div>`
const main=document.querySelector('main');

main.innerHTML=block+main.innerHTML;
}

const addEvent=()=>{
  const main=document.querySelector('main');

  for(let i=0;i<main.children.length;i+=1){
    if(i===0){
      document.getElementById(`button-${main.children[i].id}`).addEventListener('click', addInput);
    }else{
      document.getElementById(`button-${main.children[i].id}`).addEventListener('click', createDropdown);
    }
  }
}

export const createNewList= (id)=>{
  const main=document.querySelector('main');

  createBlock(id);
  addEvent();
}