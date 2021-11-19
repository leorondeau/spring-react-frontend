import React from 'react'
import {Link} from 'react-router-dom'
import { EmployeeContext } from './EmployeeProvider'

export const Employee = ({ employee})=> {
    return (
        <>
            <section className="employee">
                <div className="employee__name" id={`employee--${employee.id}`}>
                    {employee.name}
                </div>
                <div>
                    {employee.role}
                </div>
            </section>
            </>
    )
}