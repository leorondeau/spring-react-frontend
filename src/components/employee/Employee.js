import React from 'react'
import {Link} from 'react-router-dom'
import { EmployeeContext } from './EmployeeProvider'

export const Employee = ({employee})=> {
    return (
        <>
            <tr className="employee">
                <td className="employee__name" id={`employee--${employee.id}`}>
                    <Link to={`/employees/detail/${employee.id}`}>{employee.name}</Link>
                </td>
                <td>
                    {employee.role}
                </td>
            </tr>
            </>
    )
}