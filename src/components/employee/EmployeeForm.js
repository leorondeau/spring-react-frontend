import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";

import { Employee } from './Employee'
import { EmployeeContext } from './EmployeeProvider'

export const EmployeeForm = (props) => {
    const { addEmployee, getEmployees } = useContext(EmployeeContext)
    const navigate = useNavigate()
    console.log("history", navigate)

    const [currentEmployee, setCurrentEmployee] = useState({
        id: null,
        name: "",
        role: ""
    })

    const handleControlledInputChange = (event) => {
        const newEmployeeState = Object.assign({}, currentEmployee)
        newEmployeeState[event.target.name] = event.target.value
        setCurrentEmployee(newEmployeeState)
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h4 className="orderForm__title text-center">Add New Employee</h4>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Employee Name</label>
                                    <input type="text" name="name" className="form-control" value={currentEmployee.name}
                                        onChange={handleControlledInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">Employee Role</label>
                                    <input type="text" name="role" className="form-control" value={currentEmployee.role}
                                        onChange={handleControlledInputChange} />
                                </div>
                                <div style={{marginTop: "10px"}}>
                                    <button className="btn btn-success" type="submit"
                                        onClick={evt => {
                                            evt.preventDefault()

                                            const employee = {
                                                id: null,
                                                name: currentEmployee.name,
                                                role: currentEmployee.role
                                            }
                                            addEmployee(employee)
                                                .then(() => {
                                                    getEmployees()
                                                        .then(() => navigate(`/employees`))
                                                })
                                        }}

                                    > Create</button>
                                    <button className="btn btn-danger" type="submit"
                                        onClick={evt => {
                                            evt.preventDefault()
                                            navigate(`/`)
                                        }} style={{ marginLeft: "10px" }}
                                    > Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}