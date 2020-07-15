import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook'
import GitHub from '@material-ui/icons/GitHub'
import styles from './About.module.css'


export default function About() {
    return (
        <div>
            <Typography variant="h2" className={styles.text1}>
                Created By : 
                <span className={styles.name}>  muhammadbaqirjafari@gmail.com</span>
            </Typography>
            <Typography variant="h2" className={styles.text2}>
                Source Code :
                <Link href="#">
                    <GitHub fontSize='large' className={styles.github2}/>
                </Link>
            </Typography>
            <Typography variant="h2" className={styles.text3}>
                Contact Me : 
                <Link href="#">
                  <Facebook fontSize='large' className={styles.facebook}/>
                </Link>
                <Link href="#">
                    <GitHub fontSize='large' className={styles.github}/>
                </Link>
            </Typography>
        </div>
    )
}
