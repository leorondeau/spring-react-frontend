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

        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h4 className="orderForm__title text-center">Add New Employee</h4>
                    <div className="card-body">
                        <form>

                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="name">Employee Name</label>
                                    <input type="text" name="name" value={currentEmployee.name}
                                        onChange={handleControlledInputChange} />
                                </div>
                            </fieldset>
                            <fieldset>
                                <div>
                                    <label htmlFor="role">Employee Role</label>
                                    <input type="text" name="role" value={currentEmployee.role}
                                        onChange={handleControlledInputChange} />
                                </div>
                            </fieldset>
                            <button className="btn btn-primary" type="submit"
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
                                className="btn"> Create</button>
                            <button className="btn btn-primary" type="submit"
                                onClick={evt => {
                                    evt.preventDefault()
                                    navigate(`/`)
                                }}
                                className="btn"> Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}