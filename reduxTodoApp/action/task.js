import {ADD_TASK, REMOVE_TASK, IS_COMPLETE_TASK} from './action.types';

export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: id,
});

export const isCompleteTask = id => ({
  type: IS_COMPLETE_TASK,
  payload: id,
});
