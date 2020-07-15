import React from 'react'
import Shoe from './Shoe'
import styles from './Shoes.module.css'
import {shoes} from '../../data/data'
import Grid from '@material-ui/core/Grid'
import { Outlet } from 'react-router-dom'

export default function ShoesHome() {
    return (
        <Grid container justify="center" spacing={3} className={styles.container}>
            {
                Object.entries(shoes).map(([id, shoe]) => (
                    <Grid item key={id} xs='auto' md='auto' lg={3}>
                        <Shoe
                        main_image={shoe.main_image}
                        image_title={id}
                        price={shoe.price}
                        type={shoe.type}
                        colors={shoe.colors}
                        url={shoe.url}
                        />
                    </Grid>    
                ))
            }
            <Outlet/>
        </Grid>
    )
}
