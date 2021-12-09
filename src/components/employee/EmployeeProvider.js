import React, { useState } from 'react'
import axios from 'axios'

export const EmployeeContext = React.createContext()
// const EMPLOYEE_APT_BASE_URL = "http://localhost:8080/api/v1/employees"

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])
    const [employee, setEmployee] = useState({})
    
    const getEmployees = () => {
        // return axios.get(EMPLOYEE_APT_BASE_URL)
        //     .then(response => response.json())
        //     .then(setEmployees)

        return fetch("http://localhost:8080/api/v1/employees")
            .then(response => response.json())
            .then(setEmployees)
    }
 
    const getSingleEmployee = (id) => {
        // return axios.get(EMPLOYEE_APT_BASE_URL)
        //     .then(response => response.json())
        //     .then(setEmployees)

        return fetch(`http://localhost:8080/api/v1/employees/${id}`)
            .then(response => response.json())
            .then(setEmployee)
    }
    

    const addEmployee = (employee) => {
        return fetch("http://localhost:8080/api/v1/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(getEmployees)
        
    }

    const updateEmployee = (employee) => {
        return fetch(`http://localhost:8080/api/v1/employees/${employee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(getEmployees)
    }

    
    return (
        <EmployeeContext.Provider
            value={{ employees, employee, addEmployee, getEmployees, updateEmployee, getSingleEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}