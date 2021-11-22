import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext, getEmployees } from './EmployeeProvider'
import {Employee} from './Employee'
import './employee.css'

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)


    useEffect(() => {
        getEmployees()

    }, [])

    console.log("employeesList", employees)
    return (
        <>
            <div>
                <h2 className="text-center font-weight-bold">Employees List</h2>
                <div className="text-center row-center font-weight-bold">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr className="list-titles">
                                <th>Employee Name</th>
                                <th>Employee Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(e => (
                                    <Employee key={e.id} employee={e}/>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}