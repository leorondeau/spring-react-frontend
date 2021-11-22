import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext, getEmployees } from './EmployeeProvider'

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)


    useEffect(() => {
        getEmployees()

    }, [])
    
console.log("employeesList", employees)
    return (
        <>
            <section>
                <h2 className="text-center">Employees List</h2>
                <div className = "row">
                    <table></table>
                {
                    employees.map(e => (
                        <div key={e.id} value={e.id}>{e.name}</div>
                        ))
                    }
                    </div>
            </section>
        </>
    )
}