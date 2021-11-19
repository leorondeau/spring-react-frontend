import { Route } from "react-router-dom"
import React, { useState } from "react"
import { EmployeeProvider } from "./employee/EmployeeProvider"

export const ApplicationViews = (props) => {
    const [value, setValue] = useState(false)

    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
        </main>
        <EmployeeProvider>
            <Route exact path="/employees" render={(props)=>{
                return <EmployeeList {...props}/>
            }}
            ></Route>
        </EmployeeProvider>
    </>
}