import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail} from "./employee/EmployeeDetail"



export const ApplicationViews = () => {
    return (
        <>
            <EmployeeProvider>
                <Routes>
                    <Route exact path="/" element={<EmployeeList />} />                    
                    <Route path="/add-employee" element={<EmployeeForm />} />
                    <Route path="/edit-employee/:id" element={<EmployeeForm />} />
                    <Route path="/employees/detail/:id" element={<EmployeeDetail />} />
                </Routes>
            </EmployeeProvider>
        </>
    )
}