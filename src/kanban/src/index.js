import './styles.css';
import './header/createProfileDropDown.js';
import './header/createList.js';
import './main/createStartBlocklist.js';
import {replaceInputWithTask,saveBlock,removeBlock,downloadDataFromLocalStorage} from './main/createNewList';
import './main/createDropListSetting.js';

window.onclick = (event) => {
  const input = document.getElementById('input-task');
  const inputName= document.getElementById('task-name');
  const task=document.querySelector('.task');
  const dropdown = document.getElementById('dropdown-task');
  const list = document.getElementById('profile-list');
  const imageArrow = document.getElementById('img-arrow');
  const settingDropdown=document.getElementById('list-setting');
  const data = downloadDataFromLocalStorage('boardsMocks');

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
  if (inputName != null) {
    if (inputName !== document.activeElement) {
      if (inputName.value !== '') {
        saveBlock(inputName,task);
      } else {
        task.remove();
        if(data.length==0){
          document.getElementById('msg').style.display="block";
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

  if (settingDropdown != null) {
    if(event.target==settingDropdown.children[0].children[0]){
      event.target.parentNode.parentNode.parentNode.parentNode.remove();
      removeBlock(event.target.parentNode.parentNode.parentNode.parentNode.id);
      settingDropdown.remove();
    }

      if (!event.target.parentNode.matches('.task-settings')) {
        settingDropdown.remove();
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