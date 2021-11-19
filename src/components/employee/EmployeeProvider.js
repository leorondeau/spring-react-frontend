import React, { useState } from 'react'

export const EmployeeContext = React.createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
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