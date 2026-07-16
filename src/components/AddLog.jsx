import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddLog = () => {
 const [input, setInput] = useState({
    name: "",
    dept: "",
    sem: "",
    course: "",
    systemNo: "",
    login: "",
    logout: "",
    date: ""
  })

  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  const submitData = () => {
        axios
      .post("http://localhost:3000/add-log-entry", input)
      .then((response) => {
        setError(false)
        setMessage("Log Entry Added Successfully");

        setInput({
          name: "",
          dept: "",
          sem: "",
          course: "",
          systemNo: "",
          login: "",
          logout: "",
          date: "",
        });
      })
      .catch((err) => {
        setError(true)
      })
  }

  return (
    <div>
     <NavigationBar/>
      <div className="container mt-4">
        <div className="card shadow">

          <div className="card-header bg-primary text-white text-center">
            <h3>Add Log Entry</h3>
          </div>

          <div className="card-body">
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Department</label>
                <input
                  type="text"
                  className="form-control"
                  name="dept"
                  value={input.dept}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Semester</label>
                <input
                  type="text"
                  className="form-control"
                  name="sem"
                  value={input.sem}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Course</label>
                <input
                  type="text"
                  className="form-control"
                  name="course"
                  value={input.course}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">System No</label>
                <input
                  type="text"
                  className="form-control"
                  name="systemNo"
                  value={input.systemNo}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Login Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="login"
                  value={input.login}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Logout Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="logout"
                  value={input.logout}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={input.date}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-12 text-center">
                <button
                  className="btn btn-primary"
                  onClick={submitData}
                >
                  Add Log Entry
                </button>
              </div>

              <div className="col-12 text-center">
                <h5 className={error ? "text-danger" : "text-success"}>
                  {message}
                </h5>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddLog