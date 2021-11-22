import React, { useState } from 'react'
import axios from 'axios'

export const EmployeeContext = React.createContext()
// const EMPLOYEE_APT_BASE_URL = "http://localhost:8080/api/v1/employees"

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        // return axios.get(EMPLOYEE_APT_BASE_URL)
        //     .then(response => response.json())
        //     .then(setEmployees)

        return fetch("http://localhost:8080/api/v1/employees")
            .then(response => response.json())
            .then(setEmployees)
    }


    console.log("employeesContext", employees)

    return (
        <EmployeeContext.Provider
            value={{ employees, getEmployees }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}