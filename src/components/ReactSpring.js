import React from 'react'
import {Route, Redirect } from "react-router-dom"
import { ApplicationViews } from './ApplicationViews'

export const ReactSpring = ()=>{
    <>
        <Route render={() => {
            <Route render={props => <ApplicationViews {...props} />} />
        }}/>
    </>

}