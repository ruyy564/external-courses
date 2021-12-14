import {createNewBlock} from '../main/createNewList'

const button= document.querySelector('.button-add');

button.addEventListener('click', ()=>{
    createNewBlock();
});