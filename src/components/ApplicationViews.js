import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"



export const ApplicationViews = () => {
    return (
        <>
            <EmployeeProvider>
                <Routes>
                    <Route exact path="/" element={<EmployeeList />} />
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/add-employee" element={<EmployeeForm />} />
                </Routes>
            </EmployeeProvider>
        </>
    )
}