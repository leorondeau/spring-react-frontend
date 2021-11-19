import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"



export const ApplicationViews = () => {
    return (
        <>

            <Route path="/employees">
                <EmployeeList />
            </Route>


        </>
    )
}