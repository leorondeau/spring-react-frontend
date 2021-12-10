import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider";


export const EmployeeDetail = (props) => {

    const { employee, getSingleEmployee, deleteEmployee } = useContext(EmployeeContext)
    const navigate = useNavigate()
    const params = useParams()
    const employeeId = parseInt(params.id)
    console.log("eid", employeeId)

    useEffect(() => {
        getSingleEmployee(employeeId)
        // .then(setCurrentEmployee(employee))

    }, [])



    return (
        <>
            <div className="employee_detail container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h4 className="text_center font-weight-bold">Employee Detail</h4>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr className="list-titles text-center">
                                    <th>Employee Name</th>
                                    <th>Employee Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <th className="text-center">{employee.name}</th>
                                <th className="text-center">{employee.role}</th>
                            </tbody>
                        </table>
                    </div>
                    <tbody>
                        <td>
                        <button className="btn btn-success" type="button"
                            onClick={evt => {
                                evt.preventDefault()
                                navigate(`/edit-employee/${employee.id}`)

                            }}>
                            Edit
                        </button>
                        <button className="btn btn-danger" type="button" style={{marginLeft: "10px"}}
                            onClick={evt => {
                                evt.preventDefault()
                                deleteEmployee(employeeId)
                                .then(() => navigate(`/`))
                            }}>
                            Delete
                        </button>
                        </td>
                    </tbody>
                </div>

            </div>
        </>
    )
}