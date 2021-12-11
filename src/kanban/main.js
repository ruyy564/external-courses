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