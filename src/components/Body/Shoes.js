import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Shoes() {
    return (
        <div style={{marginBottom:'1.5%'}}>
            <Outlet/>
        </div>
    )
}
