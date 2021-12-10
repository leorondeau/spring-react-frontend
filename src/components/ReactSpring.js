import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from './ApplicationViews'
import { EmployeeProvider } from './employee/EmployeeProvider'
import { NavBar } from './nav/NavBar'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'


export const ReactSpring = () => {
    return (
        <>
            {/* <NavBar /> */}
            <Header />
            <ApplicationViews />
            <Footer />
        </>
    )
}