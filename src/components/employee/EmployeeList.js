import React, {useContext, useEffect, useState } from 'react'
import { EmployeeContext } from './EmployeeProvider'

export const EmployeeList = (props) => {
    const {employees, setEmployees} = useState([])

    useEffect(() => {
        getEmployees()
        
    },[])

    return (
        <>
        <section> 
            {
                employees.map(e => (
                    <div key={e.id} value={e.id}>{e.name}</div>
                ))
            }
        </section>
        </>
    )
}