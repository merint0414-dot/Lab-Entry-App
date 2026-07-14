import axios from 'axios'
import React, { useEffect, useState } from 'react'

 

const ViewLog = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-log-entry")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>


            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center">
                        <h3>View Log Entries</h3>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover">

                                <thead className="table-dark">
                                    <tr>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Semester</th>
                                        <th>Course</th>
                                        <th>System No</th>
                                        <th>Login</th>
                                        <th>Logout</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {data.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{value.name}</td>
                                                <td>{value.dept}</td>
                                                <td>{value.sem}</td>
                                                <td>{value.course}</td>
                                                <td>{value.systemNo}</td>
                                                <td>{value.login}</td>
                                                <td>{value.logout}</td>
                                                <td>{value.date}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewLog