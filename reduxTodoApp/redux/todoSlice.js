import {createSlice} from '@reduxjs/toolkit';
import shortid from 'shortid';
const initialState = [];

const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask(state, action) {
      const taskObject = {
        key: shortid.generate(),
        task: action.payload,
        isComplete: false,
      };
      state.push(taskObject);
    },
    removeTask(state, action) {
      return state.filter(task => task.key !== action.payload);
    },
    // CompleteTask(state, action) {
    //   state.map(task => {
    //     if (task.key === action.payload) {
    //       task.isComplete = !task.isComplete;
    //     }
    //   });
    // },
    CompleteTask(state, action) {
      return state.map(task => {
        if (task.key === action.payload) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        }
        return task;
      });
    },
  },
});

export const {addTask, removeTask, CompleteTask} = TodoSlice.actions;
export default TodoSlice.reducer;
