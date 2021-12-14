import {createDropDownSetting} from '../main/createDropListSetting.js'

export const saveTask = (key, value) => {
  let data = JSON.parse(localStorage.getItem('boardsMocks'));

  for (let i = 0; i < data.length; i += 1) {
    if(data[i].title===key){
      data[i].issues.push({ id: `task${data[i].issues.length + 1}`, name: value });
      break;
    }
  }

  loadDataInLocalStorage(data);
  calcStartCountTask();
};

export const calcStartCountTask=()=>{
  let data = JSON.parse(localStorage.getItem('boardsMocks'));
  
  if(data.length!==0){  
    document.getElementById('count-first-block').innerHTML=data[0].issues.length;
    document.getElementById('count-last-block').innerHTML=data[data.length-1].issues.length;
  }else{
    document.getElementById('count-first-block').innerHTML=0;
    document.getElementById('count-last-block').innerHTML=0;
  }
}
export const loadDataInLocalStorage = (data) => {
    localStorage.setItem('boardsMocks', JSON.stringify(data));
};

export const downloadDataFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setStartTasksBeforeWork = () => {
  const data = downloadDataFromLocalStorage('boardsMocks');

  for (let i = 0; i < data.length; i += 1) {
    addTasksToBlock(data[i].title, data[i].issues);
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

export const getKey = (key) => {
  const data=downloadDataFromLocalStorage(key);
  const loadKey = [];

  for (let i = 0; i < data.length; i += 1) {
    loadKey.push(data[i].title);
  }

  return loadKey;
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
  const arrayKey = getKey('boardsMocks');
  const data = downloadDataFromLocalStorage('boardsMocks');
  
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
  const arrayKey = getKey('boardsMocks');
  const leftBlock = findBlockLeft(key, arrayKey);
  let data = downloadDataFromLocalStorage('boardsMocks');
  for(let j=0; j<data.length; j+=1){
    if(data[j].title===leftBlock){
      for (let i = 0; i < data[j].issues.length; i += 1) {
        if (data[j].issues[i].name === event.target.innerHTML) {
          data[j].issues.splice(i, 1);
          removeTask(leftBlock, i);
          break;
        }
      }
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
  const arrayKey = getKey('boardsMocks');
  const nameLeftBlock=findBlockLeft(key, arrayKey)
  const data = downloadDataFromLocalStorage('boardsMocks');
  const dropdown = document.createElement('ul');
  let list = '';
  for(let j=0; j<data.length; j+=1){
    if(data[j].title===nameLeftBlock){
      for (let i = 0; i < data[j].issues.length; i += 1) {
        list += `<li class="li-task">${data[j].issues[i].name}</li>`;
      }
    }
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
  let block;
    block=`<div class="task" id="${id}">
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

export const createNewBlock= ()=>{
  const block=`<div class="task">
    <div class="task-header">
      <h2><input id="task-name"></h2>
      <div class="task-settings">
        <img src="assets/dot.svg" alt="" />
      </div>
    </div>
    <div class="task-content">
      <button class="active">
        <img src="assets/plus.svg" alt="" />
        Add card
      </button>
    </div>
  </div>`
  
const main=document.querySelector('main');
document.getElementById('msg').style.display="none";
main.innerHTML=block+main.innerHTML;
let inputName= document.getElementById('task-name');
inputName.focus();
}


const addEvent=()=>{
  const main=document.querySelector('main');

  for(let i=0;i<main.children.length;i+=1){
    document.querySelectorAll(`.task-settings`)[i].onclick = (event)=>{
      createDropDownSetting(event);
    };

    if(i===0){
      document.getElementById(`button-${main.children[i].id}`).onclick= addInput;
    }else{
      document.getElementById(`button-${main.children[i].id}`).onclick=createDropdown;
    }
  }
}

export const createFullList=()=>{
  const arrayKey=getKey('boardsMocks');

  for(let i=arrayKey.length-1; i>=0; i-=1){
    createBlock(arrayKey[i]);
  }
  addEvent();
}
export const saveBlock=(input,task)=>{
  task.id=input.value;
  task.children[0].children[0].innerHTML=input.value;
  task.children[1].children[0].id=`button-${input.value}`;

  let data=downloadDataFromLocalStorage('boardsMocks');
  data.unshift({
    title: input.value,
    issues: [
    ],
  });  
  loadDataInLocalStorage(data);
  addEvent();
  disableButton();
  calcStartCountTask();
}

export const removeBlock=(id)=>{
  let data = downloadDataFromLocalStorage('boardsMocks');

  for(let j=0; j<data.length; j+=1){
    if(data[j].title===id){
      data.splice(j, 1);
      break;
    }
  }
  loadDataInLocalStorage(data);
  addEvent();
  disableButton();
  calcStartCountTask();
  if(data.length==0){
    document.getElementById('msg').style.display="block";
  }

}