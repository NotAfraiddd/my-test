import React, { useReducer, useRef, useState } from "react";

function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ?? [];
  }); //storageJobs phải là null or undefined thì mới lấy phía sau

  const inputRef = useRef();

  const handleDelete = (indexValue) => {
    const jobIndexValue = jobs.filter((job, index) => index !== indexValue)
    // filter ra các phần tử được chứa trong mảng mà có vị trí khác so với vị trí được chọn

    localStorage.setItem('jobs', JSON.stringify(jobIndexValue));
    // lưu những giá trị phần tử ở trên vào localStorage

    setJobs(jobIndexValue);
    // setJobs lại
  }

  const handleSubmit = () => {
    setJobs(older => {
      const newJobs = [...older, job]

      const jsonJobs = JSON.stringify(newJobs)// luwu vaof localstorage

      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
    inputRef.current.focus()
  }

  return (
    <div className="App" style={{ padding: "0 20px" }}>
      <h3>Todo App</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo...."
        onChange={e => setJob(e.target.value)}
      />

      <button onClick={handleSubmit}>Add</button>
      <ul>
        {console.log(jobs)}
        {
          jobs.map((item, index) => (
            <li key={index}> {item} <span onClick={() => handleDelete(index)}>&times;</span></li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
