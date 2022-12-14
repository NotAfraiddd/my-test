/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { useReducer, useRef } from "react";
//use Reducer
//1. Initialized state
const initState = {
  job: "",
  jobs: [],
};
//2.Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

//3.Reducer
const reducer = (state, action) => {
  console.log('Action:', action);
  console.log('Previous state:', state);

  let newState
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        //...state là bảo lưu state cũ
        job: action.payload
      }
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs] // lấy mảng cũ
      newJobs.splice(action.payload, 1)
      newState = {
        ...state,
        jobs: newJobs
      }
      break;
    default:
      throw new Error('Invalid action.')
  }

  console.log('new state', newState);

  return newState;
}

//4.Dispatcher
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();


  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()

  }
  return (
    <div className="App" style={{ padding: "0 20px" }}>
      <h3>Todo App</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo...."
        onChange={e => {
          dispatch(setJob(e.target.value));
        }} />

      <button onClick={handleSubmit}>Add</button>
      <ul>
        {
          jobs.map((item, index) => (
            <li key={index}> {item} <span onClick={() => dispatch(deleteJob(index))}>&times;</span></li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
