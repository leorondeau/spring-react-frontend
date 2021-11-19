import React, {useState} from 'react'

export const EmployeeContext = React.createContext()

export const EmployeeProvider = (props) => {
    const[employees, setEmployees]= useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8080/api/v1/employees",
        {
            headers:
            'Content-type: application/json'}
    )
    .then(response => response.json())
    .then(setEmployees)
}

return (
    <EmployeeContext.Provider
    value={{employees, setEmployees, getEmployees}}>
        {props.children}
    </EmployeeContext.Provider>
)
}