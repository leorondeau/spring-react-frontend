import React, { useState, useContext, useEffect  } from 'react'
import { useNavigate, useParams } from "react-router-dom";

import { Employee } from './Employee'
import { EmployeeContext } from './EmployeeProvider'

export const EmployeeForm = (props) => {
    const { employee, addEmployee, getEmployees, updateEmployee, getSingleEmployee } = useContext(EmployeeContext)
    const navigate = useNavigate()
    const params = useParams()
    const eid = parseInt(params.id)
    console.log("params", eid)
    

    const [currentEmployee, setCurrentEmployee] = useState({
        id: null,
        name: "",
        role: ""
    })

    useEffect(() => {
        // debugger
        
        if("id" in params) {
            getSingleEmployee(eid).then(e => {
                
                setCurrentEmployee({
                    id: eid,
                    name: employee.name,
                    role: employee.role
                })
            })
        }
    }, [params])

 

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
                                {
                                    ("id" in params)
                                    ? <button className="btn btn-success"
                                        onClick={evt => {
                                            evt.preventDefault()
                                            // debugger
                                            updateEmployee({
                                                
                                                name: currentEmployee.name,
                                                role: currentEmployee.role
                                            })
                                            .then(() => navigate("/"))
                                        }}
                                        
                                        > Save</button>
                                    
                                    : <button className="btn btn-success" type="submit"
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
                                }
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