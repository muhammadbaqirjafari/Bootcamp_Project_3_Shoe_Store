import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography, Link } from '@material-ui/core'
import styles from './Footer.module.css'


export default function Footer() {
    return (    
        <AppBar position='relative' color='transparent'>
            <Toolbar className={styles.container}>
                <Typography variant="h6" className={styles.info}>
                    This Website is Created By <span style={{cursor : "pointer"}}>muhammadbaqirjafari@gmail.com</span>
                </Typography>
                <div className={styles.github}>
                    <Link variant="h6" href="https://github.com/"  style={{color : 'black'}} className={styles.link}>
                        GitHub
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}