import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from './ApplicationViews'
import { EmployeeProvider } from './employee/EmployeeProvider'
import { NavBar } from './nav/NavBar'


export const ReactSpring = () => {
    return (
        <>
            <NavBar />
            {/* <h1>Honey Rae's Repair Shop</h1> */}
            <ApplicationViews />
        </>
    )
}