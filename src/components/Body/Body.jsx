import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './Home'
import Shoes from './Shoes'
import NotFound from './NotFound'
import Paper from '@material-ui/core/Paper'
import styles from './Body.module.css'
import {shoes} from '../../data/data'
import ShoeItem from './ShoeItem'
import ShoesHome from './ShoesHome'
import About from './About'

export default function Body() {
    return (
        <Paper className={styles.container} className={"MuiPaper-elevation2"}>
            <Routes>
                <Route path="home" element={<Home/>}></Route>
                <Route path="shoe" element={<Shoes/>}>
                    <Route path="/" element={<ShoesHome/>}></Route>
                    {
                        Object.entries(shoes).map(([id, shoe]) => (
                            <Route key={id} path={shoe.url} element={<ShoeItem images={shoe.all_images}/>}>
                            </Route>
                        ))
                    }
                </Route>
                <Route path="about" element={<About/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>   

            <Outlet />
        </Paper>
    )
}