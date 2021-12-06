import react from "react";

export const EmployeeDetail = ({ employee }) => {


    return (
        <>

            <div className="employee_detail">
                <div>{employee.name}</div>
                <div>{employee.role}</div>
            </div>
        </>
    )
}