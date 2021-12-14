import {calcStartCountTask,createFullList,disableButton,loadDataInLocalStorage,setStartTasksBeforeWork,downloadDataFromLocalStorage} from './createNewList.js';
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

if(downloadDataFromLocalStorage('boardsMocks')==null){
  loadDataInLocalStorage(boardsMocks);
}
createFullList();
disableButton();
setStartTasksBeforeWork('boardsMocks');
calcStartCountTask();