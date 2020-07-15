import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography, makeStyles, Link } from '@material-ui/core'


const useStyles = makeStyles(()=> ({
    container : {
    },
    info : {
        marginLeft : '23%',
    },
    github : {
        marginLeft: '27%',
        cursor : 'pointer',
        color : 'black',
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (    
        <AppBar position='relative' color='transparent'>
            <Toolbar className={classes.container}>
                <Typography variant="h6" className={classes.info}>
                    This Website is Created By <span style={{cursor : "pointer"}}>muhammadbaqirjafari@gmail.com</span>
                </Typography>
                <div className={classes.github}>
                    <Link variant="h6" href="https://github.com/"  style={{color : 'black'}}>
                        GitHub
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}
